import { useEffect, useRef } from 'react';
import './Cta.scss';

export default function Cta() {
  const ctaSectionElement = useRef(null);
  const ctaData = {
    heading: 'Create a memory to remember',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.',
    link: {
      text: 'my travel logs',
    },
  };

  useEffect(() => {
    const navigationToggle = document.querySelector('.navigation__toggle');
    let isNavToggleOver =
      ctaSectionElement.current.getBoundingClientRect().top < 30 &&
      ctaSectionElement.current.getBoundingClientRect().bottom > 30;

    const scrollEvent = window.addEventListener(
      'scroll',
      function () {
        isNavToggleOver =
          ctaSectionElement.current.getBoundingClientRect().top < 30 &&
          ctaSectionElement.current.getBoundingClientRect().bottom > 30;

        if (isNavToggleOver) {
          navigationToggle.classList.add('light');
        } else {
          navigationToggle.classList.remove('light');
        }
      },
      []
    );

    return () => window.removeEventListener('scroll', scrollEvent);
  });

  return (
    <section className="cta-section" ref={ctaSectionElement}>
      <div className="container cta-section__container">
        <div className="cta-section__content-wrapper">
          <h2 className="cta-section__title heading-small fs-heading-small">
            {ctaData.heading}
          </h2>
          <p className="cta-section__text paragraph fs-base">{ctaData.text}</p>
          <a href="#" className="cta-section__cta fw-black">
            {ctaData.link.text}
          </a>
        </div>
      </div>
    </section>
  );
}
