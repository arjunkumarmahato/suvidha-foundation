import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUsefulLinks = styled.div`
  padding: 16px 0;
`;

function UsefulLinks() {
  return (
    <StyledUsefulLinks>
      <h2>Useful Links</h2>
      <ul>
        <li>
          <Link to="https://suvidhafoundationedutech.org/verify.php">
            <span>Verify Your Certificate</span>
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
        </li>
      </ul>
    </StyledUsefulLinks>
  );
}

export default UsefulLinks;
