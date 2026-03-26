import React from "react";

interface StateOption {
  tool: string;
  ar: string;
  icon: string;
  when: string;
  pros: string[];
  cons: string[];
  color: "local" | "context" | "zustand" | "rq";
}

const DecisionFlow: React.FC = () => (
  <div className="decision-flow">
    <div className="flow-box">
      <strong>1. Does only one component need it?</strong>
      <span className="flow-answer">→ useState</span>
    </div>
    <div className="flow-box">
      <strong>2. Do two siblings need it?</strong>
      <span className="flow-answer">→ Lift to parent</span>
    </div>
    <div className="flow-box">
      <strong>3. Is it global UI (theme, auth)?</strong>
      <span className="flow-answer">→ Context (small) or Zustand (large)</span>
    </div>
    <div className="flow-box">
      <strong>4. Is it complex client state?</strong>
      <span className="flow-answer">→ Zustand or Redux</span>
    </div>
    <div className="flow-box">
      <strong>5. Does it come from an API?</strong>
      <span className="flow-answer">→ React Query</span>
    </div>
  </div>
);

const Panel7: React.FC = () => {
  const stateOptions: StateOption[] = [
    {
      tool: "useState",
      ar: "حالة محلية",
      icon: "🔲",
      when: "Only this component needs it (form inputs, toggles)",
      pros: ["Simple", "No boilerplate", "Built-in", "Fast"],
      cons: ["Can't share easily", "Prop drilling if shared", "Can get messy"],
      color: "local",
    },
    {
      tool: "Lift State Up",
      ar: "رفع الحالة",
      icon: "⬆️",
      when: "Two siblings or a parent + child need same data",
      pros: ["Still simple", "Single source of truth", "Clear ownership"],
      cons: ["Props can chain", "Re-render parents"],
      color: "context",
    },
    {
      tool: "React Context",
      ar: "السياق",
      icon: "📡",
      when: "Global UI state (theme, auth, modals, locale) in small/medium app",
      pros: ["No external deps", "Broadcast to sub-tree", "Built-in"],
      cons: [
        "Causes re-render cascade",
        "Not ideal for high-frequency updates",
      ],
      color: "context",
    },
    {
      tool: "Zustand",
      ar: "متجر موثوق",
      icon: "📦",
      when: "Complex client state, real-time flows, or large app with many global states",
      pros: [
        "Selective subscriptions (no cascade)",
        "Minimal boilerplate",
        "Lightweight",
        "Fast",
      ],
      cons: ["Another dependency", "Slight learning curve"],
      color: "zustand",
    },
    {
      tool: "React Query",
      ar: "ذاكرة الخادم",
      icon: "🌐",
      when: "API/server state (fetching, caching, invalidation)",
      pros: [
        "Auto-caching",
        "Stale detection",
        "Built-in refetch",
        "Reduces bugs",
      ],
      cons: ["Another lib", "Setup required"],
      color: "rq",
    },
  ];

  const getColorClass = (color: "local" | "context" | "zustand" | "rq") => {
    switch (color) {
      case "local":
        return "color-local";
      case "context":
        return "color-context";
      case "zustand":
        return "color-zustand";
      case "rq":
        return "color-rq";
      default:
        return "color-default";
    }
  };

  return (
    <div className="panel panel-state-matrix">
      <div className="panel-label">🎯 Decision Making</div>
      <h2 className="panel-title">State Management Decision Matrix</h2>
      <p className="panel-sub">متى تستخدم أي أداة — Choose the right tool</p>
      <div className="divider"></div>

      <DecisionFlow />

      <h3 className="section-title matrix-section-title">Tools at a Glance</h3>
      <div className="state-options-grid">
        {stateOptions.map((option, idx) => (
          <div
            key={idx}
            className={`state-option-card ${getColorClass(option.color)}`}
          >
            <div className="soc-header">
              <span className="soc-icon">{option.icon}</span>
              <div className="soc-titles">
                <h4 className="soc-tool">{option.tool}</h4>
                <p className="soc-ar">{option.ar}</p>
              </div>
            </div>

            <p className="soc-when">
              <strong>When:</strong> {option.when}
            </p>

            <div className="soc-list">
              <div className="soc-pros">
                <strong>✓ Pros</strong>
                <ul>
                  {option.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="soc-cons">
                <strong>✗ Cons</strong>
                <ul>
                  {option.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="anti-patterns">
        <h4 className="anti-title">⚠️ Anti-Patterns to Avoid</h4>
        <div className="anti-grid">
          <div className="anti-item anti-bad">
            <strong>❌ Prop Drilling 3+ Levels</strong>
            <p>
              Passing props through intermediary components just to reach a
              target component is hard to maintain.
            </p>
            <small>Solution: Use Context or Zustand</small>
          </div>
          <div className="anti-item anti-bad">
            <strong>❌ Storing API Data in useState</strong>
            <p>
              Managing fetch, cache invalidation, and stale data yourself is
              error-prone.
            </p>
            <small>Solution: Use React Query</small>
          </div>
          <div className="anti-item anti-bad">
            <strong>❌ Context for High-Frequency Updates</strong>
            <p>
              Context triggers re-renders of entire component sub-tree. Not
              suited for frequent state changes (e.g., animations, live trades).
            </p>
            <small>Solution: Use Zustand or local state</small>
          </div>
          <div className="anti-item anti-good">
            <strong>✅ Single Responsibility Principle</strong>
            <p>
              Each tool has a job. useState for local, Context for global UI,
              React Query for server data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel7;
