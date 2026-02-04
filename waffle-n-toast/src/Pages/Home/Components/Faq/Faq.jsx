import "./Faq.scss";
import { faqSection } from "../../../../data/data";

const Faq = () => {
  return (
    <div className="faq-background">
      <div>
        <h2>Frequently asked question at Waffles and Toast Web Creatives</h2>
      </div>

      <div>
        <div className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="item1" />
            <label htmlFor="item1" className="accordion-header">
              <span>Accordion Item 1</span>
              <span className="icon">+</span>
            </label>
            <div className="accordion-content">
              <p>This is the content for item 1. It expands when clicked.</p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="item2" />
            <label htmlFor="item2" className="accordion-header">
              <span>Accordion Item 2</span>
              <span className="icon">+</span>
            </label>
            <div className="accordion-content">
              <p>This is the content for item 2. You can place any HTML here.</p>
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="item3" />
            <label htmlFor="item3" className="accordion-header">
              <span>Accordion Item 3</span>
              <span className="icon">+</span>
            </label>
            <div className="accordion-content">
              <p>This is the content for item 3. Click again to collapse.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Faq;
