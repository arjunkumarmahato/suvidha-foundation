import styled from "styled-components";
import PageCover from "../components/PageCover";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import SectionTagline from "../components/SectionTagline";
import Button from "../components/Button";

const TableContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #ffa6002f;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #fff5ea;
`;

const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  text-transform: uppercase;
`;

const TableCell = styled.td`
  padding: 12px 16px;
`;

const donors = [
  { name: "PATHIK RAMESH JUTHANI", amount: 10000 },
  { name: "RAHUL V JAIN", amount: 5000 },
  { name: "SANDEEP GUPTA", amount: 5000 },
  { name: "HITESH KANUBHAI PAGHADAL", amount: 21000 },
  { name: "YOGESH SURESH AROTE", amount: 5000 },
  { name: "CHETAN SAILESH MEHTA", amount: 2000 },
  { name: "RAJESH CONTRO TRADING COMPANY PVT. LTD", amount: 11000 },
  { name: "KADAVAKUTI SWARNA", amount: 10000 },
  { name: "RAMESHBHAI NARSINHBHAI CHAUDHARY", amount: 2500 },
  { name: "ATISH CHAKRABORTY", amount: 1000 },
  { name: "Mr. RUDRANATH BHATTACHARYA", amount: 1000 },
  { name: "JATIN SAHGAL", amount: 1500 },
  { name: "SHIBAJI DEY", amount: 500 },
  { name: "SHUBHAM RAISONI", amount: 2100 },
  { name: "JAY DELIWALA", amount: 8250 },
  { name: "DEVANG VORA", amount: 5000 },
  { name: "DIVYANSH SONI", amount: 2000 },
  { name: "KSHITISH KUMAR JANA", amount: 2000 },
  { name: "INDU SINGH", amount: 2000 },
  { name: "PUSHYAMITHRA SANTHANAM", amount: 5500 },
  { name: "SHRINIVAS DAKAPPAGARI", amount: 2000 },
  { name: "OMBIR SINGH(OM TEMPO SERVICE)", amount: 3000 },
  { name: "TANMAY PRABHUTENDOLKAR", amount: 2000 },
  { name: "D. V. RAJESHWARI DEVI", amount: 2000 },
  { name: "SUNNAM PADMA", amount: 2000 },
  { name: "Mr. SANJAY KUMAR SAXENA", amount: 2000 },
  { name: "PUSHPA", amount: 3000 },
  { name: "SHUBHASHEESH BAGCHI", amount: 4000 },
  { name: "REVTISUDHAKAR FUNDE", amount: 2100 },
  { name: "RAGHAV METALS TRADE PVT. LTD.", amount: 5000 },
  { name: "MAKARAND M PANDIT", amount: 2000 },
  { name: "SRI JAY DURGA NUTRI SOYA FOOD PRODUCTS", amount: 2000 },
  { name: "DVN ARUN KUMAR", amount: 2000 },
  { name: "DANNANA JANKI RAMANA", amount: 2000 },
  { name: "ANIL BHATT", amount: 2100 },
  { name: "ANJALI SHARAN", amount: 5000 },
  { name: "HARJINDER KAUR", amount: 6000 },
  { name: "YADUVANSHI ENTERPRISES", amount: 2000 },
  { name: "GEETA PODDAR", amount: 3000 },
  { name: "ASHOK SHIVHARE", amount: 2000 },
  { name: "RAJKUMAR BODWANE", amount: 2000 },
  { name: "MOHAMMAD ARSHAD", amount: 2000 },
  { name: "TADEPALLI RAMAKRISHNA", amount: 2100 },
  { name: "CHARULATA MHATRE", amount: 5000 },
  { name: "TAPAN SAMANTA", amount: 3000 },
  { name: "HENRY KASHYAP", amount: 3000 },
  { name: "USHA DEVI", amount: 3000 },
  { name: "ARJUN RAJU P", amount: 2000 },
  { name: "AMIT VERMA", amount: 2000 },
  { name: "MALEPATI NIRANJANA BABU", amount: 2000 },
  { name: "AMRITA TONK", amount: 2000 },
  { name: "VIKAS KSHIRSAGAR", amount: 2000 },
  { name: "ENTERMONDE POLYCOATEN LIMITED", amount: 12000 },
  { name: "ASHISH PATEL", amount: 5000 },
  { name: "KEYUR PATEL", amount: 2000 },
  { name: "PATEL VINUBHAI GORDHANBHAI", amount: 2000 },
  { name: "NILAM R PATEL", amount: 2000 },
  { name: "SUNEET KUMAR AWASTHI", amount: 2000 },
  { name: "NAGHMA ALTAF", amount: 2000 },
  { name: "PANKIT ALPESHKUMAR DESAI", amount: 2000 },
  { name: "SIDHRAJ SINGH", amount: 2000 },
  { name: "PRANAV", amount: 3000 },
  { name: "ANEES CASIM", amount: 3000 },
  { name: "SITARAMARAJU VUNDAMATLA", amount: 2000 },
  { name: "SATTI RAMA GANGA REDDY", amount: 2000 },
  { name: "AKASH H", amount: 2000 },
  { name: "NITHESH N", amount: 2000 },
  { name: "LAKSHMI PATIL", amount: 2000 },
  { name: "POOJA BL", amount: 3000 },
  { name: "GYAN PRAKASH", amount: 3001 },
  { name: "ADITYA PAWASKAR", amount: 5000 },
  { name: "SRINIVASAN VISHWAS", amount: 2000 },
  { name: "ANJANA BALAJI", amount: 2000 },
  { name: "NOOTHI VENKATESHAM", amount: 3000 },
  { name: "PRITHVIRAJ SARJERAO CHAVAN", amount: 10000 },
  { name: "RANDEEP KHARYAL", amount: 5000 },
  { name: "GONDU SREENIVASA RAO", amount: 2000 },
  { name: "SAJIDA SHAHNUM", amount: 3000 },
  { name: "AJAYKUMAR KALLAI", amount: 2000 },
  { name: "PRAKASH KADTAN", amount: 5000 },
  { name: "SNEHALATHA KANAKAGIRI", amount: 5000 },
  { name: "SRISTY RUNGATA", amount: 2000 },
  { name: "SAI TULASA D", amount: 3000 },
  { name: "NANDAMURI SOMASHEKAR RAO", amount: 5000 },
  { name: "ARYAN RAJPARA", amount: 3000 },
  { name: "ANSHU JAIN", amount: 3000 },
  { name: "NIKITA SAINI", amount: 2000 },
  { name: "ADITYA JAYASWAL", amount: 2000 },
  { name: "DR. NEELAM SHUKLA", amount: 2000 },
  { name: "JAYANTIBHAI SAVALIA", amount: 2000 },
  { name: "THANTLA CHINNAPAREDDY", amount: 2000 },
  { name: "ANNIE SHIBU", amount: 2000 },
  { name: "N SUBBAIH NAIDU", amount: 2000 },
  { name: "MALLIKARJUNA M", amount: 2000 },
  { name: "MICHEL ANDRADE", amount: 5000 },
  { name: "ASWIN UDAY BHATKAL", amount: 2000 },
  { name: "PRAKASH DEOCHAND WANKAR", amount: 3000 },
  { name: "SHUBHASHEESH BAGCHI", amount: 2000 },
  { name: "GURMEET SINGH", amount: 2000 },
  { name: "VANDANA AGARWAL", amount: 1000 },
  { name: "PARAMITA SARKAR", amount: 2000 },
  { name: "SUJATHA SIVASANKAR", amount: 5005 },
  { name: "AKSHAY MOURIA", amount: 2001 },
  { name: "PRASHANT KUTRE", amount: 2000 },
  { name: "ABBAS MURTAZA KARACHIWALA", amount: 10000 },
  { name: "RAJAN SURENDRA GANDHI", amount: 2000 },
  { name: "BHAKTI PATHIK SHAH ", amount: 4000 },
  { name: "SHUBHASHEESH BAGCHI", amount: 2000 },
  { name: "RAMESH CHANDRA SOLANKI", amount: 2000 },
  { name: "BAGWAN AJIM ISMAIL", amount: 3000 },
  { name: "SATISH M WADKAR ", amount: 3000 },
  { name: "ANANTA BHAYAN", amount: 3000 },
  { name: "NIRUPAMA PRADHAN", amount: 2010 },
  { name: "PAWAN DUTTA ", amount: 7000 },
  { name: "V. M. KHERUDKAR AND COMPANY", amount: 8000 },
  { name: "MILIND LAXMAN MUSALE", amount: 2000 },
  { name: "NEELAM KHEER", amount: 2200 },
  { name: "DATTATRAY KHASHABA BISURKAR", amount: 2000 },
  { name: "PAUL CHANDY", amount: 2000 },
  { name: "ZAINA MERAJ", amount: 5000 },
  { name: "MADHULIKA VERMA", amount: 2100 },
  { name: "L. RAVI KIRAN", amount: 3000 },
  { name: "AMITA PRAKASH PAREKH", amount: 2000 },
  { name: "RAMLAKHAN CHAURASIYA", amount: 2000 },
  { name: "VUTHPALA SAVITHA", amount: 2000 },
  { name: "SUMIT TYAGI", amount: 5000 },
  { name: "G. KURMA RAO", amount: 2000 },
  { name: "RAJESH BHANOT", amount: 3000 },
  { name: "SHUBHASHEESH BAGCHI", amount: 2000 },
  { name: "SVM SAINATH", amount: 2000 },
  { name: "VIJAY BRIJWASI", amount: 2000 },
  { name: "RADHIKA. R", amount: 2000 },
  { name: "TANMAY PRABHUTENDOLKAR", amount: 2000 },
  { name: "DURGADAS MANDAL", amount: 2000 },
  { name: "JYOTIRADITYA MISHRA", amount: 3000 },
  { name: "RUDATDEEP KAUR", amount: 2051 },
  { name: "UTTAM MANDAL", amount: 2000 },
  { name: "Dr. SULPHI N", amount: 2000 },
  { name: "HARVINDER SINGH", amount: 2000 },
  { name: "PRABAL BHATTACHARYA", amount: 2000 },
  { name: "T R ARAVAMUTHAN", amount: 3000 },
  { name: "SUDESH VATS", amount: 4000 },
  { name: "MADHU SRIVASTAVA", amount: 3500 },
];

function Donors() {
  return (
    <div>
      <PageCover title="Donors" image="/images/fundraising.jpg" />
      <Section>
        <SectionHeading>Meet Our Donors</SectionHeading>
        <SectionTagline>Thank You for Your Contribution</SectionTagline>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Amount</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {donors.map((donor, index) => (
                <TableRow key={index}>
                  <TableCell>{donor.name}</TableCell>
                  <TableCell>{donor.amount}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
        <Button to="/donation">Make a Donation</Button>
      </Section>
    </div>
  );
}

export default Donors;
