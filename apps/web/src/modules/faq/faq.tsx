"use client";

import { type ContentItem, faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const RenderContent = ({ content }: { content: ContentItem[] }) => {
  return (
    <>
      {content.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return (
              <p key={index} className="mb-2">
                {item.text}
              </p>
            );
          case "heading":
            return (
              <p key={index} className="font-medium mb-1">
                {item.text}
              </p>
            );
          case "orderedList":
            return (
              <ol
                key={index}
                className="list-decimal list-inside space-y-1 mb-2"
              >
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ol>
            );
          case "unorderedList":
            return (
              <ul key={index} className="list-disc list-inside space-y-1 mb-3">
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto mt-3 mb-2">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      {item.headers.map((header, i) => (
                        <th
                          key={i}
                          className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {item.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="px-4 py-2 whitespace-nowrap"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "note":
            return (
              <p key={index} className="text-sm text-muted-foreground">
                {item.text}
              </p>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "border rounded-lg overflow-hidden",
            expandedIndex === index ? "border-primary" : "border-border",
          )}
        >
          <motion.button
            onClick={() => toggleQuestion(index)}
            className="flex justify-between items-center w-full p-6 text-left"
            whileHover={{ backgroundColor: "rgba(var(--primary), 0.05)" }}
            aria-expanded={expandedIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <motion.div
                  className="p-6 pt-0 text-muted-foreground"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {faq.answer.type === "complex" && (
                    <RenderContent content={faq.answer.content} />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
