import { createContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
export const NavbarContext = createContext();
export const NavColorContext = createContext();

function NavContext({ children }) {
  const [NavbarState, setNavbarState] = useState(false);
  const [Navcolor, setNavcolor] = useState("white");

  const locate = useLocation().pathname;

  useEffect(() => {
    if (locate == "/projets" || locate == "/agence") {
      setNavcolor("black");
    } else {
      setNavcolor("white");
    }
  }, [locate]);

  return (
    <>
      <NavbarContext.Provider value={{ NavbarState, setNavbarState }}>
        <NavColorContext.Provider value={{ Navcolor, setNavcolor }}>
          {children}
        </NavColorContext.Provider>
      </NavbarContext.Provider>
    </>
  );
}

export default NavContext;
