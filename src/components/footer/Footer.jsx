import styled from "styled-components";
import Headquarters from "./Headquarters";
import Certificates from "./Certificates";
import UsefulLinks from "./UsefulLinks";
import SocialMedia from "./SocialMedia";

const StyledFooter = styled.footer`
  background-color: #3d3d3d;
  color: white;
  line-height: 1.5;
  > div {
    padding: 0 16px;
    &:first-of-type {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    &:last-of-type {
      color: #c9c9c9;
      font-size: 0.8rem;
    }
  }
  h2,
  h3 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 1rem;
  }
  a {
    color: white;
  }
  @media (min-width: 720px) {
    > div:first-of-type {
      display: grid;
      gap: 16px;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
    > div:last-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (min-width: 960px) {
    > div {
      padding: 16px 32px;
      &:first-of-type {
        gap: 32px;
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <Headquarters />
        <Certificates />
        <UsefulLinks />
        <SocialMedia />
      </div>
      <div>
        <div>
          &copy; Suvidha Foundation
          <br />
          (Suvidha Mahila Mandal)
          {` ${new Date().getFullYear()}`}
        </div>
        <div>All Rights Reserved</div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
