import styled from "styled-components";
import GalleryItem from "../components/gallery/GalleryItem";
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
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const gallery = [
  {
    title: "Free Workshops",
    image: "/images/gallery/workshops.jpg",
    link: "https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk",
  },
  {
    title: "Books Distribution",
    image: "/images/gallery/books-distribution.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI",
  },
  {
    title: "Online Events",
    image: "/images/gallery/online-events.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
  },
  {
    title: "Cloths Distribution",
    image: "/images/gallery/cloths-distribution.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK",
  },
  {
    title: "Tree Plantation",
    image: "/images/gallery/tree-plantation.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw",
  },
  {
    title: "Free Education",
    image: "/images/gallery/free-education.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN",
  },
  {
    title: "Women's Day",
    image: "/images/gallery/womens-day.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK",
  },
  {
    title: "Food Distribution",
    image: "/images/gallery/food-distribution.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw",
  },
  {
    title: "Suvidha Events",
    image: "/images/gallery/suvidha-events.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
  },
  {
    title: "Empowering Women",
    image: "/images/gallery/sanitary-pad.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl",
  },
  {
    title: "Animal Feeding",
    image: "/images/gallery/animal-feeding.jpg",
    link: "https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB",
  },
];

function Gallery() {
  return (
    <div>
      <PageCover title="Gallery" image="/images/gallery.jpg" />
      <Section>
        <SectionHeading>Moments of Impact</SectionHeading>
        <SectionTagline>Capturing the Journey of Our NGO</SectionTagline>
        <Container>
          {gallery.map((galleryItem, i) => (
            <GalleryItem key={i} galleryItem={galleryItem} />
          ))}
        </Container>
      </Section>
    </div>
  );
}

export default Gallery;
