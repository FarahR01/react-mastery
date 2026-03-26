import { useState, type MouseEvent } from "react";

// =========================
// Custom Hook Alternative
// =========================
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const bind = {
    onMouseMove: (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPosition({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      });
    },
  };

  return { position, bind };
}

export default useMousePosition;
