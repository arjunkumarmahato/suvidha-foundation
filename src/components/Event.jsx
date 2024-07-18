import styled from "styled-components";

const StyledEvent = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: white;
  overflow: hidden;
  img {
    width: 100%;
  }
  h3 {
    text-transform: uppercase;
    color: orange;
    padding: 16px 24px 0 24px;
  }
  p {
    padding: 16px 24px;
    line-height: 1.5;
  }
`;

function Event({ event }) {
  return (
    <StyledEvent>
      <img src={event.image} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </StyledEvent>
  );
}

export default Event;
