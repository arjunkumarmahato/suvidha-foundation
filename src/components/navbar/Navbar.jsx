import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import MenuIcon from "./MenuIcon";
import { useScroll } from "../../hooks/useScroll";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const StyledNav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  padding: 0 8px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 960px) {
    padding: 0 32px;
    background-color: transparent;
  }
`;

function Navbar() {
  const menuRef = useRef();
  const { scrollY } = useScroll();

  useGSAP(() => {
    const menuEl = menuRef.current;

    if (scrollY > 10) {
      gsap.to(menuEl, {
        backgroundColor: "white",
        borderBottom: "1px solid #fff5ea",
        duration: 0,
      });
    } else {
      gsap.to(menuEl, {
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        duration: 0,
      });
    }
  }, [scrollY]);
  return (
    <StyledNav ref={menuRef}>
      <NavLogo />
      <NavMenu />
      <MenuIcon />
    </StyledNav>
  );
}

export default Navbar;
