import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import MenuContextProvider from "./contexts/MenuContext";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Donors from "./pages/Donors";
import Donation from "./pages/Donation";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <Navbar />
        <Menu />
      </MenuContextProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
