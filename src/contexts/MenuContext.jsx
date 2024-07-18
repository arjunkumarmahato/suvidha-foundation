import { createContext, useState } from "react";

export const MenuContext = createContext();

function MenuContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
