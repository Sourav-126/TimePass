/* eslint-disable react/prop-types */
// import React from 'react';
// import cards from "../utils/cards";

const Card = ({ title, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
