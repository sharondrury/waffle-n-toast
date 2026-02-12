import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.scss";

const ScrollReveal = () => {
  const itemRefs = useRef([]);
  const [opacities, setOpacities] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacities = itemRefs.current.map((item) => {
        if (!item) return 0;

        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the center point of the element
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight / 2;

        // Calculate opacity (1 when at 50% viewport, 0 when far away)
        let opacity = 1 - distanceFromCenter / maxDistance;
        opacity = Math.max(0, Math.min(1, opacity));

        return opacity;
      });

      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      title: "Technology",
      description:
        "Exploring the cutting edge of modern innovation and digital transformation in our connected world.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      title: "Design",
      description:
        "Creating beautiful and functional experiences that resonate with users across all platforms.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      title: "Innovation",
      description:
        "Pushing boundaries and reimagining what's possible in the realm of creative solutions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      title: "Development",
      description:
        "Building robust and scalable solutions that power the future of digital experiences.",
    },
  ];

  return (
    <div className="scroll-reveal-container">
      <section className="reveal-section">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="reveal-item"
            style={{ opacity: opacities[index] }}
          >
            <div className="item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ScrollReveal;
