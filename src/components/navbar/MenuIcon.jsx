import { useContext } from "react";
import styled from "styled-components";

import { MenuContext } from "../../contexts/MenuContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useScroll } from "../../hooks/useScroll";

const StyledMenuIcon = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    position: absolute;
    height: 2px;
    width: 28px;
    background-color: white;
    transition: all ease-out 0.3s;
  }
  &.open span {
    &:first-of-type {
      transform: translateY(-3px);
    }
    &:last-of-type {
      transform: translateY(3px);
    }
  }
  &.close span {
    &:first-of-type {
      transform: translateY(0) rotate(45deg);
    }
    &:last-of-type {
      transform: translateY(0) rotate(-45deg);
    }
  }
  @media (min-width: 960px) {
    display: none;
  }
`;

function MenuIcon() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { scrollY } = useScroll();

  function handleClick() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  useGSAP(() => {
    if (scrollY > 10 || isMenuOpen) {
      gsap.to(".menu-icon span", {
        backgroundColor: "black",
        duration: 0,
      });
    } else {
      gsap.to(".menu-icon span", {
        backgroundColor: "white",
        duration: 0,
      });
    }
  }, [scrollY, isMenuOpen]);

  return (
    <StyledMenuIcon
      className={`menu-icon ${isMenuOpen ? "close" : "open"}`}
      onClick={handleClick}
    >
      <span />
      <span />
    </StyledMenuIcon>
  );
}

export default MenuIcon;
