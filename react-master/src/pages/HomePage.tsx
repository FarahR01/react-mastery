import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const categories = [
    {
      title: "React UI Exercises",
      description: "Master fundamental UI components and layout patterns",
      icon: "🎨",
      path: "/ui-exercises",
      color: "blue",
    },
    {
      title: "Advanced React Patterns",
      description:
        "Learn composition, render props, compound components, and more",
      icon: "⚙️",
      path: "/patterns",
      color: "purple",
    },
    {
      title: "State Management",
      description: "Explore Context API, Redux, and custom hooks",
      icon: "📦",
      path: "/state-management",
      color: "green",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-hero__title">React Mastery 🚀</h1>
        <p className="home-hero__subtitle">
          A comprehensive learning path for mastering React concepts, patterns,
          and best practices
        </p>
      </div>

      <div className="home-categories">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className={`category-card category-card--${category.color}`}
          >
            <div className="category-card__icon">{category.icon}</div>
            <h2 className="category-card__title">{category.title}</h2>
            <p className="category-card__description">{category.description}</p>
            <span className="category-card__cta">Explore →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
