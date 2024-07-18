import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../contexts/MenuContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

const StyledMenu = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  overflow: hidden;
  padding: 0 0;
  background-color: white;
  text-align: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: black;
  }
  button {
    padding: 0.9em 1.2em 0.7em 1.2em;
    border: 2px solid orange;
    border-radius: 2em;
    color: orange;
    font-family: "Beaufort Regular";
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .menu-item:last-of-type {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

function Menu() {
  const { isMenuOpen } = useContext(MenuContext);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to(".menu", { height: "100vh", padding: "100px 8px" }).to(
        ".menu-item",
        { opacity: 1, stagger: 0.05, ease: "power1.inOut" }
      );
    } else {
      tl.to(".menu-item", { opacity: 0, stagger: -0.05 }).to(".menu", {
        height: 0,
        padding: "0 0",
      });
    }
  }, [isMenuOpen]);
  return (
    <StyledMenu className="menu">
      <div className="menu-item">
        <NavLink to="/events">Events</NavLink>
      </div>
      <div className="menu-item">
        <NavLink to="/gallery">Gallery</NavLink>
      </div>
      <div className="menu-item">
        <NavLink to="/our-donors">Our Donors</NavLink>
      </div>
      <div className="menu-item">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="menu-item">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">
          Internships
        </Link>
      </div>
      <div className="menu-item">
        <NavLink to="/help-us">Help Us</NavLink>
      </div>
      <div className="menu-item">
        <Link to="https://www.facebook.com/suvidhamahilamandal/">
          <RiFacebookFill size="24px" />
        </Link>
        <Link to="https://www.linkedin.com/company/suvidha-foundation/mycompany/">
          <RiLinkedinFill size="24px" />
        </Link>
        <Link to="https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D">
          <RiInstagramLine size="24px" />
        </Link>
      </div>
    </StyledMenu>
  );
}

export default Menu;
