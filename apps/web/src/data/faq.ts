export const faqData = [
  {
    question: "What is your return policy?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "Our return policy allows you to return items within 30 days of purchase. The items must be in their original condition with tags attached.",
        },
        {
          type: "heading",
          text: "Return process:",
        },
        {
          type: "orderedList",
          items: [
            "Complete the return form included with your order",
            "Package the item securely with all original packaging",
            "Ship the item using the prepaid return label",
            "Wait for confirmation email once we receive your return",
            "Receive your refund within 5-7 business days",
          ],
        },
      ],
    },
  },
  {
    question: "How do I track my order?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "You can track your order through multiple methods:",
        },
        {
          type: "unorderedList",
          items: [
            "Log into your account and view your order history",
            "Use the tracking number in your shipping confirmation email",
            "Contact our customer service team with your order number",
          ],
        },
      ],
    },
  },
  {
    question: "Do you ship internationally?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "Yes, we ship to most countries worldwide. International shipping times vary depending on the destination.",
        },
        {
          type: "table",
          headers: ["Region", "Shipping Time", "Cost"],
          rows: [
            ["North America", "5-7 business days", "$15-25"],
            ["Europe", "7-10 business days", "$25-40"],
            ["Asia", "10-14 business days", "$30-45"],
          ],
        },
        {
          type: "note",
          text: "Additional customs fees may apply depending on your country's import regulations.",
        },
      ],
    },
  },
  {
    question: "What payment methods do you accept?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "We accept the following payment methods:",
        },
        {
          type: "unorderedList",
          items: [
            "All major credit cards (Visa, Mastercard, American Express, Discover)",
            "PayPal",
            "Apple Pay",
            "Google Pay",
          ],
        },
        {
          type: "paragraph",
          text: "We also offer financing options through Affirm for orders over $100.",
        },
      ],
    },
  },
  {
    question: "How can I contact customer support?",
    answer: {
      type: "complex",
      content: [
        {
          type: "paragraph",
          text: "Our customer support team is available through multiple channels:",
        },
        {
          type: "unorderedList",
          items: [
            "Email: support@example.com",
            "Phone: 1-800-123-4567 (Monday-Friday, 9am-6pm EST)",
            "Live Chat: Available on our website 24/7",
          ],
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
