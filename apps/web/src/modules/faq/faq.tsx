"use client";

import { type ContentItem, faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedList } from "./animated-list";
import { AnimatedTable } from "./animated-table";

// Helper function to generate hash for string content
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
}

const RenderContent = ({ content }: { content: ContentItem[] }) => {
  return (
    <>
      {content.map((item) => {
        switch (item.type) {
          case "paragraph": {
            const contentKey = hashString(item.text);
            return (
              <p key={`paragraph-${contentKey}`} className="mb-2">
                {item.text}
              </p>
            );
          }

          case "heading": {
            const contentKey = hashString(item.text);
            return (
              <p key={`heading-${contentKey}`} className="font-medium mb-1">
                {item.text}
              </p>
            );
          }

          case "note": {
            const contentKey = hashString(item.text);
            return (
              <motion.p
                key={`note-${contentKey}`}
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.text}
              </motion.p>
            );
          }

          case "orderedList": {
            const contentKey = hashString(item.items.join("-"));
            return (
              <AnimatedList
                key={`orderedList-${contentKey}`}
                type="ol"
                className="list-decimal list-inside space-y-1 mb-2"
              >
                {item.items.map((listItem) => (
                  <li key={`item-${hashString(listItem)}`}>{listItem}</li>
                ))}
              </AnimatedList>
            );
          }

          case "unorderedList": {
            const contentKey = hashString(item.items.join("-"));
            return (
              <AnimatedList
                key={`unorderedList-${contentKey}`}
                type="ul"
                className="list-disc list-inside space-y-1 mb-3"
              >
                {item.items.map((listItem) => (
                  <li key={`item-${hashString(listItem)}`}>{listItem}</li>
                ))}
              </AnimatedList>
            );
          }

          case "table": {
            const contentKey = hashString(item.headers.join("-"));
            return (
              <div
                key={`table-${contentKey}`}
                className="overflow-x-auto mt-3 mb-2"
              >
                <AnimatedTable className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      {item.headers.map((header) => (
                        <th
                          key={`header-${hashString(header)}`}
                          className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {item.rows.map((row) => {
                      const rowKey = hashString(row.join("-"));
                      return (
                        <tr key={`row-${rowKey}`}>
                          {row.map((cell) => (
                            <td
                              key={`cell-${hashString(cell)}`}
                              className="px-4 py-2 whitespace-nowrap"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </AnimatedTable>
              </div>
            );
          }

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
          key={`faq-${hashString(faq.question)}`}
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
                    <RenderContent
                      content={faq.answer.content as ContentItem[]}
                    />
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
