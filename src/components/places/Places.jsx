import React, { useEffect, useRef } from 'react';
import './Places.scss';

export default function Places() {
  const headingElement = useRef(null);
  const placesData = {
    heading: 'See places you’ve never been before',
    image: {
      url: 'src/assets/img/places/airplane_icon.png',
      alt: 'Airplane icon',
    },
    text: 'Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor',
  };

  useEffect(() => {
    headingElement.current.innerHTML = placesData.heading
      .split(' ')
      .map((word, index) => {
        if (index === 3) {
          return `<span>${word}</span>`;
        }
        return word;
      })
      .join(' ');
  }, []);

  return (
    <section className="places">
      <div className="places__container container">
        <img
          className="places__img"
          src={placesData.image.url}
          alt={placesData.image.alt}
        />
        <h2 className="places__title heading__large" ref={headingElement}></h2>
        <p className="places__text">
          {placesData.text}
          <img src="src/assets/img/places/scribble_places_2.png" alt="" />
        </p>

        <div className="places__story">
          <div className="places__story-img-box">
            <img
              src="src/assets/img/places/places_1.png"
              alt=""
              className="places__story-img-large"
            />
            <img
              src="src/assets/img/places/tape.png"
              alt=""
              className="places__story-img-decor"
            />
          </div>
          <div className="places__story-content">
            <img
              src="src/assets/img/places/places_2.png"
              alt=""
              className="places__story-img-small"
            />
            <h3 className="places__story-title">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei
            </h3>
            <div className="places__story-text">
              <p className="fs-base paragraph">
                Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud.
              </p>
              <p className="fs-base paragraph">
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <a href="#" className="places__story-link">
              <span className="places__story-link-arrow"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
