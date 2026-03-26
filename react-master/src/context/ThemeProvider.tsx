// import { createContext, useState, useMemo, useContext } from "react";

// const ThemeContext = createContext(null);

// function ThemeProvider({ children }) {
//   const [fancyMode, setFancyMode] = useState(true);

//   const value = useMemo(
//     () => ({ fancyMode, setFancyMode }),
//     [fancyMode]
//   );

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
// }
// function useThemeMode() {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error("useThemeMode must be used inside ThemeProvider");
//   return ctx;
// }