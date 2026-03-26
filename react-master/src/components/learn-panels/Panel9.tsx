import React from "react";

interface CacheState {
  state: string;
  status: "empty" | "fetching" | "fresh" | "stale";
  icon: string;
  ui: string;
  behavior: string;
}

const CacheStateCard: React.FC<{ item: CacheState }> = ({ item }) => {
  const statusClass = {
    empty: "state-empty",
    fetching: "state-fetching",
    fresh: "state-fresh",
    stale: "state-stale",
  }[item.status];

  return (
    <div className={`cache-state-card ${statusClass}`}>
      <div className="state-header">
        <span className="state-icon">{item.icon}</span>
        <h4>{item.state}</h4>
      </div>
      <div className="state-details">
        <div className="detail-row">
          <strong>Status:</strong>
          <span className="status-badge">{item.status}</span>
        </div>
        <div className="detail-row">
          <strong>UI:</strong> {item.ui}
        </div>
        <div className="detail-row">
          <strong>Behavior:</strong> {item.behavior}
        </div>
      </div>
    </div>
  );
};

const Panel9: React.FC = () => {
  const cacheStates: CacheState[] = [
    {
      state: "No Cache",
      status: "empty",
      icon: "📭",
      ui: "No data shown",
      behavior:
        "Component mounts → React Query triggers fetch (isPending = true)",
    },
    {
      state: "Fetching",
      status: "fetching",
      icon: "⏳",
      ui: "Spinner / skeleton",
      behavior:
        "Network request in progress → Once completed, cache is populated",
    },
    {
      state: "Fresh",
      status: "fresh",
      icon: "✅",
      ui: "Data shown, no refetch",
      behavior:
        "Within staleTime → immediate response from cache, no server roundtrip",
    },
    {
      state: "Stale",
      status: "stale",
      icon: "⚠️",
      ui: "May refetch on triggers",
      behavior:
        "staleTime elapsed → data shown but marked for background refetch on mount/focus/reconnect",
    },
  ];

  return (
    <div className="panel panel-rq-cache">
      <div className="panel-label">⚡ React Query: Cache Lifecycle</div>
      <p className="panel-intro">
        Every query in React Query flows through distinct lifecycle states: from
        empty cache through fetching, fresh data, and eventual staleness.
      </p>

      <div className="cache-states-grid">
        {cacheStates.map((item, idx) => (
          <CacheStateCard key={idx} item={item} />
        ))}
      </div>

      <div className="lifecycle-flow-section">
        <h3>🔄 The Invalidation Path (Mutation Success)</h3>
        <div className="invalidation-box">
          <ul className="invalidation-steps">
            <li>
              <span className="step-number">1</span>
              <span className="step-text">
                Mutation succeeds
                <code>
                  queryClient.invalidateQueries(&#123; queryKey: ["users"]
                  &#125;)
                </code>
              </span>
            </li>
            <li>
              <span className="step-number">2</span>
              <span className="step-text">
                Cache entry is marked stale (instantly)
              </span>
            </li>
            <li>
              <span className="step-number">3</span>
              <span className="step-text">
                React Query refetches if component is mounted (automatic)
              </span>
            </li>
            <li>
              <span className="step-number">4</span>
              <span className="step-text">
                Component shows fresh data without full page reload ✨
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="key-insight-rq">
        <strong>💡 Key Insight:</strong> React Query manages the journey from
        "no data" through "loading" to "fresh" to "stale". You control when data
        should be refetched via staleTime and invalidation strategies.
      </div>
    </div>
  );
};

export default Panel9;
