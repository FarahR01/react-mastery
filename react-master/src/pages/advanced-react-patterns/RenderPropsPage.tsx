import MouseTracker from "../../components/advanced-react-patterns/Mouse Tracker/MouseTracker";
import "./RenderPropsPage.css";
import analogyImg from "../../assets/Render_Props_Pattern/Analgie.png";
import technicalImg from "../../assets/Render_Props_Pattern/render-props-pattern.png";

// 🎮 DEMO CARD - Interactive Tracker
function TrackerCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="badge">Interactive Demo</div>
        <h2>🎮 Render Props in Action</h2>
        <p>Move your mouse around to see the pattern work</p>
      </div>
      <div className="card-content">
        <div className="tracker-grid">
          {/* Example 1: Simple Text */}
          <div className="tracker-example">
            <h4>Simple Text Display</h4>
            <div className="tracker-box">
              <MouseTracker
                render={({ x, y }) => (
                  <div className="tracker-simple">
                    <div className="coords-text">
                      <strong>{x}px</strong> × <strong>{y}px</strong>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Example 2: Circle Indicator */}
          <div className="tracker-example">
            <h4>Visual Indicator</h4>
            <div className="tracker-box">
              <MouseTracker
                render={({ x, y }) => (
                  <div className="tracker-circle">
                    <div
                      className="cursor-dot"
                      style={{ left: `${x}px`, top: `${y}px` }}
                    />
                  </div>
                )}
              />
            </div>
          </div>

          {/* Example 3: Gradient */}
          <div className="tracker-example">
            <h4>Dynamic Gradient</h4>
            <div className="tracker-box">
              <MouseTracker
                render={({ x, y }) => (
                  <div
                    className="tracker-gradient"
                    style={{
                      background: `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.4), transparent 70%)`,
                    }}
                  >
                    <p>Hover me</p>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Example 4: Distance */}
          <div className="tracker-example">
            <h4>Distance Calculator</h4>
            <div className="tracker-box">
              <MouseTracker
                render={({ x, y }) => {
                  const distance = Math.sqrt(
                    Math.pow(x - 100, 2) + Math.pow(y - 100, 2),
                  );
                  const isClose = distance < 120;
                  return (
                    <div className="tracker-distance">
                      <div className={`status ${isClose ? "close" : ""}`}>
                        {isClose ? "🔥" : "❄️"}
                      </div>
                      <p>{Math.round(distance)}px away</p>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 📖 GUIDE CARD - What is Render Props?
function GuideCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="badge">Understanding</div>
        <h2>📖 What is the Render Props Pattern?</h2>
      </div>
      <div className="card-content">
        <div className="illustration-section">
          <img
            src={analogyImg}
            alt="Render Props Pattern - Analogy"
            className="pattern-illustration"
          />
        </div>
        <div className="guide-grid">
          <div className="guide-section">
            <h3>🔹 The Problem</h3>
            <p>
              You have <strong>reusable logic</strong> (like tracking mouse
              position) but want to render it <strong>different ways</strong> in
              different places.
            </p>
            <p>
              With props, you'd have to drill through many components. With
              Render Props, the parent decides how to render.
            </p>
          </div>

          <div className="guide-section">
            <h3>💡 The Solution</h3>
            <p>
              A component accepts a <strong>function as a prop</strong> that
              tells it how to render its data.
            </p>
            <code className="code-block">
              &lt;MouseTracker render=(position) =&gt; &#123; ... &#125; /&gt;
            </code>
          </div>

          <div className="guide-section">
            <h3>🔄 How It Works</h3>
            <ol className="steps">
              <li>
                <strong>Component receives a function</strong> as a prop
              </li>
              <li>
                <strong>Component manages state</strong> internally (e.g., mouse
                position)
              </li>
              <li>
                <strong>Component calls the function</strong> with state as
                argument
              </li>
              <li>
                <strong>Function returns JSX</strong> - you control the
                rendering
              </li>
            </ol>
          </div>
        </div>

        <div className="illustration-section">
          <img
            src={technicalImg}
            alt="Render Props Pattern - Technical Diagram"
            className="pattern-illustration"
          />
        </div>
      </div>
    </div>
  );
}

// 🎣 HOOKCARD - Hooks are Better (Modern Alternative)
function HookCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="badge">Modern Alternative</div>
        <h2>🎣 Custom Hooks - The Better Way Today</h2>
        <p>Render Props are old. Hooks solve the same problem cleaner.</p>
      </div>
      <div className="card-content">
        <div className="hook-comparison">
          <div className="hook-section">
            <h3>❌ The Render Props Way</h3>
            <pre className="code-example">
              {`<MouseTracker
  render={(pos) => (
    <div>
      Mouse at ({pos.x}, {pos.y})
    </div>
  )}
/>`}
            </pre>
            <p className="annotation">Verbose, nested, harder to read</p>
          </div>

          <div className="divider">→</div>

          <div className="hook-section">
            <h3>✅ The Hook Way (Modern)</h3>
            <pre className="code-example">
              {`function App() {
  const { x, y } = useMousePosition();
  return (
    <div>
      Mouse at ({x}, {y})
    </div>
  );
}`}
            </pre>
            <p className="annotation">Clean, linear, easier to understand</p>
          </div>
        </div>

        <div className="hook-details">
          <h4>When to Use Each:</h4>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Use When</th>
                <th>Avoid When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Render Props</strong>
                </td>
                <td>Building a library, old codebase needs it</td>
                <td>Writing new React apps (use Hooks instead)</td>
              </tr>
              <tr>
                <td>
                  <strong>Custom Hooks</strong>
                </td>
                <td>Modern React, sharing logic, clean code</td>
                <td>Not applicable - always prefer this</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function RenderPropsPage() {
  return (
    <div className="render-props-page">
      <div className="page-header">
        <div className="badge-large">React Pattern Practice</div>
        <h1>Render Props Pattern </h1>
        <p>
          This page helps you understand the pattern by seeing it, tweaking it,
          and comparing it to custom hooks.
        </p>
      </div>

      <div className="page-content">
        <TrackerCard />
        <GuideCard />
        <HookCard />
      </div>
    </div>
  );
}
