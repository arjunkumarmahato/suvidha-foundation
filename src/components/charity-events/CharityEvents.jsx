import styled from "styled-components";
import Event from "../Event";
import SectionHeading from "../SectionHeading";
import SectionTagline from "../SectionTagline";
import Section from "../Section";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const events = [
  {
    title: "Tree Plantation",
    image: "/images/charity-events/tree-plantation.jpg",
    description:
      "Join us in nurturing the Earth's embrace, one tree at a tim. Together, let's create a greener tomorrow and breathe life into our planet.",
  },
  {
    title: "Fundraising Events",
    image: "/images/charity-events/fundraising.jpg",
    description:
      "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.",
  },
];

function CharityEvents() {
  return (
    <Section>
      <SectionHeading>Our Charity Events</SectionHeading>
      <SectionTagline>
        Ce<i>l</i>ebrating Our Impact Together
      </SectionTagline>
      <Container>
        {events.map((event, i) => (
          <Event key={i} event={event} />
        ))}
      </Container>
      <Button to="/events">View All</Button>
    </Section>
  );
}

export default CharityEvents;
