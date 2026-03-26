export interface SetupStep {
  number: string;
  icon: string;
  label: string;
  title: string;
  color: string;
  borderColor: string;
  titleColor: string;
  command: string;
}

interface DirItem {
  name: string;
  type: "folder" | "file";
  level: number;
  description: string;
  badge?: { text: string; color: string };
}

const SetupSteps = () => {
  const steps: SetupStep[] = [
    {
      number: "01",
      icon: "⚡",
      label: "Terminal",
      title: "Scaffold Project",
      color: "#22d3ee",
      borderColor: "2px solid #06b6d4",
      titleColor: "#22d3ee",
      command: `$ npm create vite@latest
? Framework: React
? Variant: TypeScript
$ cd my-app
$ npm install
$ npm run dev`,
    },
    {
      number: "02",
      icon: "🧩",
      label: "VS Code",
      title: "Install Extensions",
      color: "#c084fc",
      borderColor: "2px solid #a855f7",
      titleColor: "#c084fc",
      command: "",
    },
    {
      number: "03",
      icon: "✅",
      label: "Confirm",
      title: "Auto-Format On Save",
      color: "#4ade80",
      borderColor: "2px solid #22c55e",
      titleColor: "#4ade80",
      command: `// .vscode/settings.json
{
  "editor.formatOnSave":
    true,
  "editor.defaultFormatter":
    "esbenp.prettier-vscode"
}`,
    },
  ];

  return (
    <div className="steps-row">
      {steps.map((step, idx) => (
        <div key={idx} className="step" style={{ borderTop: step.borderColor }}>
          <div className="step-num">{step.number}</div>
          <div className="step-icon">{step.icon}</div>
          <div className="step-label">{step.label}</div>
          <div className="step-title" style={{ color: step.titleColor }}>
            {step.title}
          </div>
          {idx === 1 ? (
            <div className="ext-grid" style={{ marginTop: 0 }}>
              <div className="ext-item">
                <div className="ext-icon">⚛</div>
                <div>
                  <div className="ext-name" style={{ fontSize: "9px" }}>
                    ES7+ React Snippets
                  </div>
                  <div className="ext-desc">rafce → component</div>
                </div>
              </div>
              <div className="ext-item">
                <div className="ext-icon">✨</div>
                <div>
                  <div className="ext-name" style={{ fontSize: "9px" }}>
                    Prettier
                  </div>
                  <div className="ext-desc">Auto-format on save</div>
                </div>
              </div>
              <div className="ext-item">
                <div className="ext-icon">🔍</div>
                <div>
                  <div className="ext-name" style={{ fontSize: "9px" }}>
                    ESLint
                  </div>
                  <div className="ext-desc">Lint rules enforced</div>
                </div>
              </div>
              <div className="ext-item">
                <div className="ext-icon">🎨</div>
                <div>
                  <div className="ext-name" style={{ fontSize: "9px" }}>
                    Tailwind CSS IntelliSense
                  </div>
                  <div className="ext-desc">Class autocomplete</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="step-cmd">{step.command}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const DirectoryStructure = () => {
  const dirItems: DirItem[] = [
    { name: "src/", type: "folder", level: 0, description: "" },
    {
      name: "components/",
      type: "folder",
      level: 1,
      description: "UI Layer",
      badge: { text: "UI Layer", color: "#60a5fa" },
    },
    {
      name: "common/",
      type: "folder",
      level: 2,
      description: "Button, Input, Modal — shared atoms",
    },
    {
      name: "features/",
      type: "folder",
      level: 2,
      description: "UserCard, ProductList — domain components",
    },
    {
      name: "layout/",
      type: "folder",
      level: 2,
      description: "Header, Sidebar, Footer",
    },
    {
      name: "hooks/",
      type: "folder",
      level: 1,
      description: "Reusable logic capsules",
      badge: { text: "خطافات", color: "#22d3ee" },
    },
    {
      name: "useAuth.ts",
      type: "file",
      level: 2,
      description: "Authentication state",
    },
    {
      name: "useFetch.ts",
      type: "file",
      level: 2,
      description: "Generic data fetching",
    },
    {
      name: "useLocalStorage.ts",
      type: "file",
      level: 2,
      description: "Persistent state",
    },
    {
      name: "services/",
      type: "folder",
      level: 1,
      description: "External world contact (no React)",
      badge: { text: "الخدمات", color: "#fbbf24" },
    },
    {
      name: "api.ts",
      type: "file",
      level: 2,
      description: "Axios/fetch base config",
    },
    {
      name: "userService.ts",
      type: "file",
      level: 2,
      description: "getUser, updateUser, deleteUser",
    },
    {
      name: "authService.ts",
      type: "file",
      level: 2,
      description: "login, logout, refresh token",
    },
    {
      name: "context/",
      type: "folder",
      level: 1,
      description: "Global broadcast (use sparingly!)",
      badge: { text: "السياق", color: "#c084fc" },
    },
    {
      name: "AuthContext.tsx",
      type: "file",
      level: 2,
      description: "User session provider",
    },
    {
      name: "ThemeContext.tsx",
      type: "file",
      level: 2,
      description: "Dark/light mode",
    },
    {
      name: "types/",
      type: "folder",
      level: 1,
      description: "TypeScript interfaces (User, Product, API)",
    },
    {
      name: "utils/",
      type: "folder",
      level: 1,
      description: "formatDate, debounce, validators",
    },
    {
      name: "pages/",
      type: "folder",
      level: 1,
      description: "Route-level components (Next.js: app/)",
    },
    {
      name: "main.tsx",
      type: "file",
      level: 1,
      description: "App entry point",
    },
    {
      name: "App.tsx",
      type: "file",
      level: 1,
      description: "Router + global providers",
    },
    { name: "vite.config.ts", type: "file", level: 1, description: "" },
    { name: "tsconfig.json", type: "file", level: 1, description: "" },
    { name: ".eslintrc.cjs", type: "file", level: 1, description: "" },
    { name: ".prettierrc", type: "file", level: 1, description: "" },
  ];

  const getIndentClass = (level: number) => {
    if (level === 0) return "";
    if (level === 1) return "dir-indent1";
    if (level === 2) return "dir-indent2";
    return "dir-indent3";
  };

  return (
    <div className="dir-tree">
      <div className="dir-header">
        <div className="dot" style={{ background: "#ef4444" }}></div>
        <div className="dot" style={{ background: "#f59e0b" }}></div>
        <div className="dot" style={{ background: "#22c55e" }}></div>
        <span
          style={{
            fontFamily: "var(--ff-mono)",
            fontSize: "11px",
            color: "var(--muted)",
            marginLeft: "6px",
          }}
        >
          my-app/
        </span>
      </div>
      <div className="dir-body">
        {dirItems.map((item, idx) => (
          <div key={idx} className={getIndentClass(item.level)}>
            {item.type === "folder" ? (
              <span className="dir-folder">📁 {item.name}</span>
            ) : (
              <span className="dir-file">📄 {item.name}</span>
            )}
            {item.badge && (
              <span
                className="dir-badge"
                style={{
                  background: `rgba(${item.badge.color}, 0.15)`,
                  color: item.badge.color,
                }}
              >
                {item.badge.text}
              </span>
            )}
            {item.description && (
              <span
                style={{
                  color: "#475569",
                  fontSize: "9px",
                  marginLeft: "8px",
                }}
              >
                ← {item.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Panel3: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel-label">Panel 03 / 04</div>
      <div className="panel-title">
        Environment Orchestration & Scalable Anatomy
      </div>
      <div className="panel-sub">
        إعداد البيئة — The Professional Setup Guide
      </div>
      <div
        className="divider"
        style={{
          background: "linear-gradient(90deg, var(--cyan), var(--green))",
        }}
      ></div>

      <SetupSteps />

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
        Senior-Level Directory Structure — هيكل المشروع
      </div>
      <DirectoryStructure />

      <div
        style={{
          marginTop: "10px",
          padding: "10px 14px",
          background: "rgba(34,197,94,0.06)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: "8px",
          fontSize: "10px",
          fontFamily: "var(--ff-mono)",
          color: "#86efac",
          lineHeight: "1.8",
        }}
      >
        ✦ Rule: components/ never imports from services/ directly — always
        through a hook in hooks/
        <br />
        ✦ Rule: services/ never imports React — pure TS functions only
        <br />✦ Rule: context/ is used for ≤3 pieces of truly global state
        (auth, theme, locale)
      </div>
    </div>
  );
};

export default Panel3;
