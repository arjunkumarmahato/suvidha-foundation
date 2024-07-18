import styled from "styled-components";
import Member from "./Member";
import SectionHeading from "../SectionHeading";
import Section from "../Section";
import SectionTagline from "../SectionTagline";

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
  @media (min-width: 480px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    padding: 8px 32px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const team = [
  {
    name: "Shobha Motghare",
    photo: "/images/our-team/shobha-motghare.jpeg",
    role: "Secretary",
    linkedin: "https://www.linkedin.com/in/shobha-motghare-0a6a57238/",
  },
  {
    name: "Payal Badhe",
    photo: "/images/our-team/payal-badhe.jpg",
    role: "President",
    linkedin: "https://www.linkedin.com/in/payal-badhe-531756aa/",
  },
  {
    name: "Bharti Shendre",
    photo: "/images/our-team/bharti-shendre.png",
    role: "Treasurer",
  },
  {
    name: "Nilima Kalambe",
    photo: "/images/our-team/nilima-kalambe.jpg",
    role: "Advisor",
  },
];

function OurTeam() {
  return (
    <Section>
      <SectionHeading>Our Team</SectionHeading>
      <SectionTagline>People Behind Our Charity Activities</SectionTagline>
      <Container>
        {team.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </Container>
    </Section>
  );
}

export default OurTeam;
