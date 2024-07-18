import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import TestimonialItem from "./TestimonialItem";
import SectionHeading from "../SectionHeading";
import Section from "../Section";
import SectionTagline from "../SectionTagline";

const Container = styled.div`
  width: calc(100%);
  padding: 0 12px;
  position: relative;
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const testimonials = [
  {
    name: "Divina Malfoy",
    image: "/images/testimonials/1.jpg",
    description:
      "It was great experience to work in Suvidha Foundation, team work is very good. They conduct daily meetings to guide how to work which make our work more easy. So,overall it's amazing organization to learn.",
  },
  {
    name: "Aheri Ghosh",
    image: "/images/testimonials/2.jpg",
    description:
      "I'm glad to have worked with Suvidha Foundation because I am passionate about their message and what they do.",
  },
  {
    name: "Lekhashree H J",
    image: "/images/testimonials/3.jpg",
    description:
      "It was great experience working with the NGO. I learned to connect with the society and helped the underprivileged section of the society.",
  },
  {
    name: "Khushi Jain",
    image: "/images/testimonials/4.jpg",
    description: "Had great learning. Fruitful Experience",
  },
  {
    name: "Samrudhi Nawale",
    image: "/images/testimonials/5.jpg",
    description:
      "The experience here at Suvidha Foundation was wonderful. I learnt a lot. It was worth it.",
  },
  {
    name: "Ananya Tripathi",
    image: "/images/testimonials/6.jpg",
    description:
      "Regular meetings really helped in systematic learning as well as working",
  },
  {
    name: "Sanjana Tunk",
    image: "/images/testimonials/7.jpg",
    description: "It was entirely a new experience and gained a lot from it.",
  },
  {
    name: "Manya Sahni",
    image: "/images/testimonials/8.jpg",
    description:
      "Did the internship which was a bit different and unique from others.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start at the first original item
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 480) {
      setItemsPerPage(1);
    } else if (window.innerWidth < 720) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        carouselRef.current.style.transition = "none";
        setCurrentIndex(testimonials.length);
      } else if (currentIndex === testimonials.length + itemsPerPage) {
        carouselRef.current.style.transition = "none";
        setCurrentIndex(itemsPerPage);
      }
    };

    const carouselInner = carouselRef.current;
    carouselInner.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      carouselInner.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, itemsPerPage]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex - 1);
      carouselRef.current.style.transition = "transform 0.5s ease";
    }
  };

  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex + 1);
      carouselRef.current.style.transition = "transform 0.5s ease";
    }
  }, [currentIndex, isTransitioning]);

  const translateXValue = () => {
    return `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isTransitioning, goToNext]);

  return (
    <Section>
      <SectionHeading>Testimonials</SectionHeading>
      <SectionTagline>What People Say AboutUs</SectionTagline>
      <Container>
        <CarouselContainer>
          <CarouselInner
            ref={carouselRef}
            style={{ transform: translateXValue() }}
          >
            {testimonials.slice(-itemsPerPage).map((testimonial, index) => (
              <TestimonialItem
                key={`clone-start-${index}`}
                testimonial={testimonial}
              />
            ))}
            {testimonials.map((testimonial, index) => (
              <TestimonialItem key={index} testimonial={testimonial} />
            ))}
            {testimonials.slice(0, itemsPerPage).map((testimonial, index) => (
              <TestimonialItem
                key={`clone-end-${index}`}
                testimonial={testimonial}
              />
            ))}
          </CarouselInner>
        </CarouselContainer>
        <ButtonContainer>
          <Button onClick={goToPrevious}>❮</Button>
          <Button onClick={goToNext}>❯</Button>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Testimonials;
