import styled from "styled-components";
import Main from "../components/main/Main";
import About from "../components/about/About";
import WhatWeDo from "../components/what-we-do/WhatWeDo";
import Stats from "../components/stats/Stats";
import OurTeam from "../components/meet-our-team/OurTeam";
import CollaborativeInitiatives from "../components/collaborative-initiatives/CollaborativeInitiatives";
import Internship from "../components/internship/Internship";
import CharityEvents from "../components/charity-events/CharityEvents";
import Testimonials from "../components/testimonials/Testimonials";

const StyledHome = styled.div`
  width: 100%;
`;

function Home() {
  return (
    <StyledHome>
      <Main />
      <About />
      <WhatWeDo />
      <Internship />
      <Stats />
      <CharityEvents />
      <OurTeam />
      <CollaborativeInitiatives />
      <Testimonials />
    </StyledHome>
  );
}

export default Home;
