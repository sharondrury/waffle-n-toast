import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Showcase.scss";

export default function ShowcaseModal({ open, product, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !product) return null;

  return (
    <div className="showcase-modal__overlay" role="dialog" aria-modal="true">
      <div className="showcase-modal__content">
        <div className="showcase-modal__header">
          <h3>{product.name || "Details"}</h3>
          <button className="showcase-modal__close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="showcase-modal__body">
          <div
            className="showcase-modal__image"
            style={{ backgroundImage: `url(${product.image})` }}
            role="img"
            aria-label={product.name}
          />

          <div className="showcase-modal__meta">
            <p>{product.description || product.caption || "No description available."}</p>
            {product.url && (
              <p>
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  Open link
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ShowcaseModal.propTypes = {
  open: PropTypes.bool,
  product: PropTypes.object,
  onClose: PropTypes.func,
};
