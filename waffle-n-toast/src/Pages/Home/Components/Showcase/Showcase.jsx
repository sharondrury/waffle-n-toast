import "./Showcase.scss";
import React from "react";

import { useState, useEffect } from "react";

// import { showcaseContent } from "../../../../data/data/showcaseContent";
import { showcaseContent } from "../../../../data/data";

const Showcase = () => {

     const [products] = useState(showcaseContent.slice(0, 9));

    //  const addDefaultImg = (ev) => {
    //    ev.target.src = "https://www.primefaces.org/cdn/primereact/images/product/no-image.png";
    //  };

    //  useEffect(() => {
    //    setProducts(showcaseContent.slice(0, 9));
    //  }, []);

  const handleCardClick = (product) => {
    const url = product.url || `/product/${product.id}`;
    // default navigation behavior — change as needed
    window.location.href = url;
  };

const productTemplate = (product) => {
  return (
    <div
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      alt={product.name}
      className="card-outer clickable"
      role="button"
      tabIndex={0}
      onClick={() => handleCardClick(product)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick(product);
      }}
    >
      <div className="card-inner">

      </div>
    </div>
  );
};
// Continuous marquee component: duplicates items and animates the track for a smooth infinite flow
const ContinuousMarquee = ({ items }) => {
  const containerRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const firstGroupRef = React.useRef(null);
  const measureRef = React.useRef(null);
  const [groupWidth, setGroupWidth] = React.useState(0);
  const [repeatCount, setRepeatCount] = React.useState(1);
  const [measured, setMeasured] = React.useState(false);

  // Measure offscreen before starting animation to avoid mid-animation layout changes
  React.useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const measureEl = measureRef.current;
      if (!container || !measureEl) return;

      const singleWidth = measureEl.scrollWidth;
      const containerWidth = container.clientWidth || container.offsetWidth;
      if (!singleWidth) return;

      const neededRepeats = Math.max(1, Math.ceil(containerWidth / singleWidth));
      setRepeatCount(neededRepeats);
      setGroupWidth(singleWidth * neededRepeats);
      setMeasured(true);
    };

    // measure after paint
    const id = setTimeout(measure, 20);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', measure);
    };
  }, [items]);

  // Compute duration from measured pixel width so speed is constant (px/sec)
  const PIXELS_PER_SECOND = 80; // adjust for desired speed (higher = faster)
  const minDuration = 8; // seconds
  const duration = groupWidth > 0 ? Math.max(minDuration, Math.round((groupWidth / PIXELS_PER_SECOND) * 10) / 10) : 0;

  // build one repeated group (repeatCount copies of original items)
  const buildGroup = () => {
    const group = [];
    for (let r = 0; r < repeatCount; r++) {
      items.forEach((p, i) => group.push({ ...p, __origIndex: i, __repeat: r }));
    }
    return group;
  };

  const group = buildGroup();

  return (
    <div className="marquee" ref={containerRef}>
      {/* hidden measuring group (single sequence) used before animation starts */}
      <div className="marquee-measure" ref={measureRef} aria-hidden="true">
        {items.map((p, i) => (
          <div className="marquee-item" key={`m-${p.id}-${i}`}>
            {productTemplate(p)}
          </div>
        ))}
      </div>

      {/* render animated track only after measured to avoid reflows */}
      {measured && (
        <div
          className="marquee-track"
          ref={trackRef}
          style={{ ["--marquee-duration"]: `${duration}s`, ["--marquee-shift"]: `${groupWidth}px` }}
        >
          <div className="marquee-group" ref={firstGroupRef}>
            {group.map((p, idx) => (
              <div className="marquee-item" key={`g1-${p.id}-${p.__origIndex}-${idx}`}>
                {productTemplate(p)}
              </div>
            ))}
          </div>

          <div className="marquee-group">
            {group.map((p, idx) => (
              <div className="marquee-item" key={`g2-${p.id}-${p.__origIndex}-${idx}`}>
                {productTemplate(p)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

  return (
    <>
      <div className="showcase-background">
        <div className="card-other">
          <ContinuousMarquee items={products} />
        </div>
      </div>
    </>
  );
};

export default Showcase;