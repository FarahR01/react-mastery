import React from "react";

interface ComponentRole {
  name: string;
  responsibility: string;
  example: string;
  stateOwnership: boolean;
}

const RoleCard: React.FC<{ role: ComponentRole }> = ({ role }) => (
  <div
    className={`component-role-card ${role.stateOwnership ? "state-owner" : "state-consumer"}`}
  >
    <div className="role-header">
      <h4>{role.name}</h4>
      {role.stateOwnership && (
        <span className="ownership-badge">🔐 State Owner</span>
      )}
      {!role.stateOwnership && (
        <span className="consumer-badge">📖 Reads State</span>
      )}
    </div>
    <div className="role-details">
      <p className="responsibility">
        <strong>Responsibility:</strong> {role.responsibility}
      </p>
      <p className="example">
        <strong>Example:</strong> <code>{role.example}</code>
      </p>
    </div>
  </div>
);

const Panel13: React.FC = () => {
  const componentRoles: ComponentRole[] = [
    {
      name: "<Accordion>",
      responsibility:
        "Owns openIndex state. Wraps children in Context.Provider.",
      example: "useState(openIndex); provides value via AccordionContext",
      stateOwnership: true,
    },
    {
      name: "<AccordionItem>",
      responsibility:
        "Structural wrapper only. Passes index down to Header and Content.",
      example: "<AccordionItem index={0}> wraps Header and Content",
      stateOwnership: false,
    },
    {
      name: "<AccordionHeader>",
      responsibility:
        "Reads context state. Dispatches onClick to toggle openIndex.",
      example: "useContext(AccordionContext); calls setOpenIndex(index)",
      stateOwnership: false,
    },
    {
      name: "<AccordionContent>",
      responsibility:
        "Reads context state. Conditionally renders based on openIndex.",
      example: "if (openIndex !== index) return null; else show content",
      stateOwnership: false,
    },
  ];

  return (
    <div className="panel panel-compound">
      <div className="panel-label">
        🧩 Compound Components: Orchestration via Context
      </div>
      <p className="panel-intro">
        Compound components let you build flexible component APIs by combining
        smaller, focused components that share state through Context. The
        Accordion pattern is the quintessential example.
      </p>

      <div className="compound-overview-box">
        <h3>📋 The Accordion Pattern</h3>
        <p>
          The <strong>parent component owns state</strong>, the{" "}
          <strong>child components read state</strong> via Context. This creates
          flexible, composable APIs where users assemble components based on
          their needs.
        </p>
        <code className="usage-example">
          &lt;Accordion&gt;
          <br />
          &nbsp;&nbsp;&lt;AccordionItem index=&#123;0&#125;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionHeader&gt;Panel 1&lt;/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionContent&gt;Content 1&lt;/&gt;
          <br />
          &nbsp;&nbsp;&lt;/AccordionItem&gt;
          <br />
          &nbsp;&nbsp;&lt;AccordionItem index=&#123;1&#125;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionHeader&gt;Panel 2&lt;/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionContent&gt;Content 2&lt;/&gt;
          <br />
          &nbsp;&nbsp;&lt;/AccordionItem&gt;
          <br />
          &lt;/Accordion&gt;
        </code>
      </div>

      <div className="component-roles-grid">
        {componentRoles.map((role, idx) => (
          <RoleCard key={idx} role={role} />
        ))}
      </div>

      <div className="context-flow-diagram">
        <h3>🌊 Context Flow Patterns</h3>

        <div className="flow-section">
          <div className="flow-step step-owner">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>&lt;Accordion&gt; — State Owner</h4>
              <p>
                Owns <code>openIndex</code> via useState
              </p>
              <p>
                Wraps all children in{" "}
                <code>&lt;AccordionContext.Provider&gt;</code>
              </p>
              <p className="code-snippet">
                &lt;AccordionContext.Provider value=&#123;&#123; openIndex,
                setOpenIndex &#125;&#125;&gt;
              </p>
            </div>
          </div>

          <div className="flow-step step-provider">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>AccordionContext.Provider</h4>
              <p>Invisible to DOM, visible to all descendants</p>
              <p>
                Provides <code>openIndex</code> and <code>setOpenIndex</code> to
                children
              </p>
              <p className="highlight">
                Any descendant can call{" "}
                <code>useContext(AccordionContext)</code>
              </p>
            </div>
          </div>

          <div className="flow-step step-consumer">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>&lt;AccordionHeader&gt; — State Consumer</h4>
              <p>
                Calls <code>useContext(AccordionContext)</code>
              </p>
              <p>On click, calls setOpenIndex to toggle open panel</p>
              <p className="code-snippet">
                const &#123; openIndex, setOpenIndex &#125; =
                useContext(AccordionContext);
              </p>
            </div>
          </div>

          <div className="flow-step step-consumer">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>&lt;AccordionContent&gt; — State Consumer</h4>
              <p>
                Calls <code>useContext(AccordionContext)</code>
              </p>
              <p>
                Conditionally renders based on whether index matches openIndex
              </p>
              <p className="code-snippet">
                if (index !== openIndex) return null;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-benefits-box">
        <h3>✨ Benefits of Compound Components</h3>
        <div className="benefits-list">
          <div className="benefit-item">
            <strong>Flexibility:</strong> Users compose components in any order
          </div>
          <div className="benefit-item">
            <strong>Separation of Concerns:</strong> Each component has one job
          </div>
          <div className="benefit-item">
            <strong>Implicit Sharing:</strong> No prop drilling — context
            handles communication
          </div>
          <div className="benefit-item">
            <strong>Discoverability:</strong> Component API is self-documenting
          </div>
        </div>
      </div>

      <div className="pattern-tradeoff-box">
        <h3>⚠️ When to Use Compound Components</h3>
        <div className="tradeoff-section">
          <div className="use-case use-yes">
            <h4>✅ Use Compound Components When:</h4>
            <ul>
              <li>Building a flexible component library API</li>
              <li>Component children are tightly coupled</li>
              <li>You want implicit state sharing without prop drilling</li>
              <li>Example: Accordion, Tabs, Dropdown, Dialog</li>
            </ul>
          </div>
          <div className="use-case use-no">
            <h4>❌ Avoid Compound Components When:</h4>
            <ul>
              <li>Building a simple, single-use component</li>
              <li>Props are explicit and clear</li>
              <li>You need strong TypeScript contracts</li>
              <li>Example: Button, Badge, Input (use plain components)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="key-insight-rq">
        <strong>💡 Real-World Standard:</strong> Radix UI, Headless UI, and
        modern component libraries all use compound components as their primary
        pattern. It's the industry standard for building accessible, flexible
        component systems.
      </div>
    </div>
  );
};

export default Panel13;
