import TypewriterClass from "typewriter-effect";
import "./Hero.scss";

const Hero = () => {

  return (
    <>
      <section className="hero-section">
        <div className="hero-main-text">
          <TypewriterClass
            options={{
              strings: [
                "Helping your customers see your business.",
                "Mobile first, SEO, animated - you name it we can do it",
              ],
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 80,
            }}
          />
        </div>
        <div className="hero-sub-text">
          <h2>
            We build modern, responsive websites for UK businesses of all sizes.
            We can help refine your design, and connect you to your awaiting
            customers.
          </h2>
        </div>
        <div>
          <button className="button-primary">Get in touch</button>
        </div>
      </section>
    </>
  );
};
export default Hero;
