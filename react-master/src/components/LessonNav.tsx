import React, { useState, useMemo } from "react";
import "./LessonNav.css";
import { lessonsMetadata } from "../data/lessonsMetadata";

interface LessonNavProps {
  currentLesson: number;
  onLessonChange: (id: number) => void;
  completedLessons: number[];
}

const LessonNav: React.FC<LessonNavProps> = ({
  currentLesson,
  onLessonChange,
  completedLessons,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "fundamentals" | "patterns" | "state" | "advanced"
  >("all");

  const categories = [
    { id: "all", label: "All Lessons", icon: "📖" },
    { id: "fundamentals", label: "Fundamentals", icon: "🏗️" },
    { id: "patterns", label: "Patterns", icon: "🎭" },
    { id: "state", label: "State", icon: "🎛️" },
    { id: "advanced", label: "Advanced", icon: "🚀" },
  ];

  const filteredLessons = useMemo(() => {
    if (activeCategory === "all") return lessonsMetadata;
    return lessonsMetadata.filter((l) => l.category === activeCategory);
  }, [activeCategory]);

  const progressPercentage = Math.round(
    (completedLessons.length / lessonsMetadata.length) * 100,
  );

  return (
    <nav className="lesson-nav-container">
      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-header">
          <div>
            <h3 className="progress-title">Learning Progress</h3>
            <p className="progress-subtitle">
              {completedLessons.length} of {lessonsMetadata.length} lessons
              completed
            </p>
          </div>
          <div className="progress-percentage">{progressPercentage}%</div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="filter-label">Filter by Category</div>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() =>
                setActiveCategory(
                  cat.id as
                    | "all"
                    | "fundamentals"
                    | "patterns"
                    | "state"
                    | "advanced",
                )
              }
              title={cat.label}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-text">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Cards */}
      <div className="lessons-grid">
        {filteredLessons.map((lesson: (typeof lessonsMetadata)[0]) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isCurrent = lesson.id === currentLesson;

          return (
            <button
              key={lesson.id}
              className={`lesson-card ${isCurrent ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
              onClick={() => onLessonChange(lesson.id)}
              style={{
                borderColor: isCurrent
                  ? lesson.color
                  : isCompleted
                    ? `${lesson.color}40`
                    : "transparent",
              }}
            >
              <div className="lesson-card-inner">
                <div
                  className="lesson-number"
                  style={{
                    backgroundColor: `${lesson.color}15`,
                    color: lesson.color,
                  }}
                >
                  {String(lesson.id).padStart(2, "0")}
                </div>
                <div className="lesson-icon">{lesson.icon}</div>
                {isCompleted && <div className="completed-badge">✓</div>}
                <div className="lesson-info">
                  <h4 className="lesson-title">{lesson.title}</h4>
                  <p className="lesson-description">{lesson.description}</p>
                </div>
                <div
                  className="lesson-color-bar"
                  style={{ backgroundColor: lesson.color }}
                ></div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default LessonNav;
