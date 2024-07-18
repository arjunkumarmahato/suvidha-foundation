import styled from "styled-components";
import Section from "../Section";
import Button from "../Button";

const Container = styled.div`
  padding: 16px;
  background-color: #ffa6001c;
  width: 100%;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const Tagline = styled.p`
  font-family: "Instrument Serif", serif;
  font-size: 1.9rem;
  margin-bottom: 24px;
  @media (min-width: 720px) {
    font-size: 2.2rem;
  }
  @media (min-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  > p {
    font-size: 1.2rem;
    margin-bottom: 32px;
  }
`;

function Internship() {
  return (
    <Section>
      <Container>
        <Tagline>
          Seize the opportunity to gain invaluable experience and jumpstart your
          career with an internship that propels you towards success.
        </Tagline>
        <Content>
          <p>
            The Suvidha Foundation Internship Program is a unique opportunity
            for students and recent graduates to gain experience and contribute
            to the work of Suvidha Foundation. Along with undertaking tasks
            related to their specific skills, we encourage interns to develop a
            reputable professional portfolio.
          </p>
          <Button to="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">
            Apply for Internship
          </Button>
        </Content>
      </Container>
    </Section>
  );
}

export default Internship;
