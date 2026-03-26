import React from "react";
import PDFViewer from "../PDFViewer";

interface TanStackFeature {
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface UseCase {
  scenario: string;
  tool: string;
  reason: string;
}

const Panel14: React.FC = () => {
  const features: TanStackFeature[] = [
    {
      name: "Automatic Request Deduplication",
      description:
        "Multiple requests to the same endpoint in parallel are automatically merged into one",
      icon: "🔗",
      color: "bg-blue-100",
    },
    {
      name: "Stale-While-Revalidate Caching",
      description:
        "Show cached data immediately while fetching fresh data in the background",
      icon: "⏱️",
      color: "bg-purple-100",
    },
    {
      name: "Background Refetching",
      description:
        "Automatically refetch data when conditions change (window focus, reconnect, etc.)",
      icon: "🔄",
      color: "bg-green-100",
    },
    {
      name: "Optimistic Updates",
      description:
        "Update UI immediately before server confirms the change, rollback on error",
      icon: "⚡",
      color: "bg-amber-100",
    },
    {
      name: "Pagination & Infinite Scrolling",
      description: "Built-in support for paginated and infinite scroll queries",
      icon: "📜",
      color: "bg-cyan-100",
    },
    {
      name: "DevTools Integration",
      description:
        "Chrome DevTools extension for inspecting and debugging queries",
      icon: "🔧",
      color: "bg-pink-100",
    },
  ];

  const useCases: UseCase[] = [
    {
      scenario: "Fetching user data once on mount",
      tool: "useState + useEffect",
      reason: "Simple, one-time request; no cache invalidation needed",
    },
    {
      scenario: "Complex multi-source API calls with cache",
      tool: "React Query",
      reason: "Handles caching, synchronization, deduplication automatically",
    },
    {
      scenario: "Real-time data that changes frequently",
      tool: "React Query + WebSockets",
      reason: "React Query manages the cache, WebSocket updates it",
    },
    {
      scenario: "Form state (user input before submission)",
      tool: "useState",
      reason: "Not server state; local form data doesn't need cache",
    },
    {
      scenario: "Paginated or infinite scrolling API",
      tool: "React Query",
      reason: "Built-in pagination tracking and caching",
    },
    {
      scenario: "Global notifications or theme",
      tool: "Context API",
      reason: "UI state, not server state; doesn't need query features",
    },
  ];

  return (
    <div className="panel panel-tq">
      <div className="panel-label">🎼 Server State Management</div>
      <h2 className="panel-title">React Query (TanStack Query)</h2>
      <p className="panel-sub">
        Modern tool for fetching, caching, and synchronizing server state in
        React applications
      </p>
      <div className="divider"></div>

      <div className="tq-intro-box">
        <h3>What is React Query?</h3>
        <p>
          React Query (now called <strong>TanStack Query</strong>) is a{" "}
          <strong>server state management library</strong>. It removes the
          boilerplate from fetching data and handles:
        </p>
        <ul>
          <li>Caching fetched data</li>
          <li>Automatic request deduplication</li>
          <li>Background refetching</li>
          <li>Optimistic updates</li>
          <li>Pagination and infinite scrolling</li>
          <li>Complex synchronization logic</li>
        </ul>
        <p className="highlight">
          <strong>Core Idea:</strong> Your component doesn't manage loading,
          error, or data states manually—React Query does it for you.
        </p>
      </div>

      <div className="comparison-box">
        <h3>useState + useEffect vs React Query</h3>
        <div className="comparison-grid">
          <div className="comparison-item manual">
            <h4>Manual with useState + useEffect</h4>
            <code className="code-block">
              const [data, setData] = useState(null); <br />
              const [loading, setLoading] = useState(false); <br />
              const [error, setError] = useState(null);
              <br />
              <br />
              useEffect(() =&gt; &#123; <br />
              &nbsp;&nbsp;fetch('/api/users') <br />
              &nbsp;&nbsp;&nbsp;&nbsp;.then(res =&gt; setData(res)) <br />
              &nbsp;&nbsp;&nbsp;&nbsp;.catch(err =&gt; setError(err)); <br />
              &#125;, []);
            </code>
            <p className="drawback">
              ❌ Must handle loading, error, caching, refetching manually
            </p>
          </div>

          <div className="comparison-item rq">
            <h4>With React Query</h4>
            <code className="code-block">
              const &#123; data, loading, error &#125; = useQuery( <br />
              &nbsp;&nbsp;'users', <br />
              &nbsp;&nbsp;() =&gt; fetch('/api/users').then(r =&gt; r.json())
              <br />
              );
            </code>
            <p className="benefit">
              ✅ Caching, deduplication, refetching, and error handling all
              built-in
            </p>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <h3>⚙️ Key Features</h3>
        <div className="features-list">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="when-to-use-box">
        <h3>🎯 When to Use What</h3>
        <div className="usecase-table">
          <div className="table-header">
            <div>Scenario</div>
            <div>Tool</div>
            <div>Why?</div>
          </div>
          {useCases.map((useCase, idx) => (
            <div key={idx} className="table-row">
              <div className="scenario">{useCase.scenario}</div>
              <div className="tool">
                <span className="tool-badge">{useCase.tool}</span>
              </div>
              <div className="reason">{useCase.reason}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fundamentals-box">
        <h3>🔑 Core Concepts</h3>
        <div className="concepts-grid">
          <div className="concept-card">
            <h4>useQuery</h4>
            <p>
              Fetch and cache <strong>read-only</strong> data
            </p>
            <code className="code-snippet">
              useQuery(['key'], fetchFunction)
            </code>
          </div>
          <div className="concept-card">
            <h4>useMutation</h4>
            <p>
              <strong>Mutate</strong> (create, update, delete) data
            </p>
            <code className="code-snippet">useMutation(mutationFunction)</code>
          </div>
          <div className="concept-card">
            <h4>Query Key</h4>
            <p>
              Unique identifier for caching and <strong>invalidation</strong>
            </p>
            <code className="code-snippet">['users', userId]</code>
          </div>
          <div className="concept-card">
            <h4>Stale Time & Cache Time</h4>
            <p>
              How long before data is <strong>stale</strong> and needs refresh
            </p>
            <code className="code-snippet">staleTime: 60000</code>
          </div>
        </div>
      </div>

      <div className="basic-example-box">
        <h3>💻 Basic Example</h3>
        <code className="code-block full-width">
          import &#123; useQuery &#125; from '@tanstack/react-query'; <br />
          <br />
          function UserList() &#123; <br />
          &nbsp;&nbsp;const &#123; data: users, isLoading, error &#125; =
          useQuery(
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;['users'], <br />
          &nbsp;&nbsp;&nbsp;&nbsp;async () =&gt; &#123; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const res = await
          fetch('/api/users'); <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return res.json(); <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#123; staleTime: 60000 &#125; <br />
          &nbsp;&nbsp;); <br />
          <br />
          &nbsp;&nbsp;if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
          <br />
          &nbsp;&nbsp;if (error) return &lt;div&gt;Error:
          &#123;error.message&#125; &lt;/div&gt;; <br />
          <br />
          &nbsp;&nbsp;return ( <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;users.map(user =&gt; (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li
          key=&#123;user.id&#125;&gt;&#123;user.name&#125;&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt; <br />
          &nbsp;&nbsp;); <br />
          &#125;
        </code>
      </div>

      <div className="devx-box">
        <h3>🚀 Developer Experience Benefits</h3>
        <div className="benefits-grid">
          <div className="benefit">
            <span className="benefit-icon">✨</span>
            <strong>Declarative:</strong> Describe what data you need, React
            Query handles the how
          </div>
          <div className="benefit">
            <span className="benefit-icon">⚡</span>
            <strong>Performance:</strong> Built-in caching and deduplication
            dramatically improve app speed
          </div>
          <div className="benefit">
            <span className="benefit-icon">🔧</span>
            <strong>DevTools:</strong> Chrome extension for debugging and
            monitoring queries
          </div>
          <div className="benefit">
            <span className="benefit-icon">📦</span>
            <strong>Less Code:</strong> No manual loading/error states, no
            useEffect cleanup logic
          </div>
        </div>
      </div>

      <div className="tq-recap">
        <h3>📚 Complete Guide (PDF)</h3>
        <p>
          Download the full React Query (TanStack Query) recap and reference
          guide:
        </p>
        <PDFViewer
          pdfPath="/assets/pdfs/React Query (TanStack Query).pdf"
          fileName="React Query (TanStack Query).pdf"
          title="React Query (TanStack Query) Complete Guide"
        />
      </div>
    </div>
  );
};

export default Panel14;
