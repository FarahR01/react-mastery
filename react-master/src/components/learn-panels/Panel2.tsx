export const ComponentTree = () => {
  return (
    <div
      className="card blue arch-full"
      style={{ padding: "18px", marginBottom: "10px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div className="card-icon">🌳</div>
          <div className="card-name" style={{ color: "#60a5fa" }}>
            Component Tree — المكونات
          </div>
          <div className="cap-label" style={{ marginTop: "2px" }}>
            Unidirectional data flow
          </div>
        </div>
        <div className="tree-wrap" style={{ flex: 1, minWidth: "220px" }}>
          <div
            className="tree-node"
            style={{
              background: "rgba(59,130,246,0.2)",
              border: "1px solid rgba(59,130,246,0.4)",
              color: "#93c5fd",
            }}
          >
            &lt;App /&gt;
          </div>
          <div className="connector-v"></div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="branch">
              <div
                className="tree-node"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#7dd3fc",
                }}
              >
                &lt;Header /&gt;
              </div>
              <div className="connector-v"></div>
              <div
                className="tree-node"
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  color: "#bae6fd",
                  fontSize: "9px",
                }}
              >
                &lt;Nav /&gt;
              </div>
            </div>
            <div className="branch">
              <div
                className="tree-node"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#7dd3fc",
                }}
              >
                &lt;Main /&gt;
              </div>
              <div className="connector-v"></div>
              <div style={{ display: "flex", gap: "6px" }}>
                <div
                  className="tree-node"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: "#bae6fd",
                    fontSize: "9px",
                  }}
                >
                  &lt;List /&gt;
                </div>
                <div
                  className="tree-node"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: "#bae6fd",
                    fontSize: "9px",
                  }}
                >
                  &lt;Form /&gt;
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <div className="flow-row">
              <span
                className="flow-label"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  color: "#60a5fa",
                }}
              >
                props
              </span>
              <span className="flow-arrow">⬇</span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                Data flows down
              </span>
            </div>
            <div className="flow-row">
              <span
                className="flow-label"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  color: "#4ade80",
                }}
              >
                callbacks
              </span>
              <span className="flow-arrow">⬆</span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                Events bubble up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StateContextHooksCards = () => {
  return (
    <div className="arch-grid">
      {/* State Card */}
      <div className="card green">
        <div className="card-icon">📦</div>
        <div className="card-name" style={{ color: "#4ade80" }}>
          State — الحالة
        </div>
        <div className="card-ar">"Counter space" — local to each component</div>
        <div className="card-desc">
          Like the grill station's counter: only that component sees and manages
          it. useState creates a reactive snapshot.
        </div>
        <div
          style={{
            marginTop: "10px",
            padding: "8px",
            background: "rgba(34,197,94,0.06)",
            borderRadius: "7px",
            fontSize: "10px",
            fontFamily: "var(--ff-mono)",
          }}
        >
          <span style={{ color: "#86efac" }}>const</span>{" "}
          <span style={{ color: "#4ade80" }}>[count, setCount]</span>{" "}
          <span style={{ color: "#94a3b8" }}>= useState(</span>
          <span style={{ color: "#fbbf24" }}>0</span>
          <span style={{ color: "#94a3b8" }}>)</span>
        </div>
      </div>

      {/* Context Card */}
      <div className="card purple context-glow">
        <div className="card-icon">📢</div>
        <div className="card-name" style={{ color: "#c084fc" }}>
          Context — السياق
        </div>
        <div className="card-ar">"PA System" — broadcast to sub-tree</div>
        <div className="card-desc">
          Bypasses prop drilling. Every station hears the broadcast instantly.
          Great for auth state, themes, language.
        </div>
        <div
          className="warning-box"
          style={{ marginTop: "8px", padding: "6px 8px" }}
        >
          <div className="warning-icon">⚠️</div>
          <div className="warning-text">
            Causes re-renders on ALL consumers. Don't use for high-frequency
            updates!
          </div>
        </div>
      </div>
    </div>
  );
};

