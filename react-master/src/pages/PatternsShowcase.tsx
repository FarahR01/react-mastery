import ExerciseCard from "../components/ExerciseCard";
import "./PatternsShowcase.css";

const patterns = [
  {
    title: "Accordion Pattern",
    description:
      "Master the compound component pattern with Context API. Build collapsible sections with shared state management.",
    icon: "📂",
    path: "/patterns/accordion",
    concepts: [
      "Composition",
      "Context API",
      "State Management",
      "Compound Components",
    ],
  },
  {
    title: "Render Props Pattern",
    description:
      "Learn how to share reusable logic while giving the parent complete control over rendering.",
    icon: "🎨",
    path: "/patterns/render-props",
    concepts: [
      "Logic Separation",
      "Reusability",
      "Functional Props",
      "Composition",
    ],
  },
  {
    title: "Tabs Pattern",
    description:
      "Learn how to create tabbed interfaces with reusable components.",
    icon: "📑",
    path: "/patterns/tabs",
    concepts: ["Tabs", "Navigation", "State"],
  },
  {
    title: "Coming Soon: Modal Pattern",
    description: "Master modal dialogs and portals in React.",
    icon: "🪟",
    path: "#",
    concepts: ["Modal", "Portal", "Accessibility"],
  },
];

export default function PatternsShowcase() {
  return (
    <div className="showcase-container">
      {/* Header Section */}
      <div className="showcase-header">
        <h1 className="showcase-header__title">Advanced React Patterns</h1>
        <p className="showcase-header__subtitle">
          Master advanced composition patterns, state management techniques, and
          best practices
        </p>
      </div>

      {/* Cards Grid */}
      <div className="showcase-grid">
        {patterns.map((pattern, index) => (
          <ExerciseCard key={index} {...pattern} />
        ))}
      </div>
    </div>
  );
}
