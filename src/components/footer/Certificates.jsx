import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCertificates = styled.div`
  padding: 16px 0;
`;

function Certificates() {
  return (
    <StyledCertificates>
      <h2>Certificates</h2>
      <ul>
        <li>
          <Link to="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf">
            <span>80G Certificate</span>
          </Link>
        </li>
        <li>
          <Link to="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf">
            <span>12A Certificate</span>
          </Link>
        </li>
        <li>
          <Link to="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF">
            <span>CSR Certificate</span>
          </Link>
        </li>
        <li>
          <Link to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf">
            <span>Suvidha Darpan Registration</span>
          </Link>
        </li>
        <li>
          <Link to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf">
            <span>Suvidha PAN Card</span>
          </Link>
        </li>
      </ul>
    </StyledCertificates>
  );
}

export default Certificates;
