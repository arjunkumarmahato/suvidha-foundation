import styled from "styled-components";

import SectionHeading from "../SectionHeading";
import SectionTagline from "../SectionTagline";
import Section from "../Section";

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 8px;
  img {
    width: 100%;
    border-radius: 3px;
  }
  @media (min-width: 480px) {
    padding: 8px 32px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const collaborativeInitiative = [
  { image: "/images/collaborative-initiatives/collab-1.jpg" },
  { image: "/images/collaborative-initiatives/collab-2.jpg" },
  { image: "/images/collaborative-initiatives/collab-3.jpg" },
];

function CollaborativeInitiatives() {
  return (
    <Section>
      <SectionHeading>OUR COLLABORATIVE INITIATIVES</SectionHeading>
      <SectionTagline>
        Empower<i>i</i>ng Ch<i>a</i>nges Together
      </SectionTagline>
      <Container>
        {collaborativeInitiative.map((collab, i) => (
          <img key={i} src={collab.image} />
        ))}
      </Container>
    </Section>
  );
}

export default CollaborativeInitiatives;