const HooksAndServicesCards = () => {
  return (
    <>
      {/* Hooks Card */}
      <div className="card cyan arch-full">
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "160px" }}>
            <div className="card-icon">🔧</div>
            <div className="card-name" style={{ color: "#22d3ee" }}>
              Hooks — خطافات
            </div>
            <div className="card-ar">Standardized chef's utensils</div>
            <div className="card-desc">
              Any functional component can use identical tools. Portable,
              composable, testable.
            </div>
          </div>
          <div style={{ flex: 1, minWidth: "180px" }}>
            <div style={{ marginBottom: "6px" }}>
              <span
                className="hook-badge"
                style={{
                  background: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  color: "#22d3ee",
                }}
              >
                useState
              </span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                ← notepad for orders
              </span>
            </div>
            <div style={{ marginBottom: "6px" }}>
              <span
                className="hook-badge"
                style={{
                  background: "rgba(168,85,247,0.12)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#c084fc",
                }}
              >
                useEffect
              </span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                ← talks to outside world
              </span>
            </div>
            <div style={{ marginBottom: "6px" }}>
              <span
                className="hook-badge"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#4ade80",
                }}
              >
                useContext
              </span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                ← taps PA system
              </span>
            </div>
            <div>
              <span
                className="hook-badge"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "#fbbf24",
                }}
              >
                useRef
              </span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "var(--ff-mono)",
                  color: "var(--muted)",
                }}
              >
                ← mutable ref
              </span>
            </div>
          </div>
          <div style={{ flex: 2, minWidth: "200px" }}>
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--ff-mono)",
                color: "var(--muted)",
                marginBottom: "6px",
              }}
            >
              useEffect → External API connection:
            </div>
            <div
              style={{
                padding: "10px",
                background: "rgba(6,182,212,0.06)",
                borderRadius: "8px",
                fontSize: "10px",
                fontFamily: "var(--ff-mono)",
                lineHeight: "1.6",
              }}
            >
              <span style={{ color: "#86efac" }}>useEffect</span>
              <span style={{ color: "#94a3b8" }}>(() =&gt; {"{}"}</span>
              <br />
              &nbsp;&nbsp;<span style={{ color: "#60a5fa" }}>fetchData</span>
              <span style={{ color: "#94a3b8" }}>()</span>
              <span style={{ color: "#64748b" }}>{"// ← calls service"}</span>
              <br />
              &nbsp;&nbsp;<span style={{ color: "#86efac" }}>return</span>{" "}
              <span style={{ color: "#f87171" }}>() =&gt; cleanup()</span>
              <br />
              <span style={{ color: "#94a3b8" }}>{"}, ["}</span>
              <span style={{ color: "#fbbf24" }}>dep</span>
              <span style={{ color: "#94a3b8" }}>{"]"}')</span>
            </div>
            <div className="warning-box">
              <div className="warning-icon">⚠️</div>
              <div className="warning-text">
                <strong style={{ color: "#ef4444" }}>RECRUITER TRAP:</strong>{" "}
                Missing [] dependency array = infinite re-render loop! Always
                declare deps explicitly.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Card */}
      <div className="card amber arch-full">
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "160px" }}>
            <div className="card-icon">🏭</div>
            <div className="card-name" style={{ color: "#fbbf24" }}>
              Services — الخدمات
            </div>
            <div className="card-ar">
              "External suppliers" — live OUTSIDE UI
            </div>
            <div className="card-desc">
              Pure functions that handle API calls, Firebase, Twilio. No React
              imports. Reusable across frameworks.
            </div>
          </div>
          <div style={{ flex: 2, minWidth: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "8px 12px",
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.3)",
                    borderRadius: "8px",
                    fontSize: "10px",
                    fontFamily: "var(--ff-mono)",
                    color: "#fbbf24",
                  }}
                >
                  userService.js
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    fontFamily: "var(--ff-mono)",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  Raw API logic
                </div>
              </div>
              <div style={{ fontSize: "16px", color: "var(--muted)" }}>→</div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "8px 12px",
                    background: "rgba(6,182,212,0.1)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    borderRadius: "8px",
                    fontSize: "10px",
                    fontFamily: "var(--ff-mono)",
                    color: "#22d3ee",
                  }}
                >
                  useUser()
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    fontFamily: "var(--ff-mono)",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  Custom hook wrapper
                </div>
              </div>
              <div style={{ fontSize: "16px", color: "var(--muted)" }}>→</div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "8px 12px",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.3)",
                    borderRadius: "8px",
                    fontSize: "10px",
                    fontFamily: "var(--ff-mono)",
                    color: "#60a5fa",
                  }}
                >
                  &lt;UserCard /&gt;
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    fontFamily: "var(--ff-mono)",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  Pure UI component
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "8px",
                fontSize: "9px",
                fontFamily: "var(--ff-mono)",
                color: "var(--muted)",
              }}
            >
              ✦ Service → Hook (utensil) → State (counter) → Component (station)
              — clean separation of concerns
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Panel2: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel-label">Panel 02 / 04</div>
      <div className="panel-title">Modern React Architectural Flow</div>
      <div className="panel-sub">
        كيف يعمل النظام — How It Works: Components, State, Context, Hooks,
        Services
      </div>
      <div
        className="divider"
        style={{
          background: "linear-gradient(90deg, var(--purple), var(--blue))",
        }}
      ></div>

      <ComponentTree />
      <StateContextHooksCards />
      <HooksAndServicesCards />

      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginTop: "4px",
        }}
      >
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#4ade80",
          }}
        >
          الحالة = State
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(168,85,247,0.08)",
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#c084fc",
          }}
        >
          السياق = Context
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(6,182,212,0.08)",
            border: "1px solid rgba(6,182,212,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#22d3ee",
          }}
        >
          خطافات = Hooks
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#fbbf24",
          }}
        >
          الخدمات = Services
        </span>
      </div>
    </div>
  );
};

export default Panel2;
