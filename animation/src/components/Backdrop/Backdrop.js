import React from "react";

import "./Backdrop.css";

const backdrop = props => {
  const cssClasses = `Backdrop Backdrop${props.show ? "Open" : "Closed"}`;
  return <div className={cssClasses}></div>;
};

export default backdrop;
