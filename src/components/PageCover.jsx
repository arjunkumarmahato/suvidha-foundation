import styled from "styled-components";

const StyledPageCover = styled.div`
  height: 36vw;
  min-height: 300px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-family: "Instrument Serif", serif;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 720px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 960px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

function PageCover({ title, image }) {
  return (
    <StyledPageCover>
      <h1>{title}</h1>
      <img src={image} />
    </StyledPageCover>
  );
}

export default PageCover;
