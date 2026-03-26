import { createContext } from "react";

export interface IAccordionContext {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

export const AccordionContext = createContext<IAccordionContext | null>(null);
