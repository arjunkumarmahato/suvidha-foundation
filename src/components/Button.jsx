import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 44px;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0 2em;
  border-radius: 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #ffa6001c;
  color: orange;
`;

function Button({ to, children }) {
  return (
    <Link to={to}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
}

export default Button;
