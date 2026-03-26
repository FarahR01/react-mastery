import { useState } from "react";
import "./PatternLayout.css";

interface PatternLayoutProps {
  title: string;
  description: string;
  docLink: string;
  demoContent: React.ReactNode;
  guideContent: React.ReactNode;
}

export function PatternLayout({
  title,
  description,
  docLink,
  demoContent,
  guideContent,
}: PatternLayoutProps) {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="pattern-layout">
      {/* Left Sidebar */}
      <aside className="pattern-sidebar">
        <div className="sidebar-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-button ${!showGuide ? "active" : ""}`}
            onClick={() => setShowGuide(false)}
          >
            <span className="icon">🎮</span>
            <span className="text">Exercise</span>
          </button>
          <button
            className={`nav-button ${showGuide ? "active" : ""}`}
            onClick={() => setShowGuide(true)}
          >
            <span className="icon">📖</span>
            <span className="text">Guide</span>
          </button>
        </nav>

        <a
          href={docLink}
          target="_blank"
          rel="noopener noreferrer"
          className="doc-link"
        >
          <span>📚</span> Official Docs
        </a>
      </aside>

      {/* Main Content */}
      <main className="pattern-content">
        {showGuide ? (
          <div className="guide-content">{guideContent}</div>
        ) : (
          <div className="demo-content">{demoContent}</div>
        )}
      </main>
    </div>
  );
}
