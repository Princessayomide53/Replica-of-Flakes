import React from "react";

const Card = (props) => {
  const classes = " class " + props.className;
  return (
    <>
      <div className={classes}>{props.children}</div>
    </>
  );
};

export default Card;
