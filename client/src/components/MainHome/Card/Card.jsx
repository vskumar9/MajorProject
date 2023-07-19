import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card"> 
      <span>{detail}</span>
    </div>
  );
};

export default Card;
