import { useState, createContext } from "react";
import { ReactDOM } from "react";

export const LayoutContext = createContext();

export default function LayoutProvider({ children }) {
    const [isScrolled, setIsScrolled] = useState("");
    const [sideOpened, setSideOpened] = useState("");
    return (
    <LayoutContext.Provider
        value={{
            isScrolled,
            setIsScrolled,
            sideOpened,
            setSideOpened,
        }}
    >
      {children}
    </LayoutContext.Provider>
  );
}