import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (min-width: 720px) {
    padding: 16px 32px;
    gap: 16px;
  }
`;

export default Section;
