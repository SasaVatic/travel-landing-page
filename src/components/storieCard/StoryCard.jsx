import React from 'react';
import './StoryCard.scss';

export default function StorieCard(props) {
  return (
    <div className="story-card">
      <img
        src={props.img.url}
        alt={props.img.alt}
        className="story-card__img"
      />
      <div className="story-card__body">
        <h3 className="story-card__title">{props.title}</h3>
        <p className="story-card__text fs-base paragraph">{props.text}</p>
      </div>
    </div>
  );
}
