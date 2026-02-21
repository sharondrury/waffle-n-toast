import './Nav.scss';
import '../../assets/scss/styles.scss';
import CompanyLogo from "../../assets/images/WnT.svg";
import Mobile from "../../assets/images/mobile-icon.svg";
import ContactModal from "../../Pages/Home/Components/Hero/Components/GetInTouchModal/ContactModal";

import { useState } from "react";

const Nav = () => {

  const [modalOpen, setModalOpen] = useState(false);
    
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section>
        <div className="nav-container">
          <div className="section">
            <img className="logo-image" src={CompanyLogo} alt="Company logo" />
          </div>
          <div className="section nav-links">
            <div>About</div>
            <div>Showcase</div>
            <div>Pricing</div>
          </div>
          <div className="section phone-container" onClick={openModal}>
            <img className="phone" src={Mobile} alt="" />
          </div>
        </div>
      </section>
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  );
};
export default Nav;
