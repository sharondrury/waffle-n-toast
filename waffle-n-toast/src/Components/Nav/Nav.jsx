import './Nav.scss';
import '../../assets/scss/styles.scss';
import Mobile from "../../assets/images/mobile-icon.svg";

const Nav = () => {
  return (
    <>
      <section>
        <div className="nav-container">
          <div className="section">W&T</div>
          <div className="section nav-links">
            <div>About</div>
            <div>Showcase</div>
            <div>Pricing</div>
          </div>
          <div className="section">
            <img className="phone" src={Mobile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Nav;
