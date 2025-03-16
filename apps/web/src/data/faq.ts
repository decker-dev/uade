export const faqData = [
  {
    question: "Existen comunidades de estudiantes en la UADE?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "Si, existen comunidades de estudiantes en la UADE.",
        },
        {
          type: "unorderedList",
          items: [
            "FAIN UADE: Es una comunidad de discord para estudiantes de la UADE",
          ],
        },
      ],
    },
  },
  {
    question: "Cual es el precio de la UADE?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "El precio de la UADE varia dependiendo de la carrera que elijas y turno que elijas.",
        },
        {
          type: "table",
          headers: ["Carrera", "Turno", "Precio"],
          rows: [
            ["Ingenieria Informatica", "Mañana", "$324,998"],
            ["Ingenieria Informatica", "Tarde", "$324,998"],
            ["Ingenieria Informatica", "Noche", "$324,998"],
          ],
        },
        {
          type: "note",
          text: "El precio esta actualizado al 1ro de Febrero de 2025, consulte a la UADE para informacion actualizada.",
        },
      ],
    },
  },
];

// Define types for our FAQ data structure
export type ContentItem =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "note"; text: string }
  | { type: "orderedList"; items: string[] }
  | { type: "unorderedList"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type FaqItem = {
  question: string;
  answer: {
    type: "complex";
    content: ContentItem[];
  };
};
