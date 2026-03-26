import React, { useState } from "react";

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: string;
}

export const Expandable: React.FC<ExpandableProps> = ({
  title,
  children,
  defaultOpen = false,
  icon = "▶",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: "1px solid rgba(51, 65, 85, 0.15)",
        borderRadius: "8px",
        margin: "16px 0",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px",
          background: isOpen
            ? "rgba(6, 182, 212, 0.08)"
            : "rgba(255, 255, 255, 0.5)",
          border: "none",
          borderBottom: isOpen ? "1px solid rgba(6, 182, 212, 0.2)" : "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "14px",
          fontWeight: "700",
          color: "#0f172a",
          fontFamily: '"Syne", sans-serif',
          transition: "all 0.2s ease",
        }}
      >
        <span
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
            minWidth: "16px",
          }}
        >
          {icon}
        </span>
        {title}
      </button>
      {isOpen && (
        <div
          style={{
            padding: "16px",
            background: "rgba(6, 182, 212, 0.02)",
            animation: "slideDown 0.2s ease",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const InteractiveCode: React.FC<{
  code: string;
  title?: string;
}> = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        border: "1px solid rgba(6, 182, 212, 0.2)",
        borderRadius: "8px",
        margin: "16px 0",
        overflow: "hidden",
        background: "#f0f4f8",
      }}
    >
      {title && (
        <div
          style={{
            padding: "12px 16px",
            background: "rgba(6, 182, 212, 0.1)",
            borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
            fontSize: "12px",
            fontWeight: "700",
            color: "#0d9488",
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          {title}
        </div>
      )}
      <div
        style={{
          padding: "16px",
          position: "relative",
        }}
      >
        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            padding: "6px 12px",
            background: copied ? "#22c55e" : "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "11px",
            fontWeight: "700",
            color: copied ? "white" : "#0d9488",
            transition: "all 0.2s ease",
            fontFamily: '"Syne", sans-serif',
          }}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
        <pre
          style={{
            margin: 0,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "13px",
            color: "#1e293b",
            overflow: "auto",
            lineHeight: "1.6",
            paddingRight: "100px",
          }}
        >
          {code}
        </pre>
      </div>
    </div>
  );
};

export const InfoBox: React.FC<{
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}> = ({ type = "info", title, children }) => {
  const styles = {
    info: {
      bg: "rgba(6, 182, 212, 0.1)",
      border: "rgba(6, 182, 212, 0.3)",
      color: "#0d9488",
      icon: "ℹ",
    },
    warning: {
      bg: "rgba(239, 68, 68, 0.1)",
      border: "rgba(239, 68, 68, 0.3)",
      color: "#b91c1c",
      icon: "⚠",
    },
    success: {
      bg: "rgba(34, 197, 94, 0.1)",
      border: "rgba(34, 197, 94, 0.3)",
      color: "#15803d",
      icon: "✓",
    },
    error: {
      bg: "rgba(239, 68, 68, 0.15)",
      border: "rgba(239, 68, 68, 0.4)",
      color: "#7f1d1d",
      icon: "✕",
    },
  };

  const style = styles[type];

  return (
    <div
      style={{
        background: style.bg,
        border: `2px solid ${style.border}`,
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        color: style.color,
      }}
    >
      {title && (
        <div
          style={{
            marginBottom: "8px",
            fontWeight: "700",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: '"Syne", sans-serif',
          }}
        >
          <span style={{ fontSize: "18px" }}>{style.icon}</span>
          {title}
        </div>
      )}
      <div style={{ fontSize: "13.5px", lineHeight: "1.6" }}>{children}</div>
    </div>
  );
};

export const QuickQuiz: React.FC<{
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}> = ({ question, options, correctIndex, explanation }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      style={{
        background: "rgba(6, 182, 212, 0.05)",
        border: "2px solid rgba(6, 182, 212, 0.2)",
        borderRadius: "8px",
        padding: "20px",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#0f172a",
          marginBottom: "16px",
          fontFamily: '"Syne", sans-serif',
        }}
      >
        🎯 Quick Check: {question}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              padding: "12px 16px",
              background:
                selected === idx
                  ? idx === correctIndex
                    ? "rgba(34, 197, 94, 0.15)"
                    : "rgba(239, 68, 68, 0.15)"
                  : "#fff",
              border: `2px solid ${
                selected === idx
                  ? idx === correctIndex
                    ? "#22c55e"
                    : "#ef4444"
                  : "rgba(51, 65, 85, 0.2)"
              }`,
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              color: "#475569",
              textAlign: "left",
              transition: "all 0.2s ease",
              fontFamily: '"Syne", sans-serif',
            }}
          >
            {selected === idx && (idx === correctIndex ? "✓ " : "✕ ")}
            {option}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 14px",
            background:
              selected === correctIndex
                ? "rgba(34, 197, 94, 0.1)"
                : "rgba(239, 68, 68, 0.1)",
            borderLeft: `4px solid ${
              selected === correctIndex ? "#22c55e" : "#ef4444"
            }`,
            borderRadius: "4px",
            fontSize: "13px",
            color: selected === correctIndex ? "#15803d" : "#7f1d1d",
            fontWeight: "600",
          }}
        >
          {selected === correctIndex ? "✓ Correct! " : "✕ Not quite. "}
          {explanation}
        </div>
      )}
    </div>
  );
};

export const KeyTakeaway: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      background: "rgba(168, 85, 247, 0.08)",
      border: "2px solid rgba(168, 85, 247, 0.3)",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px 0",
      fontSize: "13px",
      fontWeight: "600",
      color: "#6d28d9",
      lineHeight: "1.6",
    }}
  >
    ⭐ {children}
  </div>
);

// Add CSS for animations
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}
