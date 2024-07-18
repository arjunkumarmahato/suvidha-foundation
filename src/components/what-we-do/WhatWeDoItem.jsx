import styled from "styled-components";

const StyledWhatWeDoItem = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 120px;
  }
  h3 {
    text-transform: uppercase;
    font-size: 1rem;
    margin: 12px 0;
    line-height: 1;
    color: orange;
  }
  p {
    line-height: 1.5;
  }
`;

function WhatWeDoItem({ whatWeDoItem }) {
  return (
    <StyledWhatWeDoItem>
      <img src={whatWeDoItem.image} />
      <div>
        <h3>{whatWeDoItem.title}</h3>
        <p>{whatWeDoItem.description}</p>
      </div>
    </StyledWhatWeDoItem>
  );
}

export default WhatWeDoItem;
