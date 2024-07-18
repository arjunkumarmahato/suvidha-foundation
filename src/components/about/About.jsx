import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import Section from "../Section";
import Button from "../Button";

const Container = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

const Content = styled.div`
  padding: 0 8px;
  padding-bottom: 16px;
  > p {
    margin-bottom: 32px;
    font-size: 1.2rem;
    &:first-of-type {
      font-family: "Instrument Serif", serif;
      font-size: 1.9rem;
    }
  }
  @media (min-width: 720px) {
    > p:first-of-type {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 960px) {
    > p:first-of-type {
      font-size: 2.5rem;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`;

function About() {
  return (
    <Section>
      <SectionHeading>About Us</SectionHeading>
      <Container>
        <Content>
          <p>
            Suvidha Mahila Mandal is a non-profit organization committed to
            providing access to quality education and enhancing the quality of
            life for financially disadvantaged communities.
          </p>
          <p>
            We aim to equip young minds with the knowledge and skills needed to
            build a promising future. With a dedicated team of volunteers and
            partners, we have impacted thousands of lives across multiple
            countries.
          </p>
          <Button to="/donation">Make a Donation</Button>
        </Content>
        <Image src="/images/about.jpg" />
      </Container>
    </Section>
  );
}

export default About;
