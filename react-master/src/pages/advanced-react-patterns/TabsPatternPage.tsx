import { Tabs } from "../../components/tabs-component/TabsComponent";
import "./TabsPatternPage.css";

export default function TabsPatternPage() {
  return (
    <div className="tabs-pattern-page">
      <div className="page-header">
        <div className="badge-large">React Pattern Practice</div>
        <h1>Compound Components Pattern</h1>
        <p>
          Master component composition with the Tabs component - a real-world
          example of the compound pattern.
        </p>
      </div>

      <div className="page-content">
        {/* Demo Card */}
        <div className="card">
          <div className="card-header">
            <div className="badge">Interactive Demo</div>
            <h2>📑 Tabs Pattern in Action</h2>
            <p>Click the tabs below to see the compound pattern working</p>
          </div>
          <div className="card-content">
            <Tabs>
              <Tabs.List>
                <Tabs.Tab index={0}>Overview</Tabs.Tab>
                <Tabs.Tab index={1}>Implementation</Tabs.Tab>
                <Tabs.Tab index={2}>Benefits</Tabs.Tab>
                <Tabs.Tab index={3}>Use Cases</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel index={0}>
                <div className="panel-content">
                  <h3>What is a Compound Component?</h3>
                  <p>
                    A compound component is a component pattern where a parent
                    component manages state and provides behavior, while child
                    components are responsible for rendering the UI.
                  </p>
                  <p>
                    The key benefit is a cleaner, more intuitive API:{" "}
                    <code>{"<Tabs.Tab />"}</code> and{" "}
                    <code>{"<Tabs.Panel />"}</code> clearly communicate their
                    purpose.
                  </p>
                </div>
              </Tabs.Panel>

              <Tabs.Panel index={1}>
                <div className="panel-content">
                  <h3>How It's Implemented</h3>
                  <div className="code-block">
                    <pre>{`<Tabs>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel index={0}>Content 1</Tabs.Panel>
  <Tabs.Panel index={1}>Content 2</Tabs.Panel>
</Tabs>`}</pre>
                  </div>
                  <p>
                    The parent <code>{"<Tabs />"}</code> manages the active
                    index state via React Context.
                  </p>
                </div>
              </Tabs.Panel>

              <Tabs.Panel index={2}>
                <div className="panel-content">
                  <h3>Key Benefits</h3>
                  <ul className="benefits-list">
                    <li>
                      ✅ <strong>Intuitive API</strong> - Child components are
                      named clearly
                    </li>
                    <li>
                      ✅ <strong>Flexible Structure</strong> - Children can be
                      ordered anywhere
                    </li>
                    <li>
                      ✅ <strong>Encapsulated Logic</strong> - Parent handles
                      all state management
                    </li>
                    <li>
                      ✅ <strong>Type Safe</strong> - Full TypeScript support
                    </li>
                    <li>
                      ✅ <strong>Reusable</strong> - Works in any React
                      application
                    </li>
                    <li>
                      ✅ <strong>Scalable</strong> - Easy to add new features
                    </li>
                  </ul>
                </div>
              </Tabs.Panel>

              <Tabs.Panel index={3}>
                <div className="panel-content">
                  <h3>Real-World Use Cases</h3>
                  <ul className="use-cases-list">
                    <li>
                      📋 <strong>Settings Pages</strong> - Group related
                      settings by tab
                    </li>
                    <li>
                      🏠 <strong>Dashboard Layouts</strong> - Multiple views of
                      data
                    </li>
                    <li>
                      📚 <strong>Documentation</strong> - Switch between code
                      samples
                    </li>
                    <li>
                      🛒 <strong>E-commerce</strong> - Product details, reviews,
                      shipping info
                    </li>
                    <li>
                      🗂️ <strong>File Explorers</strong> - Multiple open files
                      or folders
                    </li>
                    <li>
                      ⚙️ <strong>Admin Panels</strong> - Different configuration
                      sections
                    </li>
                  </ul>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>

        {/* Concepts Card */}
        <div className="card">
          <div className="card-header">
            <div className="badge">Learning</div>
            <h2>📖 Key Concepts</h2>
          </div>
          <div className="card-content">
            <div className="concepts-grid">
              <div className="concept">
                <h3>🧩 Compound Pattern</h3>
                <p>
                  Group related components together for cleaner APIs and better
                  encapsulation.
                </p>
              </div>
              <div className="concept">
                <h3>📡 Context API</h3>
                <p>
                  Share state across deeply nested components without prop
                  drilling.
                </p>
              </div>
              <div className="concept">
                <h3>⚛️ Composition</h3>
                <p>
                  Build complex UIs by combining simple, focused components.
                </p>
              </div>
              <div className="concept">
                <h3>🎯 Single Responsibility</h3>
                <p>
                  Each component has one clear job - tabs handle tabs, panels
                  show content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Card */}
        <div className="card">
          <div className="card-header">
            <div className="badge">Architecture</div>
            <h2>🏗️ Component Structure</h2>
          </div>
          <div className="card-content">
            <div className="architecture">
              <div className="component-box main">
                <strong>&lt;Tabs /&gt;</strong>
                <small>Manages activeIndex state</small>
                <small>Provides context</small>
              </div>

              <div className="hierarchy">
                <div className="component-box">
                  <strong>&lt;Tabs.List /&gt;</strong>
                  <small>Container</small>
                </div>
                <div className="component-box">
                  <strong>&lt;Tabs.Tab /&gt;</strong>
                  <small>Button</small>
                </div>
              </div>

              <div className="hierarchy">
                <div className="component-box">
                  <strong>&lt;Tabs.Panel /&gt;</strong>
                  <small>Content</small>
                </div>
              </div>

              <p className="architecture-note">
                All child components access state via{" "}
                <code>useTabsContext()</code> hook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
