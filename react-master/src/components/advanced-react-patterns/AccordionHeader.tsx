import { type ReactNode, useContext } from "react";
import { AccordionContext } from "../../context/AccordionContext";

export function AccordionHeader({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionHeader must be used within Accordion");
  }

  const { openIndex, setOpenIndex } = context;
  const isOpen = openIndex === index;

  return (
    <div
      className="accordion-header-content"
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {children}
    </div>
  );
}
