import React from "react";

const KeyConcept: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="key-concept">
    <h4 className="concept-title">{title}</h4>
    <ul className="concept-list">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const Panel6: React.FC = () => {
  return (
    <div className="panel panel-architecture">
      <div className="panel-label">🏗 Systems & Patterns</div>
      <h2 className="panel-title">Architectural Communication Flow</h2>
      <p className="panel-sub">
        تدفق البيانات — How data travels through React
      </p>
      <div className="divider"></div>

      <div className="architecture-section">
        <h3 className="section-title">Component Tree & Data Flow</h3>
        <div className="component-tree">
          <div className="tree-node tree-root">
            <span className="node-icon">📦</span>
            <span className="node-text">Component A — parent station</span>
            <small>Owns state, passes props down</small>
          </div>

          <div className="tree-children">
            <div className="tree-connector"></div>

            <div className="tree-node">
              <span className="node-icon">🎬</span>
              <span className="node-text">Component B — child</span>
              <small>Receives props</small>
            </div>

            <div className="tree-node">
              <span className="node-icon">🎬</span>
              <span className="node-text">Component C — child</span>
              <small>Sends callbacks up</small>
            </div>
          </div>

          <div className="flow-labels">
            <div className="flow-down">props ⬇️</div>
            <div className="flow-up">callbacks ⬆️</div>
          </div>
        </div>
      </div>

      <div className="architecture-grid">
        <div className="arch-box arch-hook">
          <div className="arch-header">🪝 Hook — useUsers()</div>
          <p className="arch-description">Calls service, manages local state</p>
          <code className="arch-code">
            const &#123;users, loading&#125; = useUsers()
          </code>
        </div>

        <div className="arch-box arch-service">
          <div className="arch-header">⚙️ Service — userService.ts</div>
          <p className="arch-description">Raw API call / Axios / Firebase</p>
          <code className="arch-code">export async fn getUsers()</code>
        </div>
      </div>

      <div className="architecture-patterns">
        <KeyConcept
          title="🔗 Unidirectional Flow"
          items={[
            "Data flows DOWN via props (Parent → Child)",
            "Events flow UP via callbacks (Child → Parent)",
            "Never mutate props directly — data is immutable",
            "Siblings communicate through parent state",
          ]}
        />

        <KeyConcept
          title="🪝 Hook Responsibilities"
          items={[
            "useState — track component data (form, toggles)",
            "useEffect — side effects (API, subscriptions)",
            "useContext — broadcast to sub-tree",
            "Custom hooks — delegate to services, package logic",
          ]}
        />

        <KeyConcept
          title="📡 Service Responsibilities"
          items={[
            "ONLY fetch/API calls — no React imports",
            "Transform raw data into usable format",
            "Handle errors, retries, timeouts",
            "Cache strategies, if applicable",
          ]}
        />
      </div>

      <div className="re-render-cycle">
        <h4 className="cycle-title">Re-render Cycle</h4>
        <div className="cycle-steps">
          <div className="cycle-step">
            <span className="step-num">1</span>
            <span className="step-text">State/props change</span>
          </div>
          <span className="cycle-arrow">→</span>
          <div className="cycle-step">
            <span className="step-num">2</span>
            <span className="step-text">Component re-renders</span>
          </div>
          <span className="cycle-arrow">→</span>
          <div className="cycle-step">
            <span className="step-num">3</span>
            <span className="step-text">Children re-render (if affected)</span>
          </div>
          <span className="cycle-arrow">→</span>
          <div className="cycle-step">
            <span className="step-num">4</span>
            <span className="step-text">useEffect cleanup/run</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel6;
