import TypewriterClass from "typewriter-effect";
import "./Hero.scss";
import { useState } from "react";
import ContactModal from "./Components/GetInTouchModal/ContactModal";

const Hero = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

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
          <button className="button-primary" onClick={openModal}>
            Get in touch
          </button>
        </div>
      </section>
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  );
};
export default Hero;
