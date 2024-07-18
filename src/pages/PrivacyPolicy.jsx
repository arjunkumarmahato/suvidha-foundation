import styled from "styled-components";
import PageCover from "../components/PageCover";

const StyledPrivacyPolicy = styled.div`
  line-height: 1.5;
  section {
    padding: 12px 8px;
  }
  ul {
    list-style: disc;
    padding-left: 14px;
  }
  @media (min-width: 720px) {
    section {
      padding: 16px 32px;
    }
  }
`;

function PrivacyPolicy() {
  return (
    <StyledPrivacyPolicy>
      <PageCover title="Privacy Policy" image="/images/gallery.jpg" />
      <section>
        <p>
          We at Suvidha Mahila Mandal respect your concerns about privacy and
          value the relationship we have with you. We are committed to the
          ethical collection, retention and use of information that you provide
          to us about yourself (“Personal Information”) on our website. This
          policy describes the types of personal information we collect, how we
          may use that information and with whom we may share it when you visit
          our site or use our services (collectively the “Services”). Our
          Privacy Policy also describes the measures we take to protect the
          security of the information. In addition, we describe the choices you
          can make about how we use the information you provide to us. We also
          tell you how you can reach us to update your contact information,
          remove your name from our mailing lists, or answer any questions you
          may have about our privacy practices. We maintain full confidentiality
          of all donors and contributors on our mailing and email lists, which
          will neither be sold to nor exchanged with any other organization or
          commercial enterprise, and we honour donor&apos;s opt-out choices in
          our mail, email, phone and other solicitations.
        </p>
        <h2>How Do We Use Your Information?</h2>
        <p>
          Suvidha Mahila Mandal uses personally identifiable information you
          provide about yourself:
        </p>
        <ul>
          <li>To process your donation</li>
          <li>To send you a receipt for your donation.</li>
          <li>
            To send you a thank you note for your donation or volunteering.
          </li>
          <li>
            To respond to your questions or comments about Suvidha Mahila
            Mandal.
          </li>
          <li>
            To send you additional information about Suvidha Mahila Mandal
            Projects.
          </li>
          <li>
            To send you invitations for upcoming events that may interest you
          </li>
        </ul>
        <h2>Email Communications</h2>
        <p>
          When you ask us to send you email such as a free email newsletter, you
          may provide us with certain information such as your email address so
          we can fulfil your request. You may choose to provide additional
          information as well, such as your postal address and phone number.
        </p>
        <h2>Donations</h2>
        <p>
          When you make a donation through our Site, we may ask you to submit
          certain personal information (such as credit card information) so we
          can process your donation. We also maintain your contact information
          in our records so we can contact you to provide ChildFund India&apos;s
          program information and information on additional giving
          opportunities.
        </p>
        <h2>Is Donation Secure?</h2>
        <p>
          Absolutely. The security and confidentiality of your information is
          our highest priority. We use industry-standard SSL (secure socket
          layer) technology to protect your information and provide a safe and
          secure environment for online donations
        </p>
        <h2>Credit / Debit Card Security</h2>
        <p>
          Suvidha Mahila Mandal is grateful for the donations that help us
          continue our valuable work. When you donate to Suvidha Mahila Mandal
          online, your card information is secured; your credit card number is
          used only for that particular transaction and is not stored. If you
          allow us to store your credit card or bank information for future use
          such as recurring donation, such information will be stored by the
          payment services financial institution. Suvidha Mahila Mandal only
          uses financial institution that adheres to the industry standards for
          storing such information.
        </p>
        <h2>Disclosure Of Data</h2>
        <p>
          Suvidha Mahila Mandal may disclose your Personal Data in the good
          faith belief that such action is necessary to:
        </p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>
            To protect and defend the rights or property of Suvidha Mahila
            Mandal
          </li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>
        <h2>Security Of Data</h2>
        <p>
          Suvidha Mahila Mandal has the necessary security mechanisms in place
          and only designated employees have access to your personal
          information. We maintain administrative, technical and physical
          safeguards to protect against unauthorized disclosure, use, alteration
          or destruction of the personal information in our possession. All
          online transactions are done on a secure server. When you provide
          credit card information to make a donation, we use the industry
          standard for Internet security ― Secure Socket Layer (SSL) technology
          ― to help protect the information you provide. This Internet
          encryption standard scrambles data as it travels from your computer to
          our server. Please note, however, that perfect security does not exist
          on the Internet. You&apos;ll know that you&apos;re in a secure area of
          our Site when a “lock” icon appears on your screen and the “http”
          portion of our URL address changes to “https.” The “s” stands for
          “secure.”
        </p>
        <h2>Updates to This Privacy Policy</h2>
        <p>
          We may change or update portions of this Privacy Policy at any time
          and without prior notice to you. Please check back from time to time
          so you are aware of any changes or updates to the Policy. You may
          reach out to us if you have any queries about any changes made to our
          practices.
        </p>
      </section>
    </StyledPrivacyPolicy>
  );
}

export default PrivacyPolicy;
