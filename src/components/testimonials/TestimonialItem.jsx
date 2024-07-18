import styled from "styled-components";

const StyledTestimonialItem = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 4px;

  @media (min-width: 480px) {
    flex: 0 0 50%;
  }

  @media (min-width: 720px) {
    flex: 0 0 33.3333%;
  }
`;

const TestimonialContent = styled.div`
  height: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  text-align: center;
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const TestimonialName = styled.h3`
  margin: 10px 0;
  font-weight: bold;
`;

const TestimonialDescription = styled.p`
  margin: 0;
`;

function TestimonialItem({ testimonial }) {
  return (
    <StyledTestimonialItem>
      <TestimonialContent>
        <TestimonialImage src={testimonial.image} alt={testimonial.name} />
        <TestimonialName>{testimonial.name}</TestimonialName>
        <TestimonialDescription>
          {testimonial.description}
        </TestimonialDescription>
      </TestimonialContent>
    </StyledTestimonialItem>
  );
}

export default TestimonialItem;
