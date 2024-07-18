import { useEffect, useState } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  position: relative;
  padding-top: 80px;
  padding-bottom: 8px;
  @media (min-width: 960px) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Tagline = styled.blockquote`
  color: white;
  font-family: "Instrument Serif", serif;
  font-size: 8.5vw;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.35;
  text-align: center;
  @media (min-width: 960px) {
    font-size: 5.1rem;
  }
`;

const Cover = styled.div`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  > div {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const CTA = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  button {
    height: 44px;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    padding: 0 2em;
    border-radius: 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
  }
  a > button {
    background-color: white;
    color: orange;
  }
`;

const slides = [
  {
    src: "/images/slide-1.jpg",
    title: "Empowering Communities Through Education Sustainability",
  },
  { src: "/images/slide-2.jpg", title: "77th Independence Day Celebration" },
  { src: "/images/slide-3.jpg", title: "Cultivating a Greener Planet" },
  {
    src: "/images/slide-4.jpg",
    title: "Transforming Lives with Love and Care",
  },
  { src: "/images/slide-5.jpg", title: "Get Your Donations Tax Exempted" },
];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((i) => (i + 1) % slides.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <StyledMain>
      <Cover>
        <img src={slides[currentIndex].src} alt={slides[currentIndex].title} />
        <div />
      </Cover>
      <Tagline>
        Empower<i>i</i>ng
        <br />
        Communiti<i>e</i>s Thr<i>o</i>ugh
        <br />
        Educ<i>a</i>tion <i>&amp;</i> Sustainibi<i>l</i>ity
      </Tagline>
      <CTA>
        <Link to="/donation">
          <button>Donate</button>
        </Link>
        <button>
          <span>Watch</span>
          <HiMiniArrowUpRight size="24px" />
        </button>
      </CTA>
    </StyledMain>
  );
}

export default Main;
