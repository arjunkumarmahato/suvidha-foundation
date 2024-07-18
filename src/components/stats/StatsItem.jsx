import styled from "styled-components";

const StyledStatsItem = styled.div`
  width: 100%;
  padding: 32px 0;
  background-color: white;
  border-radius: 3px;
  text-align: center;
  > div {
    font-size: 4.5rem;
    font-weight: 600;
  }
  > span {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

function StatsItem({ stat }) {
  return (
    <StyledStatsItem>
      <div>{stat.value}+</div>
      <span>{stat.title}</span>
    </StyledStatsItem>
  );
}

export default StatsItem;
