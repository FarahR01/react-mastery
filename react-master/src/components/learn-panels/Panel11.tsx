import React from "react";

interface StateComparison {
  aspect: string;
  client: string;
  server: string;
}

const StateComparisonRow: React.FC<{ item: StateComparison }> = ({ item }) => (
  <div className="comparison-row">
    <div className="comparison-aspect">{item.aspect}</div>
    <div className="comparison-client">
      <div className="comparison-label">Client State</div>
      {item.client}
    </div>
    <div className="comparison-server">
      <div className="comparison-label">Server State</div>
      {item.server}
    </div>
  </div>
);

const Panel11: React.FC = () => {
  const comparisons: StateComparison[] = [
    {
      aspect: "Location",
      client: "Browser memory only",
      server: "Remote database — you hold a cache",
    },
    {
      aspect: "Ownership",
      client: "You own it entirely",
      server: "Shared by all users & devices",
    },
    {
      aspect: "Synchronicity",
      client: "Synchronous, instant",
      server: "Async, may be stale",
    },
    {
      aspect: "Lifecycle",
      client: "Component lifetime",
      server: "Persists across sessions",
    },
    {
      aspect: "Mutation",
      client: "setState / Zustand dispatch",
      server: "API call → invalidation",
    },
    {
      aspect: "Examples",
      client:
        "Modal open/close, selected tab, form input, theme toggle, UI visibility",
      server:
        "users, products, orders, notifications, analytics, database records",
    },
  ];

  return (
    <div className="panel panel-state-types">
      <div className="panel-label">
        🔀 Two Fundamentally Different State Types
      </div>
      <p className="panel-intro">
        Most React bugs come from mixing these two. Understanding the difference
        unlocks clean, scalable architecture.
      </p>

      <div className="state-comparison-table">
        <div className="comparison-header">
          <div className="comparison-aspect"></div>
          <div className="comparison-client">
            <strong>Client State</strong>
          </div>
          <div className="comparison-server">
            <strong>Server State</strong>
          </div>
        </div>
        {comparisons.map((item, idx) => (
          <StateComparisonRow key={idx} item={item} />
        ))}
      </div>

      <div className="state-cards-section">
        <h3>🛠️ The Right Tool for Each Job</h3>

        <div className="state-tool-cards">
          <div className="state-tool-card client-state-card">
            <div className="tool-icon">🎨</div>
            <h4>Client State</h4>
            <div className="tool-description">
              <p>
                <strong>When:</strong> UI chrome, form inputs, temporary data
              </p>
              <p>
                <strong>Tool:</strong> <code>useState</code> / Zustand
              </p>
              <p>
                <strong>Characteristic:</strong> Synchronous. You control the
                entire lifecycle.
              </p>
              <ul className="example-list">
                <li>Modal open/close state</li>
                <li>Selected sidebar tab</li>
                <li>Form draft before submission</li>
                <li>Theme preference (light/dark)</li>
                <li>Sidebar visibility toggle</li>
              </ul>
            </div>
          </div>

          <div className="state-tool-card server-state-card">
            <div className="tool-icon">🔗</div>
            <h4>Server State</h4>
            <div className="tool-description">
              <p>
                <strong>When:</strong> Database records, API data, shared facts
              </p>
              <p>
                <strong>Tool:</strong> React Query (TanStack Query)
              </p>
              <p>
                <strong>Characteristic:</strong> Async, distributed, potentially
                stale. Needs orchestration.
              </p>
              <ul className="example-list">
                <li>User list from API</li>
                <li>Product catalog</li>
                <li>Recent orders</li>
                <li>Real-time notifications</li>
                <li>Analytics dashboard data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="architecture-principle-box">
        <h3>✨ Architectural Principle</h3>
        <p>
          <strong>Client state handles UI orchestration.</strong> Server state
          handles data freshness. When you mix them, you build Redux and manual
          caching. When you separate them, you get clean, maintainable code.
        </p>
        <p className="principle-example">
          <em>Right way:</em> useState for "isModalOpen", useQuery for "users"
          data
        </p>
        <p className="principle-example">
          <em>Wrong way:</em> useState for everything, fetching in useEffect,
          manual cache invalidation
        </p>
      </div>
    </div>
  );
};

export default Panel11;
