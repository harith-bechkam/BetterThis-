import React, { useState, useRef, useEffect } from "react";
import "./beforeafter.css";

const Beforeafter = () => {
  const [sliderPos, setSliderPos] = useState(0); // start from left
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate from left to center on mount
    const timer = setTimeout(() => {
      setSliderPos(50); // move to center
      setTimeout(() => {
        setIsAnimating(false); // allow dragging after animation
      }, 1500); // match CSS transition duration
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current || isAnimating) return; // block during animation
    const bounds = containerRef.current.getBoundingClientRect();
    const position = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (isAnimating) return; // don't drag during animation
    const moveHandler = (event) =>
      handleMove(event.clientX || event.touches[0].clientX);
    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchend", upHandler);
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchend", upHandler);
  };

  return (
    <div className="comparison-section">
    <h2>
  There's no comparison.
  <br /> Honestly. We'll show you.
</h2>
<p className="subtitle">
  Mauris at ultrices odio. Duis eget lorem non turpis feugiat accumsan ac non
  tortor. Donec porttitor nulla dolor, eget hendrerit ex egestas nec.
</p>

      <div className="comparison-container" ref={containerRef}>
        <img src="../asset/image/before1.png" alt="Before" className="before-image" />

        <div
          className="after-image-wrapper"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img src="../asset/image/after1.png" alt="After" className="after-image" />
        </div>

        {/* Vertical Divider */}
        <div
          className={`divider-line ${isAnimating ? "animating" : ""}`}
          style={{ left: `${sliderPos}%` }}
        ></div>

        {/* Handle */}
        <div
          className={`slider-handle ${isAnimating ? "animating" : ""}`}
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="arrow left">‹</div>
          <div className="arrow right">›</div>
        </div>

        {/* Labels */}
        {sliderPos > 10 && <span className="label before-label">Before</span>}
        {sliderPos < 90 && <span className="label after-label">After</span>}
      </div>
    </div>
  );
};

export default Beforeafter;
