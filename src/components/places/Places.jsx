import { useEffect, useRef } from 'react';
import './Places.scss';
import AirplaneIcon from '../../assets/img/places/airplane_icon.png';
import PlacesImageOne from '../../assets/img/places/places_1.png';
import PlacesImageTwo from '../../assets/img/places/places_2.png';
import TapeImage from '../../assets/img/places/tape.png';
import ScribbleImage from '../../assets/img/places/scribble_places_2.png';

export default function Places() {
  const headingElement = useRef(null);
  const placesData = {
    heading: 'See places you’ve never been before',
    image: {
      url: AirplaneIcon,
      alt: 'Airplane icon',
    },
    text: 'Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor',
    story: {
      imageDecor: {
        url: TapeImage,
        alt: '',
      },
      imageOne: {
        url: PlacesImageOne,
        alt: 'Valley with river surrounded with woods',
      },
      imageTwo: {
        url: PlacesImageTwo,
        alt: 'Rocky Mountain with wooded valley',
      },
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do ei',
      textTop:
        'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      textBottom:
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
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
          <img src={ScribbleImage} alt="" aria-hidden="true" />
        </p>

        <div className="places__story">
          <div className="places__story-img-box">
            <img
              src={placesData.story.imageOne.url}
              alt={placesData.story.imageOne.alt}
              className="places__story-img-large"
            />
            <img
              src={placesData.story.imageDecor.url}
              alt=""
              aria-hidden="true"
              className="places__story-img-decor"
            />
          </div>
          <div className="places__story-content">
            <img
              src={placesData.story.imageTwo.url}
              alt={placesData.story.imageTwo.alt}
              aria-hidden="true"
              className="places__story-img-small"
            />
            <h3 className="places__story-title">{placesData.story.title}</h3>
            <div className="places__story-text">
              <p className="fs-base paragraph">{placesData.story.textTop}</p>
              <p className="fs-base paragraph">{placesData.story.textBottom}</p>
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
