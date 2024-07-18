import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavCTA from "./NavCTA";
import { useScroll } from "../../hooks/useScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StyledNavMenu = styled.div`
  display: none;
  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    gap: 40px;
    a.active {
      color: white;
      font-weight: 500;
    }
  }
`;

function NavMenu() {
  const { scrollY } = useScroll();

  useGSAP(() => {
    if (scrollY > 10) {
      gsap.to(".nav-menu span", {
        color: "black",
        duration: 0,
      });
    } else {
      gsap.to(".nav-menu span", {
        color: "white",
        duration: 0,
      });
    }
  }, [scrollY]);

  return (
    <StyledNavMenu className="nav-menu">
      <NavLink to="/events">
        <span>Events</span>
      </NavLink>
      <NavLink to="/gallery">
        <span>Gallery</span>
      </NavLink>
      <NavLink to="/donors">
        <span>Our Donors</span>
      </NavLink>
      <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">
        <span>Internships</span>
      </NavLink>
      <NavCTA />
    </StyledNavMenu>
  );
}

export default NavMenu;
