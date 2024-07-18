import styled from "styled-components";
import WhatWeDoItem from "./WhatWeDoItem";
import SectionHeading from "../SectionHeading";
import SectionTagline from "../SectionTagline";
import Section from "../Section";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr;
  gap: 8px;
  @media (min-width: 720px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const whatWeDo = [
  {
    image: "/images/what-we-do/healthy-food.avif",
    title: "Healthy Food",
    description:
      "By focusing on health food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.",
  },
  {
    image: "/images/what-we-do/social-awareness.jpg",
    title: "Social Awareness",
    description:
      "We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.",
  },
  {
    image: "/images/what-we-do/tree-plantation.jpg",
    title: "Tree Plantation",
    description:
      "Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.",
  },
  {
    image: "/images/what-we-do/healthcare.avif",
    title: "Health Care",
    description:
      "We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.",
  },
  {
    image: "/images/what-we-do/primary-education.jpg",
    title: "Primary Education",
    description:
      "By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.",
  },
  {
    image: "/images/what-we-do/social-care.avif",
    title: "Social Care",
    description:
      "Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals ",
  },
];

function WhatWeDo() {
  return (
    <Section>
      <SectionHeading>What We Do</SectionHeading>
      <SectionTagline>
        Causes <i>f</i>or a Sustainable Future
      </SectionTagline>
      <Container>
        {whatWeDo.map((w, i) => (
          <WhatWeDoItem key={i} whatWeDoItem={w} />
        ))}
      </Container>
    </Section>
  );
}

export default WhatWeDo;
