import styled from "styled-components";
import Event from "../components/Event";
import PageCover from "../components/PageCover";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectionTagline from "../components/SectionTagline";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
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
  {
    title: "Cloths Distribution",
    image: "/images/charity-events/cloths-distribution.jpg",
    description:
      "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event. ",
  },
  {
    title: "Women's Day",
    image: "/images/charity-events/womens-day.jpg",
    description:
      "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions. ",
  },
  {
    title: "Food Donation Initiatives by Our NGO",
    image: "/images/charity-events/food-donation.jpg",
    description:
      "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals. ",
  },
  {
    title: "Ensuring Happy and Healthy Animals through Feeding Programs",
    image: "/images/charity-events/animal-feeding.jpg",
    description:
      "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event. ",
  },
  {
    title: "Sanitary Pads Distribution",
    image: "/images/charity-events/sanitary-pads.jpg",
    description:
      "Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene. ",
  },
  {
    title: "Free Workshops",
    image: "/images/charity-events/free-workshop.jpg",
    description:
      "Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.",
  },
];

function Events() {
  return (
    <div>
      <PageCover title="Events" image="/images/events.jpg" />
      <Section>
        <SectionHeading>Our Charity Events</SectionHeading>
        <SectionTagline>Celebrating Our Impact Together</SectionTagline>
        <Container>
          {events.map((event, i) => (
            <Event key={i} event={event} />
          ))}
        </Container>
      </Section>
    </div>
  );
}

export default Events;
