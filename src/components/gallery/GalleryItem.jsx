import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledGalleryItem = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: white;
  overflow: hidden;
  img {
    width: 100%;
  }
  h3 {
    text-transform: uppercase;
    color: orange;
    padding: 16px 24px;
  }
`;

function GalleryItem({ galleryItem }) {
  return (
    <Link to={galleryItem.link}>
      <StyledGalleryItem>
        <img src={galleryItem.image} />
        <h3>{galleryItem.title}</h3>
      </StyledGalleryItem>
    </Link>
  );
}

export default GalleryItem;
