import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Services/Service";
import Faq from "./Components/Faq/Faq";
import Showcase from "./Components/Showcase/Showcase";
import ClientList from "./Components/ClientList/ClientList";
import ScrollReveal from "./Components/ScrollReveal/ScrollReveal";
import Footer from "../../Components/Footer/Footer";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
      <div>
        {/* <Link to="/contact">Contact Us</Link> */}
        <Nav />
        <Hero />
        <Service />
        <Faq />
        <Showcase />
        <ClientList />
        <Contact />
        <Footer />
        {/* <ScrollReveal /> */}
      </div>
    );
}

export default Home;