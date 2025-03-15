import { subjectData } from "@/lib/subjects";

interface ProgressCarrearProps {
  completedSubjects: string[];
}

export function ProgressCarrear({ completedSubjects }: ProgressCarrearProps) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Progreso</h2>
      <p className="mb-4">
        Has completado {completedSubjects.length} de{" "}
        {subjectData.subjects.length} materias (
        {Math.round(
          (completedSubjects.length / subjectData.subjects.length) * 100,
        )}
        %)
      </p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{
            width: `${(completedSubjects.length / subjectData.subjects.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
