export interface LessonMetadata {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: "fundamentals" | "patterns" | "state" | "advanced";
}

export const lessonsMetadata: LessonMetadata[] = [
  {
    id: 1,
    title: "Evolution Timeline",
    description: "React's journey from vanilla JS to modern frameworks",
    icon: "📚",
    color: "#8b5cf6",
    category: "fundamentals",
  },
  {
    id: 2,
    title: "Architecture Basics",
    description: "Component hierarchy and unidirectional data flow",
    icon: "🏗️",
    color: "#06b6d4",
    category: "fundamentals",
  },
  {
    id: 3,
    title: "Project Setup",
    description: "Tools, extensions, and project structure",
    icon: "⚡",
    color: "#10b981",
    category: "fundamentals",
  },
  {
    id: 4,
    title: "Best Practices",
    description: "Common patterns and anti-patterns",
    icon: "✨",
    color: "#f59e0b",
    category: "patterns",
  },
  {
    id: 5,
    title: "Insights Checklist",
    description: "Key React concepts and anti-patterns",
    icon: "🎯",
    color: "#ef4444",
    category: "patterns",
  },
  {
    id: 6,
    title: "Architecture Flow",
    description: "Component lifecycle and rendering flow",
    icon: "🔄",
    color: "#8b5cf6",
    category: "fundamentals",
  },
  {
    id: 7,
    title: "State Management",
    description: "Decision tree for choosing the right state tool",
    icon: "🎛️",
    color: "#06b6d4",
    category: "state",
  },
  {
    id: 8,
    title: "Four Primitives",
    description: "useState, useEffect, useContext, useRef explained",
    icon: "🪚",
    color: "#10b981",
    category: "advanced",
  },
  {
    id: 9,
    title: "React Query Cache",
    description: "Understanding cache lifecycle and invalidation",
    icon: "💾",
    color: "#f59e0b",
    category: "advanced",
  },
  {
    id: 10,
    title: "RQ Orchestration",
    description: "Advanced React Query features and patterns",
    icon: "🎼",
    color: "#ef4444",
    category: "advanced",
  },
  {
    id: 11,
    title: "Client vs Server State",
    description: "Understanding state ownership and tools",
    icon: "🌐",
    color: "#8b5cf6",
    category: "state",
  },
  {
    id: 12,
    title: "Render Props vs Hooks",
    description: "Pattern evolution and modern approaches",
    icon: "🎭",
    color: "#06b6d4",
    category: "patterns",
  },
  {
    id: 13,
    title: "Performance & Optimization",
    description: "Memoization, lazy loading, and optimization",
    icon: "⚡",
    color: "#10b981",
    category: "advanced",
  },
  {
    id: 14,
    title: "React Query (TanStack)",
    description: "Server state management with caching and synchronization",
    icon: "🎼",
    color: "#f59e0b",
    category: "advanced",
  },
];
