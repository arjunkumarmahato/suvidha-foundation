import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StyledNavCTA = styled.div`
  display: flex;
  gap: 8px;
  button {
    font-size: 1rem;
    color: white;
    font-weight: 500;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    border: 2px solid white;
  }
  a:last-of-type {
    button {
      background-color: white;
      color: orange;
    }
  }
`;

function NavCTA() {
  const { scrollY } = useScroll();

  const tl = gsap.timeline();

  useGSAP(() => {
    if (scrollY > 10) {
      tl.to(".nav-cta button", {
        border: "2px solid orange",
        color: "orange",
        duration: 0,
      }).to(".nav-cta a:last-of-type button", {
        backgroundColor: "orange",
        color: "white",
        duration: 0,
      });
    } else {
      tl.to(".nav-cta button", {
        border: "2px solid white",
        color: "white",
        duration: 0,
      }).to(".nav-cta a:last-of-type button", {
        backgroundColor: "white",
        color: "orange",
        duration: 0,
      });
    }
  }, [scrollY]);
  return (
    <StyledNavCTA className="nav-cta">
      <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform">
        <button>Contact</button>
      </NavLink>
      <NavLink to="/donation">
        <button>Help Us</button>
      </NavLink>
    </StyledNavCTA>
  );
}

export default NavCTA;
