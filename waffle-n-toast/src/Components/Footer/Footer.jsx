import "./Footer.scss";
import "../../assets/scss/styles.scss";
// import { serviceCards } from "../../../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-grid">
          <div class="left-content">
            <img src="" alt="" />
            <p>1 address, Town, LL21 9PA</p>
            <p>email@email.com</p>
          </div>
          <div class="item2">2</div>
          <div class="item3">3</div>
        </div>
      </div>
      <div>
        <p>&copy;Copyright Waffle and Toast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
