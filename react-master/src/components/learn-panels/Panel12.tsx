import React from "react";

interface PatternPhase {
  title: string;
  description: string;
  code: string;
}

interface PatternComparison {
  phase: string;
  renderProps: string;
  customHook: string;
}

const PhaseDiagram: React.FC<{
  phase: PatternPhase;
  side: "left" | "right";
}> = ({ phase, side }) => (
  <div className={`pattern-phase phase-${side}`}>
    <h4>{phase.title}</h4>
    <p>{phase.description}</p>
    <code className="pattern-code">{phase.code}</code>
  </div>
);

const Panel12: React.FC = () => {
  const renderPropsPhases: PatternPhase[] = [
    {
      title: "MouseTracker Component",
      description: "Owns state, wraps a div, calls render()",
      code: `<MouseTracker
  render={({ x, y }) => (
    <p>Pos: {x}, {y}</p>
  )}
/>`,
    },
    {
      title: "render prop receives values",
      description: "Consumer provides the render function",
      code: `render=(({ x, y }) => {
  return <CustomUI />;
})`,
    },
    {
      title: "UI rendered by function",
      description: "Component renders the result",
      code: `return (
  <div onMouseMove={...}>
    {this.props.render(state)}
  </div>
);`,
    },
  ];

  const customHookPhases: PatternPhase[] = [
    {
      title: "useMouse() Hook",
      description: "Owns state, attaches event listener",
      code: `const { x, y } = useMouse();`,
    },
    {
      title: "Hook returns values",
      description: "Consumer calls the hook directly",
      code: `const position = useMouse();
// position = { x, y }`,
    },
    {
      title: "Component renders freely",
      description: "Use the hook values in your component",
      code: `return (
  <p>Pos: {position.x}, 
     {position.y}</p>
);`,
    },
  ];

  const comparisons: PatternComparison[] = [
    {
      phase: "How state is shared",
      renderProps: "Props callback function",
      customHook: "Hook return value",
    },
    {
      phase: "Nesting required?",
      renderProps: "Yes — logic tied to JSX tree (wrapper hell)",
      customHook: "No — hooks compose freely",
    },
    {
      phase: "Usage in 2026",
      renderProps: "Still valid in libraries (Downshift)",
      customHook: "Preferred — composable, flat",
    },
    {
      phase: "Learning curve",
      renderProps: "Higher — harder to understand flow",
      customHook: "Lower — familiar function call syntax",
    },
  ];

  return (
    <div className="panel panel-patterns">
      <div className="panel-label">
        🔄 Same Problem, Two Solutions: Render Props vs Hooks
      </div>
      <p className="panel-intro">
        Both solve the same problem: how to share stateful logic across
        components. They represent two eras of React, and their tradeoffs are
        important to understand.
      </p>

      <div className="pattern-comparison-container">
        <div className="pattern-side pattern-renderprops">
          <h3>📦 Render Props Pattern (2016-2018)</h3>
          <p className="pattern-description">
            Logic component wraps a render function prop
          </p>
          {renderPropsPhases.map((phase, idx) => (
            <PhaseDiagram key={idx} phase={phase} side="left" />
          ))}
          <div className="pattern-note renderprops-note">
            ⚠️ Creates nested components → "wrapper hell" when combining
            multiple patterns
          </div>
        </div>

        <div className="pattern-divider"></div>

        <div className="pattern-side pattern-hooks">
          <h3>🎣 Custom Hook Pattern (2018-Present)</h3>
          <p className="pattern-description">
            Extract logic into a custom hook that returns values
          </p>
          {customHookPhases.map((phase, idx) => (
            <PhaseDiagram key={idx} phase={phase} side="right" />
          ))}
          <div className="pattern-note hooks-note">
            ✨ Flat, composable, reusable — the modern React standard
          </div>
        </div>
      </div>

      <div className="pattern-comparison-section">
        <h3>🎯 Head-to-Head Comparison</h3>
        <div className="comparison-table patterns-table">
          {comparisons.map((item, idx) => (
            <div key={idx} className="comparison-row patterns-row">
              <div className="comparison-aspect">{item.phase}</div>
              <div className="comparison-renderprops">
                <div className="comparison-label">Render Props</div>
                {item.renderProps}
              </div>
              <div className="comparison-hooks">
                <div className="comparison-label">Custom Hooks</div>
                {item.customHook}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="practical-examples-box">
        <h3>📚 Real-World Examples</h3>
        <div className="examples-grid">
          <div className="example-card">
            <h4>Render Props Still Used</h4>
            <ul>
              <li>Downshift (dropdown, autocomplete)</li>
              <li>React Router (older patterns)</li>
              <li>Some form libraries</li>
            </ul>
            <p className="example-reason">
              When you need fine-grained control over rendering
            </p>
          </div>
          <div className="example-card">
            <h4>Hooks Dominate Now</h4>
            <ul>
              <li>useMouse, useForm, useLocalStorage</li>
              <li>useQuery, useMutation (React Query)</li>
              <li>useContext, useReducer integrations</li>
            </ul>
            <p className="example-reason">
              Simpler, more composable, industry standard
            </p>
          </div>
        </div>
      </div>

      <div className="key-insight-rq">
        <strong>💡 Key Decision:</strong> When building new logic in 2026,
        always reach for custom hooks first. Resort to render props only when
        you need the control and flexibility for a library component.
      </div>
    </div>
  );
};

export default Panel12;
