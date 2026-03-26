import React from "react";

interface OrchestrationFeature {
  name: string;
  description: string;
  benefit: string;
  icon: string;
  color: "cache" | "dedup" | "lifecycle" | "retry" | "loading" | "optimistic";
}

const FeatureCard: React.FC<{ feature: OrchestrationFeature }> = ({
  feature,
}) => (
  <div className={`orchestration-card orchestration-${feature.color}`}>
    <div className="feature-icon">{feature.icon}</div>
    <h4>{feature.name}</h4>
    <p className="feature-description">{feature.description}</p>
    <p className="feature-benefit">
      <strong>Result:</strong> {feature.benefit}
    </p>
  </div>
);

const Panel10: React.FC = () => {
  const features: OrchestrationFeature[] = [
    {
      name: "Cache",
      icon: "💾",
      description: "Reuse data across components without duplication",
      benefit: "Multiple components reading the same query key share one cache",
      color: "cache",
    },
    {
      name: "Deduplication",
      icon: "🎯",
      description:
        "One request for N consumers calling useQuery simultaneously",
      benefit: "Network efficiency: 10 components = 1 network request",
      color: "dedup",
    },
    {
      name: "Stale/Fresh Lifecycle",
      icon: "🔄",
      description: "staleTime controls when data is considered fresh",
      benefit: "Instant responses for fresh data; automatic refetch when stale",
      color: "lifecycle",
    },
    {
      name: "Background Refetch",
      icon: "↻",
      description: "Automatic refetch on mount, focus, tab reconnect",
      benefit: "Users always see recent data without explicit refresh buttons",
      color: "retry",
    },
    {
      name: "Retry Logic",
      icon: "🔁",
      description: "Automatic, configurable retry on network failures",
      benefit: "Resilience without boilerplate; exponential backoff built-in",
      color: "loading",
    },
    {
      name: "Invalidation",
      icon: "⚡",
      description: "Mark cache as stale after mutation success",
      benefit: "Seamless sync between mutations and queries",
      color: "optimistic",
    },
    {
      name: "Loading States",
      icon: "⏳",
      description:
        "isPending vs isFetching distinguish initial load from refetch",
      benefit:
        "Show skeleton on first load, subtle indicator on background fetch",
      color: "lifecycle",
    },
    {
      name: "Optimistic UI",
      icon: "✨",
      description: "Update UI instantly before mutation completes",
      benefit: "No loading spinner for user actions; rollback on error",
      color: "optimistic",
    },
  ];

  return (
    <div className="panel panel-rq-orchestration">
      <div className="panel-label">🎼 React Query: Orchestration Layer</div>
      <p className="panel-intro">
        React Query sits between your component and the server, automatically
        orchestrating:
      </p>

      <div className="orchestration-grid">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature} />
        ))}
      </div>

      <div className="orchestration-flow-diagram">
        <h3>🏗️ The Architecture</h3>
        <div className="flow-layers">
          <div className="flow-layer">
            <span className="layer-label">Your Component</span>
            <code>const &#123; data, isPending &#125; = useQuery(...)</code>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-layer orchestration-box-large">
            <span className="layer-label">React Query Orchestration</span>
            <div className="orchestration-internals">
              <div className="internal-box">Cache (reuse)</div>
              <div className="internal-box">Dedup (one request)</div>
              <div className="internal-box">Fresh/Stale tracking</div>
              <div className="internal-box">Background refetch</div>
              <div className="internal-box">Retry + error handling</div>
            </div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-layer">
            <span className="layer-label">API / Server</span>
            <code>Your clean, reusable queryFn</code>
          </div>
        </div>
      </div>

      <div className="key-insight-rq">
        <strong>💡 The Magic:</strong> React Query handles all the async
        plumbing — you just declare useQuery and focus on UI. No Redux
        boilerplate, no manual cache invalidation, no loading state management.
      </div>
    </div>
  );
};

export default Panel10;
