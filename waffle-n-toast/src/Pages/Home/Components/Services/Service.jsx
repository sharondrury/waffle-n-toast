import "./Service.scss";
import { serviceCards } from "../../../../data/data";
import React from "react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const Service = ({id, img, heading, para}) => {

  const [people] = React.useState(serviceCards);

  // Use a single ScrollPage and stagger MoveIn offsets so items enter one after another
  return (
    <div className="service-background">
      <div className="service-container">
        <div>
          <h1>Heading here</h1>
        </div>
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
                marginTop: "150px",
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
                  <div style={{ fontSize: "40px" }}>
                    <h1>{person.heading}</h1>
                    <p>{person.para}</p>
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
