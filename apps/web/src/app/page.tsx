"use client"

import { useState, useEffect } from "react"
import { subjectData } from "@/lib/subjects"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SubjectTracker() {
  const [completedSubjects, setCompletedSubjects] = useState<string[]>(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Try to get saved subjects from localStorage
      const saved = localStorage.getItem("completedSubjects")
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error("Failed to parse saved subjects", e)
          return []
        }
      }
    }
    return []
  })

  useEffect(() => {
    // Save to localStorage whenever completedSubjects changes
    if (typeof window !== "undefined") {
      localStorage.setItem("completedSubjects", JSON.stringify(completedSubjects))
    }
  }, [completedSubjects])

  const isSubjectAvailable = (subject: any) => {
    // If there are no prerequisites, the subject is available
    if (subject.prerequisites.length === 0) return true

    // Check if all prerequisites are completed
    return subject.prerequisites.every((prerequisite: string) => completedSubjects.includes(prerequisite))
  }

  const toggleSubject = (subjectId: string) => {
    if (completedSubjects.includes(subjectId)) {
      // Remove the subject and any subjects that depend on it
      const subjectsToRemove = [subjectId]

      // Find all subjects that depend on this one (directly or indirectly)
      let foundMore = true
      while (foundMore) {
        foundMore = false
        subjectData.subjects.forEach((subject) => {
          if (
            completedSubjects.includes(subject.id) &&
            !subjectsToRemove.includes(subject.id) &&
            subject.prerequisites.some((prereq) => subjectsToRemove.includes(prereq))
          ) {
            subjectsToRemove.push(subject.id)
            foundMore = true
          }
        })
      }

      setCompletedSubjects((prev) => prev.filter((id) => !subjectsToRemove.includes(id)))
    } else {
      // Add the subject if it's available
      const subject = subjectData.subjects.find((s) => s.id === subjectId)
      if (subject && isSubjectAvailable(subject)) {
        setCompletedSubjects((prev) => [...prev, subjectId])
      }
    }
  }

  // Group subjects by year
  const subjectsByYear = Array.from({ length: 5 }, (_, i) => i + 1).map((year) => {
    return subjectData.subjects.filter((subject) => subject.year === year)
  })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Plan de Estudios - Seguimiento de Materias</h1>

      <div className="space-y-8">
        {subjectsByYear.map((yearSubjects, yearIndex) => (
          <div key={yearIndex} className="border rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Año {yearIndex + 1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yearSubjects.map((subject) => {
                const isAvailable = isSubjectAvailable(subject)
                const isCompleted = completedSubjects.includes(subject.id)

                return (
                  <TooltipProvider key={subject.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card
                          className={`p-4 cursor-pointer transition-all ${
                            isCompleted
                              ? "bg-green-100 dark:bg-green-900"
                              : isAvailable
                                ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                                : "bg-gray-100 dark:bg-gray-900 opacity-70"
                          }`}
                          onClick={() => {
                            if (isAvailable) toggleSubject(subject.id)
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox
                              checked={isCompleted}
                              disabled={!isAvailable}
                              onCheckedChange={() => {
                                if (isAvailable) toggleSubject(subject.id)
                              }}
                              className="mt-1"
                            />
                            <div>
                              <h3 className="font-medium">{subject.name}</h3>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {subject.prerequisites.length > 0 ? (
                                  subject.prerequisites.map((prereq) => {
                                    const prereqSubject = subjectData.subjects.find((s) => s.id === prereq)
                                    const isPrereqCompleted = completedSubjects.includes(prereq)

                                    return (
                                      <Badge
                                        key={prereq}
                                        variant={isPrereqCompleted ? "default" : "outline"}
                                        className="text-xs"
                                      >
                                        {prereqSubject?.name || prereq}
                                      </Badge>
                                    )
                                  })
                                ) : (
                                  <Badge variant="secondary" className="text-xs">
                                    Sin correlativas
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        {!isAvailable && (
                          <div>
                            <p className="font-semibold">Correlativas pendientes:</p>
                            <ul className="list-disc pl-4 mt-1">
                              {subject.prerequisites.map((prereq) => {
                                const prereqSubject = subjectData.subjects.find((s) => s.id === prereq)
                                const isPrereqCompleted = completedSubjects.includes(prereq)

                                if (!isPrereqCompleted) {
                                  return <li key={prereq}>{prereqSubject?.name || prereq}</li>
                                }
                                return null
                              })}
                            </ul>
                          </div>
                        )}
                        {isAvailable && !isCompleted && <p>Haz clic para marcar como completada</p>}
                        {isCompleted && <p>Haz clic para desmarcar</p>}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Progreso</h2>
        <p className="mb-4">
          Has completado {completedSubjects.length} de {subjectData.subjects.length} materias (
          {Math.round((completedSubjects.length / subjectData.subjects.length) * 100)}%)
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${(completedSubjects.length / subjectData.subjects.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

