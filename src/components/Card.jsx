import React from 'react'
import '../App.css';

const Card = ({ title, onClick }) => {
  return (
    <div className="cardContainer" onClick={onClick}>
      {title}
    </div>
  )
};

export default Card;
