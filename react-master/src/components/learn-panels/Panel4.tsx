export interface PathData {
  icon: string;
  badge: string;
  badgeColor: string;
  title: string;
  titleColor: string;
  borderColor: string;
  items: string[];
  isGood: boolean;
}

export const ComparisonCards = () => {
  const paths: PathData[] = [
    {
      icon: "😵",
      badge: "Junior Path",
      badgeColor: "#fca5a5",
      title: "Imperative Mess",
      titleColor: "#fca5a5",
      borderColor: "2px solid #ef4444",
      items: [
        "Infinite render loops (no dep array)",
        "Business logic inside JSX",
        "Global state for everything",
        "No TypeScript interfaces",
        "No error / loading states",
        "Async directly in useEffect",
      ],
      isGood: false,
    },
    {
      icon: "🎯",
      badge: "Senior Path",
      badgeColor: "#86efac",
      title: "Clean Architecture",
      titleColor: "#86efac",
      borderColor: "2px solid #22c55e",
      items: [
        "Custom hooks isolate all side effects",
        "Services own raw API logic",
        "TypeScript interfaces for all data",
        "Error + loading + empty states handled",
        "Cleanup prevents memory leaks",
        "Components are pure rendering only",
      ],
      isGood: true,
    },
  ];

  return (
    <div className="compare-grid">
      {paths.map((path, idx) => (
        <div
          key={idx}
          className="path-card"
          style={{ borderTop: path.borderColor }}
        >
          <div className="path-header">
            <div className="path-icon">{path.icon}</div>
            <div>
              <div
                className="path-badge"
                style={{
                  background: path.isGood
                    ? "rgba(34,197,94,0.12)"
                    : "rgba(239,68,68,0.12)",
                  color: path.badgeColor,
                }}
              >
                {path.badge}
              </div>
              <div className="path-title" style={{ color: path.titleColor }}>
                {path.title}
              </div>
            </div>
          </div>

          <div
            className="code-block"
            style={{
              background: path.isGood
                ? "rgba(34,197,94,0.05)"
                : "rgba(239,68,68,0.06)",
              border: path.isGood
                ? "1px solid rgba(34,197,94,0.2)"
                : "1px solid rgba(239,68,68,0.2)",
            }}
          >
            {path.isGood ? (
              <>
                <span style={{ color: "#475569" }}>
                  // ✓ Logic abstracted to custom hook
                </span>
                <br />
                <span style={{ color: "#4ade80" }}>
                  function useUsers() {"{}"}
                </span>
                <br />
                &nbsp;
                <span style={{ color: "#94a3b8" }}>const</span>{" "}
                <span style={{ color: "#4ade80" }}>[data, setData]</span>{" "}
                <span style={{ color: "#94a3b8" }}>=</span>{" "}
                <span style={{ color: "#4ade80" }}>useState</span>
                <span style={{ color: "#94a3b8" }}>&lt;User[]&gt;([])</span>
                <br />
                &nbsp;
                <span style={{ color: "#94a3b8" }}>const</span>{" "}
                <span style={{ color: "#4ade80" }}>[loading, setLoading]</span>{" "}
                <span style={{ color: "#94a3b8" }}>=</span>{" "}
                <span style={{ color: "#4ade80" }}>useState</span>
                <span style={{ color: "#94a3b8" }}>
                  ({"{"}true{"}"}
                  {")"}
                </span>
                <br />
                &nbsp;
                <span style={{ color: "#94a3b8" }}>const</span>{" "}
                <span style={{ color: "#4ade80" }}>[error, setError]</span>{" "}
                <span style={{ color: "#94a3b8" }}>=</span>{" "}
                <span style={{ color: "#4ade80" }}>useState</span>
                <span style={{ color: "#94a3b8" }}>
                  ({"{"}null{"}"}
                  {")"}
                </span>
                <br />
                &nbsp;
                <span style={{ color: "#4ade80" }}>useEffect</span>
                <span style={{ color: "#94a3b8" }}>(() =&gt; {"{}"}</span>
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#4ade80" }}>
                  const ctrl = new AbortController()
                </span>
                <br />
                &nbsp;&nbsp;userService.getAll(ctrl.signal)...
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#4ade80" }}>return</span>{" "}
                <span style={{ color: "#f87171" }}>() =&gt; ctrl.abort()</span>{" "}
                <span style={{ color: "#4ade80" }}>//✓ cleanup</span>
                <br />
                &nbsp;
                <span style={{ color: "#94a3b8" }}>
                  {"}"},{"["}
                </span>
                <span style={{ color: "#4ade80" }}>]</span>
                <span style={{ color: "#94a3b8" }}>)</span> ✓ explicit deps
              </>
            ) : (
              <>
                <span style={{ color: "#475569" }}>
                  // ❌ Logic dumped in component
                </span>
                <br />
                <span style={{ color: "#f87171" }}>
                  function UserPage() {"{"}
                </span>
                <br />
                &nbsp;
                <span style={{ color: "#fbbf24" }}>const</span> [data, setData]
                = useState([])
                <br />
                <br />
                &nbsp;
                <span style={{ color: "#fbbf24" }}>useEffect</span>
                <span style={{ color: "#c084fc" }}>async</span> () =&gt; {"{"}
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#f87171" }}>
                  // ❌ async directly in effect
                </span>
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#f87171" }}>//❌ no cleanup</span>
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#f87171" }}>
                  // ❌ no error handling
                </span>
                <br />
                &nbsp;&nbsp;const r = await fetch('/api/users')
                <br />
                &nbsp;&nbsp;setData(await r.json())
                <br />
                &nbsp;
                <span style={{ color: "#f87171" }}>//❌ missing []</span>
                <br />
                <span style={{ color: "#f87171" }}>{"}"}</span>
              </>
            )}
          </div>

          <ul className="checklist">
            {path.items.map((item, i) => (
              <li key={i} className={path.isGood ? "good" : "bad"}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const KeyPrinciples = () => {
  const principles = [
    {
      icon: "🔒",
      title: "Single Responsibility",
      color: "#60a5fa",
      desc: "One component = one job. Hooks handle logic. Services handle data.",
    },
    {
      icon: "♻️",
      title: "DRY Hooks",
      color: "#c084fc",
      desc: "Extract repeated logic into custom hooks. useAuth, useFetch, useForm.",
    },
    {
      icon: "🎯",
      title: "Co-locate State",
      color: "#4ade80",
      desc: "State lives as close to its consumer as possible. Lift only when needed.",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8px",
        marginBottom: "14px",
      }}
    >
      {principles.map((principle, idx) => (
        <div
          key={idx}
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "12px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", marginBottom: "4px" }}>
            {principle.icon}
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: principle.color,
              marginBottom: "3px",
            }}
          >
            {principle.title}
          </div>
          <div
            style={{
              fontSize: "9px",
              fontFamily: "var(--ff-mono)",
              color: "var(--muted)",
            }}
          >
            {principle.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

const GitShowcase = () => {
  const commits = [
    {
      msg: "feat: add custom useAuth hook with JWT refresh",
      files: "src/hooks/useAuth.ts · src/services/authService.ts",
      hash: "abc1234 · 2 files changed, +87 −0",
      dotColor: "rgba(34,197,94,0.2)",
      dotBorder: "#22c55e",
      msgColor: "#4ade80",
    },
    {
      msg: "feat: scaffold scalable directory structure",
      files: "src/components/ · src/hooks/ · src/services/ · src/context/",
      hash: "def5678 · 12 files changed, +234 −0",
      dotColor: "rgba(59,130,246,0.2)",
      dotBorder: "#3b82f6",
      msgColor: "#60a5fa",
    },
    {
      msg: "chore: init vite+react+typescript + eslint + prettier",
      files: "vite.config.ts · tsconfig.json · .eslintrc · .prettierrc",
      hash: "ini0001 · Initial commit",
      dotColor: "rgba(168,85,247,0.2)",
      dotBorder: "#a855f7",
      msgColor: "#c084fc",
    },
  ];

  return (
    <div className="git-card">
      <div className="git-header">
        <div style={{ fontSize: "22px" }}>🐙</div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700 }}>
            github.com/you/react-masters-portfolio
          </div>
          <div
            style={{
              fontSize: "10px",
              fontFamily: "var(--ff-mono)",
              color: "var(--muted)",
            }}
          >
            main branch · production-ready
          </div>
        </div>
        <div className="portfolio-badge" style={{ marginLeft: "auto" }}>
          ⭐ Portfolio Ready
        </div>
      </div>
      <div className="git-timeline">
        {commits.map((commit, idx) => (
          <div key={idx} className="git-commit">
            <div
              className="git-dot"
              style={{
                background: commit.dotColor,
                borderColor: commit.dotBorder,
              }}
            ></div>
            <div className="git-meta">
              <div className="git-msg" style={{ color: commit.msgColor }}>
                {commit.msg}
              </div>
              <div className="git-files">{commit.files}</div>
              <div className="git-hash">{commit.hash}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "12px" }} className="git-push">
        <span style={{ color: "#475569" }}>$</span> git push origin main
        <br />
        <span style={{ color: "#64748b" }}>Enumerating objects: 48, done.</span>
        <br />
        <span style={{ color: "#64748b" }}>Writing objects: 100% (48/48)</span>
        <br />
        <span style={{ color: "#4ade80" }}>
          ✓ Branch 'main' set up to track 'origin/main'
        </span>
        <br />
        <span style={{ color: "#4ade80" }}>
          ✓ React Masters Portfolio — DEPLOYED 🚀
        </span>
      </div>
    </div>
  );
};

const Panel4: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel-label">Panel 04 / 04</div>
      <div className="panel-title">
        Thinking in React — The Best Practices Playbook
      </div>
      <div className="panel-sub">
        عقلية المطور الأول — Junior vs Senior Mental Models
      </div>
      <div
        className="divider"
        style={{
          background: "linear-gradient(90deg, var(--green), var(--blue))",
        }}
      ></div>

      <ComparisonCards />

      <KeyPrinciples />

      <div
        style={{
          fontSize: "11px",
          fontFamily: "var(--ff-mono)",
          color: "var(--muted)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        GitHub Portfolio Push — محفظة المشاريع
      </div>
      <GitShowcase />

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "12px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#fca5a5",
          }}
        >
          ⚠ Never: async directly in useEffect
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#fca5a5",
          }}
        >
          ⚠ Never: omit dependency array
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#86efac",
          }}
        >
          ✓ Always: cleanup in useEffect return
        </span>
        <span
          style={{
            padding: "3px 8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "5px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#86efac",
          }}
        >
          ✓ Always: TypeScript interfaces
        </span>
      </div>
    </div>
  );
};

export default Panel4;
