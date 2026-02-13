import "./Footer.scss";
import "../../assets/scss/styles.scss";
// import { serviceCards } from "../../../../data/data";
import CompanyLogo from "../../assets/images/WnT.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-grid">
          <div class="left-content">
            <img src={CompanyLogo} alt="" />
            <p>1 address, Town, LL21 9PA</p>
            <p>email@email.com</p>
          </div>
          <div class="middle-content">
            <a href="#">
              <p>Home</p>
            </a>
            <a href="#">
              <p>Projects</p>
            </a>
            <a href="#">
              <p>Get in touch</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
          <div class="middle-content">
            <a href="#">
              <p>Home</p>
            </a>
            <a href="#">
              <p>Projects</p>
            </a>
            <a href="#">
              <p>Get in touch</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>&copy;Copyright Waffle and Toast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
