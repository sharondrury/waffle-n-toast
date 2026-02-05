import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Services/Service";
import Faq from "./Components/Faq/Faq";
import Showcase from "./Components/Showcase/Showcase";

const Home = () => {
    return (
      <div>
        {/* <Link to="/contact">Contact Us</Link> */}
        <Nav />
        <Hero />
        <Service />
        <Faq />
        <Showcase />
      </div>
    );
}

export default Home;