import ExerciseCard from "../components/ExerciseCard";
import "./ExercisesShowcase.css";

const exercises = [
  {
    title: "Dashboard Layout",
    description:
      "Learn layout patterns with sidebar, header, and content areas. Build responsive admin dashboards.",
    icon: "📊",
    path: "/dashboard",
    concepts: [
      "Layout",
      "Grid System",
      "Component Composition",
      "Sidebar",
      "Header",
    ],
  },
  {
    title: "User Profile Card",
    description:
      "Master breaking down a profile UI into reusable components. Avatar, user info, and action buttons.",
    icon: "👤",
    path: "/profile",
    concepts: [
      "Component Reusability",
      "Props",
      "Styling",
      "Avatar",
      "Card Pattern",
    ],
  },
  {
    title: "Navigation Bar",
    description:
      "Build responsive navigation with menu items and user dropdowns. Essential for any web app.",
    icon: "🧭",
    path: "/navbar",
    concepts: [
      "Navigation",
      "Menu Systems",
      "Responsive Design",
      "Dropdowns",
      "UX Patterns",
    ],
  },
  {
    title: "Todo Application",
    description:
      "Create a complete todo app with add, list, and delete functionality. Practice state management.",
    icon: "✓",
    path: "/todo",
    concepts: [
      "State Management",
      "List Rendering",
      "Event Handling",
      "Forms",
      "CRUD Operations",
    ],
  },
  {
    title: "Product Page",
    description:
      "Build a detailed product page with images, details, and add-to-cart functionality.",
    icon: "🛍️",
    path: "/product",
    concepts: [
      "Product Display",
      "Image Handling",
      "Details Layout",
      "Buttons",
      "E-commerce UI",
    ],
  },
  {
    title: "Form Validation",
    description:
      "Master form design with input fields, error handling, and validation. User-friendly forms matter!",
    icon: "📝",
    path: "/form",
    concepts: [
      "Form Handling",
      "Input Fields",
      "Validation",
      "Error Messages",
      "User Feedback",
    ],
  },
];

export default function ExercisesShowcase() {
  return (
    <div className="showcase-container">
      {/* Header Section */}
      <div className="showcase-header">
        <h1 className="showcase-header__title">UI Component Mastery</h1>
        <p className="showcase-header__subtitle">
          A collection of React UI exercises showcasing component design,
          composition, and best practices
        </p>
        <div className="showcase-header__stats">
          <div className="stat">
            <span className="stat__number">{exercises.length}</span>
            <span className="stat__label">Exercises</span>
          </div>
          <div className="stat">
            <span className="stat__number">30+</span>
            <span className="stat__label">Components</span>
          </div>
          <div className="stat">
            <span className="stat__number">∞</span>
            <span className="stat__label">Learning Potential</span>
          </div>
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="exercises-grid">
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} {...exercise} />
        ))}
      </div>

      {/* Footer Section */}
      <div className="showcase-footer">
        <h2>What You've Learned</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-icon">🎨</span>
            <span className="skill-title">Component Design</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🔧</span>
            <span className="skill-title">Props & State</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">📐</span>
            <span className="skill-title">Layout Patterns</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">⚡</span>
            <span className="skill-title">Event Handling</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🎯</span>
            <span className="skill-title">Reusability</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🌈</span>
            <span className="skill-title">Styling & CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
