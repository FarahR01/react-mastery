import { type ReactNode, useContext } from "react";
import { AccordionContext } from "../../context/AccordionContext";

export function AccordionContent({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const { openIndex } = context;

  if (openIndex !== index) return null;

  return <div className="accordion-content">{children}</div>;
}
