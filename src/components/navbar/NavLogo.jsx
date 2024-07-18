import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  > img {
    height: 40px;
  }
  > div {
    text-transform: uppercase;
    font-family: "Beaufort Regular";
    font-size: 0.7rem;
    font-weight: 600;
    > div:last-of-type {
      font-family: "Figtree";
      font-size: 0.6rem;
      font-weight: 500;
    }
  }
  @media (max-width: 300px) {
    div {
      display: none;
    }
  }
`;

function NavLogo() {
  const logoRef = useRef();
  const { scrollY } = useScroll();

  useGSAP(() => {
    const logoEl = logoRef.current;

    if (scrollY > 10) {
      gsap.to(logoEl, {
        color: "black",
        duration: 0,
      });
    } else {
      gsap.to(logoEl, {
        color: "white",
        duration: 0,
      });
    }
  }, [scrollY]);

  return (
    <NavLink to="/">
      <Logo ref={logoRef}>
        <img src="/images/logo.png" />
        <div>
          <div>Suvidha Foundation</div>
          <div>Suvidha Mahila Mandal</div>
          <div>Serving Society Since 1995</div>
        </div>
      </Logo>
    </NavLink>
  );
}

export default NavLogo;
