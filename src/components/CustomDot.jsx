import React from "react";

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  const handleOnClick = () => {
    onClick();
    onMove && onMove(index);
  };

  return (
    <button
      className={`custom-dot ${active ? "custom-dot-active" : ""}`}
      onClick={handleOnClick}
    ></button>
  );
};

export default CustomDot;
