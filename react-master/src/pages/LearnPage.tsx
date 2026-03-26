import { useState, useEffect } from "react";
import "./LearnPage.css";
import LessonNav from "../components/LessonNav";
import Panel1 from "../components/learn-panels/Panel1";
import Panel2 from "../components/learn-panels/Panel2";
import Panel3 from "../components/learn-panels/Panel3";
import Panel4 from "../components/learn-panels/Panel4";
import Panel5 from "../components/learn-panels/Panel5";
import Panel6 from "../components/learn-panels/Panel6";
import Panel7 from "../components/learn-panels/Panel7";
import Panel8 from "../components/learn-panels/Panel8";
import Panel9 from "../components/learn-panels/Panel9";
import Panel10 from "../components/learn-panels/Panel10";
import Panel11 from "../components/learn-panels/Panel11";
import Panel12 from "../components/learn-panels/Panel12";
import Panel13 from "../components/learn-panels/Panel13";
import Panel14 from "../components/learn-panels/Panel14";

const panels = [
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  Panel5,
  Panel6,
  Panel7,
  Panel8,
  Panel9,
  Panel10,
  Panel11,
  Panel12,
  Panel13,
  Panel14,
];

export default function LearnPage() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("reactLearningProgress");
    if (saved) {
      const { current, completed } = JSON.parse(saved);
      setCurrentLesson(current);
      setCompletedLessons(completed);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "reactLearningProgress",
      JSON.stringify({ current: currentLesson, completed: completedLessons }),
    );
  }, [currentLesson, completedLessons]);

  const handleLessonChange = (id: number) => {
    setCurrentLesson(id);
    // Mark as completed when visiting
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
    // Scroll to panel
    setTimeout(() => {
      const panel = document.querySelector(
        `[data-lesson="${id}"]`,
      ) as HTMLElement;
      if (panel) {
        panel.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const CurrentPanel = panels[currentLesson - 1];

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h1 className="learn-page-title">React Mastery Learning Path</h1>
        <p className="learn-page-subtitle">
          Follow this interactive journey to master React concepts
        </p>
      </div>

      <LessonNav
        currentLesson={currentLesson}
        onLessonChange={handleLessonChange}
        completedLessons={completedLessons}
      />

      <div className="learn-content-wrapper">
        <div className="lesson-panel-container" data-lesson={currentLesson}>
          <div className="lesson-hero">
            <div className="lesson-counter">Lesson {currentLesson} of 13</div>
            <div className="lesson-progress-mini">
              {currentLesson > 1 && (
                <button
                  onClick={() => handleLessonChange(currentLesson - 1)}
                  className="nav-button prev"
                  title="Previous lesson"
                >
                  ← Previous
                </button>
              )}
              <span className="lesson-nav-counter">{currentLesson} / 13</span>
              {currentLesson < 13 && (
                <button
                  onClick={() => handleLessonChange(currentLesson + 1)}
                  className="nav-button next"
                  title="Next lesson"
                >
                  Next →
                </button>
              )}
            </div>
          </div>

          <CurrentPanel />

          <div className="lesson-footer">
            <div className="lesson-completion-indicator">
              {completedLessons.includes(currentLesson) && (
                <div className="completion-message">
                  ✓ Lesson completed! Well done!
                </div>
              )}
            </div>
            <div className="lesson-nav-buttons">
              {currentLesson > 1 && (
                <button
                  onClick={() => handleLessonChange(currentLesson - 1)}
                  className="lesson-nav-btn prev"
                >
                  ← Previous Lesson
                </button>
              )}
              {currentLesson < 13 && (
                <button
                  onClick={() => handleLessonChange(currentLesson + 1)}
                  className="lesson-nav-btn next"
                >
                  Next Lesson →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
