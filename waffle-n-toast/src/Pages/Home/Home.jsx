import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";

const Home = () => {
    return (
        <div>
            {/* <Link to="/contact">Contact Us</Link> */}
            <Nav />
            <Hero />
        </div>
    );
}

export default Home;