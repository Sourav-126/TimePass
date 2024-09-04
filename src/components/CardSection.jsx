/* eslint-disable react/prop-types */
import Card from "../utils/cards";
// import cards from "../utils/cards";

const CardSection = ({ title, subtitle, cards }) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <p className="text-center text-gray-600 mb-8">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
