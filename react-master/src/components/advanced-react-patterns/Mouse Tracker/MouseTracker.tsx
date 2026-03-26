import { type ReactNode, useState } from "react";

type Position = {
  x: number;
  y: number;
};

type RenderFn = (position: Position) => ReactNode;

type MouseTrackerProps = {
  render?: RenderFn;
  children?: RenderFn;
};

export default function MouseTracker({ render, children }: MouseTrackerProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const renderFn = render || children;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
    >
      {renderFn ? renderFn(position) : null}
    </div>
  );
}
