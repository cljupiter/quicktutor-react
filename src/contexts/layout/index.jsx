import { useState, createContext } from "react";
import { ReactDOM } from "react";

export const LayoutContext = createContext();

export default function LayoutProvider({ children }) {
    const [isScrolled, setIsScrolled] = useState("");
    return (
    <LayoutContext.Provider
        value={{
            isScrolled,
            setIsScrolled,
        }}
    >
      {children}
    </LayoutContext.Provider>
  );
}