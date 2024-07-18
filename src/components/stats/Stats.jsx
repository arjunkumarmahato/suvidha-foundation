import styled from "styled-components";
import StatsItem from "./StatsItem";
import Section from "../Section";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
  @media (min-width: 480px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const stats = [
  { title: "Countries", value: "15" },
  { title: "Volunteers", value: "3 L" },
  { title: "Trees Planted", value: "54 L" },
  { title: "Internship Goal", value: "1 Cr" },
];

function Stats() {
  return (
    <Section>
      <Container>
        {stats.map((stat, i) => (
          <StatsItem key={i} stat={stat} />
        ))}
      </Container>
    </Section>
  );
}

export default Stats;
