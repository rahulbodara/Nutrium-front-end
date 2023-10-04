import React, { useEffect, useRef, useState } from "react";

const OutsideClickHandler = ({ onClickOutside, children, component }) => {
  const clickCaptured = useRef(false);

  useEffect(() => {
    const documentClick = (event) => {
      if (!clickCaptured.current && onClickOutside) {
        onClickOutside(event);
      }
      clickCaptured.current = false;
    };

    document.addEventListener("mousedown", documentClick);
    document.addEventListener("touchstart", documentClick);

    return () => {
      document.removeEventListener("mousedown", documentClick);
      document.removeEventListener("touchstart", documentClick);
    };
  }, [onClickOutside]);

  const getProps = () => ({
    onMouseDown: innerClick,
    onTouchStart: innerClick,
  });

  const innerClick = () => {
    clickCaptured.current = true;
  };

  if (typeof children === "function") {
    return children(getProps());
  }

  return React.createElement(component || "div", getProps(), children);
};

export default OutsideClickHandler;
