import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#4f46e5",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}