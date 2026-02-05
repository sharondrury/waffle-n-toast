import "./Faq.scss";
import { faqSection } from "../../../../data/data";
import React from "react";

const Faq = () => {
  const [people] = React.useState(faqSection);

  return (
    <div className="faq-background">
      <div className="faq-container">
        <div>
          <h2>Frequently asked question at Waffles and Toast Web Creatives</h2>
        </div>

        <div className="accordion-container">
          {people.map((person) => (
            <div className="accordion" key={person.id}>
              <div className="accordion-item">
                <input type="checkbox" id="item1" />
                <label htmlFor="item1" className="accordion-header">
                  <span>{person.question}</span>
                  <span className="icon">+</span>
                </label>
                <div className="accordion-content">
                  <p>{person.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
