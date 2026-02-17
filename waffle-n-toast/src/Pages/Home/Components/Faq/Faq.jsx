import "./Faq.scss";
import { faqSection } from "../../../../data/data";

import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  

const Faq = () => {

  const createDynamicTabs = () => {
    return faqSection.map((faqSection) => {
      return (
        <AccordionTab
          key={faqSection.id}
          header={faqSection.question}
          disabled={faqSection.disabled}

        >
          {faqSection.answer}
        </AccordionTab>
      );
    });
  };

  return (
  <div className="faq-background">
    <div className="faq-container">
      <div>
        <h2>Frequently asked question at Waffles and Toast Web Creatives</h2>
      </div>

      <div className="accordion-container">
        <Accordion className="accordion">{createDynamicTabs()}</Accordion>
      </div>
    </div>
  </div>
  );
};

export default Faq;
