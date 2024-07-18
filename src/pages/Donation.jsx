import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import PageCover from "../components/PageCover";
import Section from "../components/Section";
import SectionTagline from "../components/SectionTagline";

const Container = styled.div`
  width: 100%;
  padding: 32px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const Details = styled.div`
  line-height: 1.5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`;
const QR = styled.img`
  border-radius: 3px;
`;

function Donation() {
  return (
    <div>
      <PageCover title="Help Us" image="/images/help-us.jpg" />
      <Section>
        <SectionHeading>Make a Donation</SectionHeading>
        <SectionTagline>
          Every Contribution Brings Us Closer to Our Goals
        </SectionTagline>
        <Container>
          <Details>
            <h3>
              Account Details
              <br />
              (For Indian Donors)
            </h3>
            <p>
              <b>Bank Of Baroda</b>
            </p>
            <p>
              <b>City:</b> Nagpur
            </p>
            <p>
              <b>Contact No:</b> +91-8010996763
            </p>
            <p>
              <b>Account Name:</b> Suvidha Mahila Mandal
            </p>
            <p>
              <b>Suvidha Account No:</b> 97840100027609
            </p>
            <p>
              <b>IFSC Code:</b> BARB0DBKPAR
            </p>
          </Details>
          <QR src="/images/QR.jpeg" />
        </Container>
      </Section>
    </div>
  );
}

export default Donation;
