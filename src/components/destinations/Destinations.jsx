import React from 'react';
import './Destinations.scss';
import StoryCard from '../storieCard/StoryCard';

export default function Destinations() {
  const destinationsData = {
    cards: [
      {
        img: {
          url: 'src/assets/img/destinations/destination_1.png',
          alt: 'Hiker with stick standing on the cliff',
        },
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. ',
      },
      {
        img: {
          url: 'src/assets/img/destinations/destination_2.png',
          alt: 'Rocky Mountain Peak',
        },
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. ',
      },
      {
        img: {
          url: 'src/assets/img/destinations/destination_3.png',
          alt: 'Hiker sitting on a cliff with view on mountains in front of him',
        },
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. ',
      },
    ],
  };

  const destinationCards = destinationsData.cards.map((card, index) => (
    <StoryCard
      img={card.img}
      title={card.title}
      text={card.text}
      key={index}
    />
  ));

  return (
    <section className="destinations">
      <div className="container destinations__container">
        <div className="destinations__cards">{destinationCards}</div>
      </div>
    </section>
  );
}
