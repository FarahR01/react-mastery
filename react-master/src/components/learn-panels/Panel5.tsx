import React from "react";

interface InsightCard {
  icon: string;
  title: string;
  ar: string;
  description: string;
  level: "best-practice" | "code-smell" | "critical";
}

const Panel5: React.FC = () => {
  const insights: InsightCard[] = [
    {
      icon: "🎛",
      title: "Controlled vs Uncontrolled",
      ar: "مراقب مقابل غير مراقب",
      description:
        "Controlled: React owns value via state. Uncontrolled: DOM owns it via ref. Prefer controlled for validation.",
      level: "best-practice",
    },
    {
      icon: "📍",
      title: "Avoiding Prop Drilling",
      ar: "تجنب تمرير الخصائص",
      description:
        "Passing props 3+ levels deep is a smell. Lift to Context or a Zustand store — don't chain props blindly.",
      level: "code-smell",
    },
    {
      icon: "🔄",
      title: "Preventing Infinite Loops",
      ar: "منع الحلقات اللانهائية",
      description:
        "Always declare [] or [dep]. Never omit deps. setState inside effect re-triggers unless guarded by condition.",
      level: "critical",
    },
    {
      icon: "💾",
      title: "Client State vs Server State",
      ar: "الحالة المحلية مقابل حالة الخادم",
      description:
        "API data is not yours — it is a cache. Use React Query to own fetching, caching, and stale invalidation.",
      level: "best-practice",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "best-practice":
        return "rgba(34, 197, 94, 0.1)";
      case "code-smell":
        return "rgba(245, 158, 11, 0.1)";
      case "critical":
        return "rgba(239, 68, 68, 0.1)";
      default:
        return "rgba(203, 213, 225, 0.1)";
    }
  };

  const getLevelBorderColor = (level: string) => {
    switch (level) {
      case "best-practice":
        return "rgba(34, 197, 94, 0.25)";
      case "code-smell":
        return "rgba(245, 158, 11, 0.25)";
      case "critical":
        return "rgba(239, 68, 68, 0.25)";
      default:
        return "rgba(203, 213, 225, 0.25)";
    }
  };

  return (
    <div className="panel panel-insights">
      <div className="panel-label">📚 Advanced React Mastery</div>
      <h2 className="panel-title">Senior Insight Checklist</h2>
      <p className="panel-sub">
        رؤى المطور المتقدم — Real-world patterns & pitfalls
      </p>
      <div className="divider"></div>

      <div className="insights-grid">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="insight-card"
            style={{
              backgroundColor: getLevelColor(insight.level),
              borderColor: getLevelBorderColor(insight.level),
            }}
          >
            <div className="insight-header">
              <span className="insight-icon">{insight.icon}</span>
              <div className="insight-titles">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-ar">{insight.ar}</p>
              </div>
            </div>
            <p className="insight-description">{insight.description}</p>
            <span
              className={`insight-badge insight-badge-${insight.level}`}
              style={{ borderColor: getLevelBorderColor(insight.level) }}
            >
              {insight.level === "best-practice" && "✓ Best practice"}
              {insight.level === "code-smell" && "⚠ Code smell"}
              {insight.level === "critical" && "🚨 Critical bug risk"}
            </span>
          </div>
        ))}
      </div>

      <div className="insights-legend">
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              borderColor: "rgba(34, 197, 94, 0.4)",
            }}
          ></span>
          <span>Best practice — Proven pattern to follow</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{
              backgroundColor: "rgba(245, 158, 11, 0.2)",
              borderColor: "rgba(245, 158, 11, 0.4)",
            }}
          ></span>
          <span>Code smell — Warning sign, rethink approach</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.2)",
              borderColor: "rgba(239, 68, 68, 0.4)",
            }}
          ></span>
          <span>Critical bug risk — Avoid at all costs</span>
        </div>
      </div>
    </div>
  );
};

export default Panel5;
