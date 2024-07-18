import styled from "styled-components";

const StyledHeadquarters = styled.div`
  padding: 16px 0;
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

function Headquarters() {
  return (
    <StyledHeadquarters>
      <h2>Office Headquarters</h2>
      <ul>
        <li>
          <h4>Nagpur Headquarter</h4>
          <p>
            Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
            Nagpur, Maharashtra 441102
          </p>
        </li>
        <li>
          <h3>Hyderabad Headquarter</h3>
          <p>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
        </li>
      </ul>
    </StyledHeadquarters>
  );
}

export default Headquarters;
