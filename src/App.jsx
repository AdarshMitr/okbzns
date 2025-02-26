import Nav from "./Nav";

import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

import { Route, Routes } from "react-router";
import Marketing from "./Marketing";
import Seo from "./Seo";
import WebDev from "./WebDev";
import EnggSol from "./EnggSol";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketing-tools" element={<Marketing />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/engg-solutions" element={<EnggSol />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
