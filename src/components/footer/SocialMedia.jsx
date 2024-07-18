import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSocialMedia = styled.div`
  text-transform: uppercase;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

function SocialMedia() {
  return (
    <StyledSocialMedia>
      <h2>Social Media</h2>
      <Link to="https://www.facebook.com/suvidhamahilamandal/">
        <span>Facebook</span>
      </Link>
      <Link to="https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D">
        <span>Instagram</span>
      </Link>
      <Link to="https://www.linkedin.com/company/suvidha-foundation/mycompany/">
        <span>Linkedin</span>
      </Link>
    </StyledSocialMedia>
  );
}

export default SocialMedia;
