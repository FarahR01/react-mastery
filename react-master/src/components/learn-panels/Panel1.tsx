interface IonMetric {
  icon: string;
  era: string;
  name: string;
  ar: string;
  color: string;
  borderColor: string;
  badge: string;
  bgColor: string;
}

const EvolutionTimeline = () => {
  const timelineNodes: IonMetric[] = [
    {
      icon: "🍝",
      era: "1995 – 2012",
      name: "Vanilla / jQuery",
      ar: "خام",
      color: "#94a3b8",
      borderColor: "rgba(100,116,139,0.35)",
      bgColor: "rgba(100,116,139,0.12)",
      badge: "Spaghetti DOM",
    },
    {
      icon: "🏗",
      era: "2013 – 2018",
      name: "Class Components",
      ar: "كود متكرر",
      color: "#f59e0b",
      borderColor: "rgba(245,158,11,0.35)",
      bgColor: "rgba(245,158,11,0.12)",
      badge: "Boilerplate tangle",
    },
    {
      icon: "🪝",
      era: "2019 – 2022",
      name: "React Hooks",
      ar: "خطافات",
      color: "#3b82f6",
      borderColor: "rgba(59,130,246,0.4)",
      bgColor: "rgba(59,130,246,0.12)",
      badge: "Reusable capsules",
    },
    {
      icon: "🏢",
      era: "2023 – Now",
      name: "Next.js / RSC",
      ar: "إطار العمل",
      color: "#22c55e",
      borderColor: "rgba(34,197,94,0.4)",
      bgColor: "rgba(34,197,94,0.12)",
      badge: "Full-stack blocks",
    },
  ];

  return (
    <div className="timeline-wrap">
      <div className="timeline-track">
        {timelineNodes.map((node, idx) => (
          <div key={idx} className="t-node">
            <div
              className="t-icon"
              style={{
                background: node.bgColor,
                borderColor: node.borderColor,
                color: node.color,
              }}
            >
              {node.icon}
              <div className="t-dot" style={{ background: node.color }}></div>
            </div>
            <div className="t-era">{node.era}</div>
            <div className="t-name" style={{ color: node.color }}>
              {node.name}
            </div>
            <div
              className="t-ar"
              style={{ color: node.ar === "خام" ? "#ef4444" : "inherit" }}
            >
              {node.ar}
            </div>
            <div
              style={{
                marginTop: "6px",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "9px",
                fontFamily: "var(--ff-mono)",
                color: node.color,
                textAlign: "center",
                background: node.bgColor,
                border: `1px solid ${node.borderColor}`,
              }}
            >
              {node.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompetitiveMatrix = () => {
  const frameworks = [
    { name: "⚛ React / Next.js", color: "#3b82f6" },
    { name: "🟢 Vue / Nuxt", color: "#4ade80" },
    { name: "🔴 Angular", color: "#f472b6" },
  ];

  const metrics = [
    {
      label: "Performance",
      data: [92, 89, 76],
      gradients: [
        "linear-gradient(90deg,#1d4ed8,#3b82f6)",
        "linear-gradient(90deg,#16a34a,#4ade80)",
        "linear-gradient(90deg,#be185d,#f472b6)",
      ],
    },
    {
      label: "Learning Curve",
      data: [62, 40, 90],
      descriptions: [
        "Medium — Hooks Mental Model",
        "Low — Gentle SFC syntax",
        "High — TS, DI, Decorators",
      ],
      gradients: [
        "linear-gradient(90deg,#1d4ed8,#3b82f6)",
        "linear-gradient(90deg,#16a34a,#4ade80)",
        "linear-gradient(90deg,#be185d,#f472b6)",
      ],
    },
  ];

  return (
    <div className="matrix-wrap">
      <div className="matrix-head">
        <div className="mh-cell" style={{ color: "var(--muted)" }}>
          Metric
        </div>
        {frameworks.map((fw, idx) => (
          <div key={idx} className="mh-cell r" style={{ color: fw.color }}>
            {fw.name}
          </div>
        ))}
      </div>

      {metrics.map((metric, metricIdx) => (
        <div key={metricIdx} className="matrix-row">
          <div className="mc-label">{metric.label}</div>
          {metric.data.map((value, idx) => (
            <div key={idx} className="mc-bar-wrap">
              <div className="mc-bar">
                <div
                  className="mc-bar-fill"
                  style={{
                    width: `${value}%`,
                    background: metric.gradients[idx],
                  }}
                ></div>
              </div>
              <div className="mc-val">
                {metric.descriptions
                  ? metric.descriptions[idx]
                  : `${value} / 100`}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Panel1: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel-label">Panel 01 / 04</div>
      <div className="panel-title">Evolutionary Audit & Competitive Matrix</div>
      <div className="panel-sub">
        تطور React — The Business Case for Modern React
      </div>
      <div
        className="divider"
        style={{
          background: "linear-gradient(90deg, var(--blue), var(--purple))",
        }}
      ></div>

      <div
        style={{
          fontSize: "11px",
          fontFamily: "var(--ff-mono)",
          color: "var(--muted)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        تطور → Evolution Arc
      </div>
      <EvolutionTimeline />

      <div
        style={{
          fontSize: "11px",
          fontFamily: "var(--ff-mono)",
          color: "var(--muted)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: "1.5rem 0 10px",
        }}
      >
        Competitive Intelligence Matrix
      </div>
      <CompetitiveMatrix />

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: "6px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#60a5fa",
          }}
        >
          تطور = Evolution
        </span>
        <span
          style={{
            padding: "4px 10px",
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: "6px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#fbbf24",
          }}
        >
          كود متكرر = Boilerplate
        </span>
        <span
          style={{
            padding: "4px 10px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "6px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#4ade80",
          }}
        >
          خطافات = Hooks
        </span>
        <span
          style={{
            padding: "4px 10px",
            background: "rgba(148,163,184,0.1)",
            border: "1px solid rgba(148,163,184,0.2)",
            borderRadius: "6px",
            fontSize: "9px",
            fontFamily: "var(--ff-mono)",
            color: "#94a3b8",
          }}
        >
          خام = Vanilla
        </span>
      </div>
    </div>
  );
};

export default Panel1;
