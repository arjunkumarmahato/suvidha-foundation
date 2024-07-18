import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMember = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  > img {
    width: 100%;
    transition: all 0.2s ease-out;
  }
  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 108px;
    width: 100%;
    transform: translateY(36px);
    background-color: white;
    padding: 12px 8px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.35;
    transition: all 0.2s ease-out;
    > div {
      &:first-of-type {
        font-size: 1.1rem;
        font-weight: 600;
      }
      &:last-of-type {
        margin-bottom: 12px;
      }
    }
    > a {
      font-size: 0.9rem;
    }
  }
  &:hover {
    > img {
      scale: 1.02;
    }
    > div {
      transform: translateY(0);
    }
  }
`;

function Member({ member }) {
  return (
    <StyledMember>
      <img src={member.photo} />
      <div>
        <div>{member.name}</div>
        <div>{member.role}</div>
        {member.linkedin ? <Link to={member.linkedin}>Linkedin</Link> : null}
      </div>
    </StyledMember>
  );
}

export default Member;
