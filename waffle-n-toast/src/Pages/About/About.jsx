import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import './About.scss';

const About = () => {
    return (
        <>
            <Nav />
            <div className='about-page-container'>
                <h1>About Page</h1>
                <p>This is the about page of Waffle n Toast.</p>
            </div>
            <Footer />
        </>
    );
}

export default About;