import { Accordion } from "../../components/advanced-react-patterns/Accordion";
import { AccordionItem } from "../../components/advanced-react-patterns/AccordionItem";
import { AccordionHeader } from "../../components/advanced-react-patterns/AccordionHeader";
import { AccordionContent } from "../../components/advanced-react-patterns/AccordionContent";
import "./AccordionPage.css";

export default function AccordionPage() {
  return (
    <div className="accordion-page">
      {/* Header Section */}
      <div className="accordion-header">
        <h1>🎯 Compound Components Pattern</h1>
        <p>
          Learn how to build flexible, composable components that share state
          internally without prop drilling
        </p>
        <a
          href="https://www.patterns.dev/react/compound-pattern/"
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more-link"
        >
          📖 Read Official Documentation →
        </a>
      </div>

      {/* Problem Section */}
      <section className="pattern-section">
        <h2>🔹 Problem It Solves</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Share State Internally</h3>
            <p>
              Components manage their own state without exposing it to parents
            </p>
          </div>
          <div className="problem-card">
            <h3>Allow Flexible Composition</h3>
            <p>Mix and match child components in any order or combination</p>
          </div>
          <div className="problem-card">
            <h3>Avoid Prop Drilling</h3>
            <p>No need to pass props through many levels of components</p>
          </div>
        </div>
      </section>

      {/* Mental Model Section */}
      <section className="pattern-section">
        <h2>🧠 Mental Model</h2>
        <div className="mental-model">
          <p className="model-title">Think of:</p>
          <div className="code-block">
            &lt;select&gt;
            <br />
            &nbsp;&nbsp;&lt;option /&gt;
            <br />
            &nbsp;&nbsp;&lt;option /&gt;
            <br />
            &lt;/select&gt;
          </div>
          <div className="model-explanation">
            <div className="model-point">
              <span className="model-icon">👉</span>
              <span>
                <strong>Parent</strong> controls behavior & state management
              </span>
            </div>
            <div className="model-point">
              <span className="model-icon">👉</span>
              <span>
                <strong>Children</strong> define structure & how to display data
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagrams Section */}
      <section className="pattern-section">
        <h2>📊 Architecture Diagrams</h2>
        <div className="diagrams-container">
          <div className="diagram-card">
            <h3>Structure Overview</h3>
            <img
              src="/src/assets/Accordion_pattern/compound-componenet-pattern.png"
              alt="Compound Components Pattern Diagram"
              className="diagram-image"
            />
            <p className="diagram-caption">
              Shows how the Accordion parent provides state to all child
              components
            </p>
          </div>
          <div className="diagram-card">
            <h3>Parent-Child Communication</h3>
            <img
              src="/src/assets/Accordion_pattern/parent-children-focus.png"
              alt="Parent-Children Communication Diagram"
              className="diagram-image"
            />
            <p className="diagram-caption">
              Illustrates how parent manages state and children control/display
              data
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="pattern-section">
        <h2>🛠️ Implementation (Step-by-Step)</h2>
        <div className="implementation-steps">
          <div className="step">
            <h3>Step 1: Create Context</h3>
            <p>
              Start by creating a <strong>React Context</strong> that will hold
              the shared state (like which accordion item is open). This context
              acts as a communication channel between the parent and all child
              components. Think of it as a shared bulletin board where any
              component can read or post updates.
            </p>
            <div className="guidance-box">
              <strong>💡 Why?</strong> Context allows child components to access
              the parent's state without having to pass it through props at
              every level.
            </div>
          </div>

          <div className="step">
            <h3>Step 2: Create Parent Component</h3>
            <p>
              The parent component (like <code>&lt;Accordion /&gt;</code>) owns
              the state logic. It uses <strong>useState</strong> to track which
              accordion item is currently open. Then it wraps all children with
              the Context Provider, making the state available to everyone
              inside.
            </p>
            <div className="guidance-box">
              <strong>🎯 Role:</strong> Parent = State Manager. It decides what
              data exists and how it changes. Children just access it.
            </div>
          </div>

          <div className="step">
            <h3>Step 3: Create Wrapper Components</h3>
            <p>
              Design simple wrapper components like{" "}
              <code>&lt;AccordionItem /&gt;</code> that act as containers. These
              components don't need to know about state—they just wrap their
              children nicely. They provide structure and organization to your
              component hierarchy.
            </p>
            <div className="guidance-box">
              <strong>📦 Purpose:</strong> Wrapper components are like folders
              that organize your content. They make the API cleaner and more
              semantic.
            </div>
          </div>

          <div className="step">
            <h3>Step 4: Interactive Components (Header)</h3>
            <p>
              The header component is <strong>interactive</strong>. It uses the
              Context to both read the current state AND trigger changes when
              clicked. When a user clicks a header, it calls the{" "}
              <code>setOpenIndex</code> function to update which item is open.
            </p>
            <div className="guidance-box">
              <strong>⚡ Control Flow:</strong> User clicks → Header calls
              setOpenIndex → Parent state updates → All children re-render with
              new state.
            </div>
          </div>

          <div className="step">
            <h3>Step 5: Display Components (Content)</h3>
            <p>
              The content component is <strong>passive</strong>. It only reads
              the state from Context and decides whether to show itself. If the
              current open index matches its own index, it renders. Otherwise,
              it renders nothing.
            </p>
            <div className="guidance-box">
              <strong>👀 Logic:</strong> "If the parent says I'm open (my index
              is the openIndex), then show me. Otherwise, stay hidden."
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Example */}
      <section className="pattern-section">
        <h2>✨ Interactive Example</h2>
        <p className="example-subtitle">
          Try clicking the headers to expand and collapse sections:
        </p>

        <Accordion>
          <AccordionItem>
            <AccordionHeader index={0}>
              📌 What are Compound Components?
            </AccordionHeader>
            <AccordionContent index={0}>
              Compound components are a pattern where a set of components work
              together to form a complete UI element. The parent component
              manages shared state, while child components consume that state to
              coordinate their behavior. This creates a clean, intuitive API.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader index={1}>✅ Why This Is Powerful</AccordionHeader>
            <AccordionContent index={1}>
              <ul>
                <li>
                  <strong>No Prop Drilling:</strong> State lives in the parent
                  and is accessed via Context
                </li>
                <li>
                  <strong>Flexible Composition:</strong> Arrange children in any
                  order
                </li>
                <li>
                  <strong>Clean API:</strong> Intuitive component structure
                </li>
                <li>
                  <strong>Maintainability:</strong> Changes are localized to
                  specific components
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader index={2}>
              ⚠️ When to Use This Pattern
            </AccordionHeader>
            <AccordionContent index={2}>
              <strong>Use compound components when:</strong>
              <ul>
                <li>Multiple components share behavior</li>
                <li>You want flexible composition</li>
                <li>You need to avoid prop drilling</li>
                <li>Building reusable UI patterns</li>
              </ul>
              <strong style={{ display: "block", marginTop: "15px" }}>
                Avoid when:
              </strong>
              <ul>
                <li>Simple components with minimal state</li>
                <li>Single-use components</li>
                <li>When props would be simpler</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader index={3}>🎓 Common Mistakes</AccordionHeader>
            <AccordionContent index={3}>
              <strong>❌ Mistake 1: Overusing the Pattern</strong>
              <p>
                Not every component needs to be compound. Save this pattern for
                cases where it genuinely simplifies complexity.
              </p>

              <strong style={{ display: "block", marginTop: "15px" }}>
                ❌ Mistake 2: Tight Coupling
              </strong>
              <p>
                Don't assume children will always be in a specific order. Make
                your implementation flexible.
              </p>

              <strong style={{ display: "block", marginTop: "15px" }}>
                ✅ Best Practice
              </strong>
              <p>
                Use compound components when composition and flexibility are
                more important than simplicity.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Comparison Section */}
      <section className="pattern-section">
        <h2>🔄 Compound Components vs Props</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Props Approach</th>
                <th>Compound Components</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prop Drilling</td>
                <td>❌ Required</td>
                <td>✅ Avoid</td>
              </tr>
              <tr>
                <td>Flexibility</td>
                <td>❌ Limited</td>
                <td>✅ High</td>
              </tr>
              <tr>
                <td>Complexity</td>
                <td>✅ Simple</td>
                <td>⚠️ More code</td>
              </tr>
              <tr>
                <td>State Management</td>
                <td>ℹ️ Props</td>
                <td>✅ Context</td>
              </tr>
              <tr>
                <td>API Intuitiveness</td>
                <td>⚠️ Depends</td>
                <td>✅ Very</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="pattern-section takeaways-section">
        <h2>🎯 Key Takeaways</h2>
        <div className="takeaways">
          <div className="takeaway-item">
            <span className="number">1</span>
            <p>
              Compound components use Context to share state between parent and
              children
            </p>
          </div>
          <div className="takeaway-item">
            <span className="number">2</span>
            <p>
              They eliminate prop drilling and create flexible component APIs
            </p>
          </div>
          <div className="takeaway-item">
            <span className="number">3</span>
            <p>Use them for complex components, not simple cases</p>
          </div>
          <div className="takeaway-item">
            <span className="number">4</span>
            <p>
              Think of `&lt;select&gt;` and `&lt;option&gt;` as the mental model
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
