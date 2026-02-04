import "./Service.scss";
import { serviceCards } from "../../../../data/data";
import React from "react";
import { useScroll } from "motion/react"
import { useRef } from "react"

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
} from "react-scroll-motion";

const Service = () => {

  const itemContainer = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
    color: "var(--sub-text-color)",
    fontSize: "1.5rem",
  };

  const progressIconContainer = {
    position: "sticky",
    top: 50,
    bottom: 50,
    width: 200,
    height: 80,
    margin: 0,
    padding: 0,
  }

  const itemSpan = {
    textDecoration: "underline var(--green-dark) 6px",
  };

  const item = {
    display: "flex",
    justifyContent:"flex-end",
    width: 300,
    height: 250,
    position: "relative",
 }

  const ref = useRef(null);

  const [people] = React.useState(serviceCards);

    // Use a single ScrollPage and stagger MoveIn offsets so items enter one after another
  return (
    <div className="service-background">
      <div className="service-container">
        <section style={itemContainer}>
          <div ref={ref} style={item}>
            <figure style={progressIconContainer}>
              <h2>
                What's on offer for our <span style={itemSpan}>service</span>
              </h2>
            </figure>
          </div>
        </section>

        <ScrollContainer>
          <ScrollPage>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "100%",
                width: "100%",
                marginTop: "50px",
                paddingLeft: "40px",
                gap: "40px",
              }}
            >
              {people.map((person) => (
                <Animator
                  key={person.id}
                  animation={batch(
                    Fade(),
                    // smaller base offset so next item begins moving in before previous finishes
                    MoveIn(800 + person.id * 800, 0),
                  )}
                >
                  <div className="scroll-in-container">
                    <div>
                      <img src={person.img} alt={person.heading} />
                    </div>
                    <div>
                      <h1 className="scroll-in-heading">{person.heading}</h1>
                      <p className="scroll-in-subheading">{person.para}</p>
                    </div>
                  </div>
                </Animator>
              ))}
            </div>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Service;
