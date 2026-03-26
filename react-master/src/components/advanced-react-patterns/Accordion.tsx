import { type ReactNode, useState } from "react";
import { AccordionContext } from "../../context/AccordionContext";

//Parent Component
export function Accordion({ children }: { children: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      {children}
    </AccordionContext.Provider>
  );
}
