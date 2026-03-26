import React from "react";

interface Primitive {
  name: string;
  ar: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  metaphor: string;
  definition: string;
  responsibilities: string[];
  examples: string[];
  knows: string[];
  ignores: string[];
}

const Panel8: React.FC = () => {
  const primitives: Primitive[] = [
    {
      name: "Component",
      ar: "المكون",
      icon: "📦",
      color: "#1e40af",
      borderColor: "#a5b4fc",
      bgColor: "#eff6ff",
      metaphor: "A cooking station that renders UI",
      definition: "UI = f(state, props) — Pure function that returns JSX",
      responsibilities: [
        "Render HTML/JSX",
        "Manage local state (useState)",
        "Respond to user interactions",
        "Orchestrate child components",
      ],
      examples: ["LoginForm", "ProductCard", "Header", "Button"],
      knows: ["Its own props, its own state, its children"],
      ignores: [
        "The broader app, global data, implementation details of services",
      ],
    },
    {
      name: "Hook",
      ar: "الخطاف",
      icon: "🪝",
      color: "#065f46",
      borderColor: "#6ee7b7",
      bgColor: "#f0fdf4",
      metaphor: "A standardised tool/utensil that plugins into any component",
      definition:
        "Reusable logic to manage state, side effects, or external data",
      responsibilities: [
        "useState — track local data",
        "useEffect — connect to API or side effects",
        "useContext — tap into global state",
        "Custom hooks — bundle logic for reuse",
      ],
      examples: ["useUsers()", "useTheme()", "useFetch()", "useLocalStorage()"],
      knows: [
        "How to fetch data, how to transform it, what component called it",
      ],
      ignores: ["DOM details, routing, database"],
    },
    {
      name: "Context",
      ar: "السياق",
      icon: "📡",
      color: "#5b21b6",
      borderColor: "#d8b4fe",
      bgColor: "#faf5ff",
      metaphor: "A kitchen PA system that broadcasts to everyone listening",
      definition: "Wraps a sub-tree of components and broadcasts global data",
      responsibilities: [
        "Provide global UI state",
        "Avoid prop drilling",
        "Theme switching, auth, locale",
        "Modal/notification visibility",
      ],
      examples: [
        "ThemeContext (light/dark)",
        "AuthContext (user, token)",
        "LocaleContext (i18n)",
      ],
      knows: ["All components in its sub-tree", "When to broadcast"],
      ignores: ["Component internals, API calls, business logic"],
    },
    {
      name: "Service",
      ar: "الخدمة",
      icon: "⚙️",
      color: "#92400e",
      borderColor: "#fbbf24",
      bgColor: "#fffbeb",
      metaphor: "An external supplier or vendor outside the kitchen",
      definition: "Plain JavaScript (no React) that handles external logic",
      responsibilities: [
        "API/fetch calls",
        "Firebase, Supabase, etc.",
        "External library wrappers",
        "Data transformation / formatting",
      ],
      examples: ["userService.ts", "api.ts", "logger.ts", "firebase.ts"],
      knows: ["How to call APIs, how to handle errors, third-party libs"],
      ignores: ["React, components, state, UI details"],
    },
  ];

  return (
    <div className="panel panel-primitives">
      <div className="panel-label">🧱 Core Architecture</div>
      <h2 className="panel-title">The Four Primitives</h2>
      <p className="panel-sub">
        بنية React الأساسية — Building blocks of React apps
      </p>
      <div className="divider"></div>

      <div className="primitives-grid">
        {primitives.map((prim, idx) => (
          <div
            key={idx}
            className="primitive-card"
            style={{
              backgroundColor: prim.bgColor,
              borderColor: prim.borderColor,
            }}
          >
            <div className="primitive-header">
              <span className="primitive-icon">{prim.icon}</span>
              <div className="primitive-titles">
                <h3 className="primitive-name">{prim.name}</h3>
                <p className="primitive-ar">{prim.ar}</p>
              </div>
            </div>

            <p className="primitive-metaphor">
              <em>"{prim.metaphor}"</em>
            </p>

            <p className="primitive-definition">{prim.definition}</p>

            <div className="primitive-section">
              <strong className="section-label">Responsibilities</strong>
              <ul className="primitive-list">
                {prim.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="primitive-section">
              <strong className="section-label">Examples</strong>
              <ul className="primitive-list compact">
                {prim.examples.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="primitive-awareness">
              <div className="knows">
                <strong>✓ Knows about</strong>
                <ul>
                  {prim.knows.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="ignores">
                <strong>✗ Ignores</strong>
                <ul>
                  {prim.ignores.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="primitives-interaction">
        <h4 className="interaction-title">🔄 How They Work Together</h4>
        <div className="interaction-flow">
          <div className="flow-stage">
            <span className="flow-icon">📦</span>
            <span className="flow-label">Component</span>
            <p>Renders UI, handles clicks</p>
          </div>

          <span className="flow-connector">↓</span>

          <div className="flow-stage">
            <span className="flow-icon">🪝</span>
            <span className="flow-label">Hook (useUsers)</span>
            <p>Manages state, calls service</p>
          </div>

          <span className="flow-connector">↓</span>

          <div className="flow-stage">
            <span className="flow-icon">⚙️</span>
            <span className="flow-label">Service</span>
            <p>Fetches data from API</p>
          </div>

          <span className="flow-connector flow-feedback">
            ↑ (data flows back)
          </span>
        </div>
      </div>

      <div className="design-principles">
        <h4 className="principles-title">💡 Design Principles</h4>
        <div className="principles-grid">
          <div className="principle">
            <span className="principle-icon">🎯</span>
            <strong>Single Responsibility</strong>
            <p>
              Each primitive has one job. Component renders, Service fetches,
              etc.
            </p>
          </div>
          <div className="principle">
            <span className="principle-icon">🔀</span>
            <strong>Composition</strong>
            <p>
              Build complex features by combining simple, focused primitives.
            </p>
          </div>
          <div className="principle">
            <span className="principle-icon">🌊</span>
            <strong>Unidirectional Flow</strong>
            <p>
              Data flows down (props), events flow up (callbacks). No crossing
              streams.
            </p>
          </div>
          <div className="principle">
            <span className="principle-icon">🔒</span>
            <strong>Encapsulation</strong>
            <p>
              Each primitive only knows what it needs. Hide implementation
              details.
            </p>
          </div>
        </div>
      </div>

      <div className="anti-patterns-primitives">
        <h5 className="anti-title">❌ Common Anti-Patterns</h5>
        <ul className="anti-list">
          <li>
            <strong>Mixing concerns:</strong> Putting API calls directly in
            React components instead of services.
          </li>
          <li>
            <strong>Bloated components:</strong> One component doing state
            management + rendering + API calls.
          </li>
          <li>
            <strong>Service importing React:</strong> Services should be
            framework-agnostic.
          </li>
          <li>
            <strong>Prop drilling:</strong> Passing data through many levels
            instead of using Context or Zustand.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panel8;
