import React, { useLayoutEffect, useRef } from 'react';
import './Hero.scss';
import gsap from 'gsap';
import HeroImage from '../../assets/img/hero/hero_img.png';

export default function Hero() {
  const heroTextContent = useRef(null);
  const heroSection = useRef(null);
  const heroData = {
    heading: 'Travel to your dream destination',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.',
    ctaTxt: 'reserve ticket',
    img: {
      url: HeroImage,
      altTxt: 'Green hills with little lake in the middle',
    },
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(heroTextContent.current, {
        duration: 1.5,
        delay: 1.7,
        xPercent: -100,
        ease: 'power1.out',
      });

      gsap.from(heroTextContent.current, {
        duration: 1.5,
        delay: 1.7,
        opacity: 0,
        ease: 'power1.out',
      });

      gsap.from('.hero__img', {
        duration: 1.5,
        delay: 2.7,
        yPercent: -100,
        ease: 'power1.out',
      });

      gsap.from('.hero__img', {
        duration: 1.5,
        delay: 2.7,
        opacity: 0,
        ease: 'power1.out',
      });
    }, heroSection);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroSection}>
      <div className="container row hero__container">
        <div className="hero__text-content" ref={heroTextContent}>
          <h1 className="heading__primary fs-heading-primary fw-black">
            {heroData.heading}
          </h1>
          <p className="hero__text paragraph fs-base">{heroData.text}</p>
          <a href="#" className="hero__cta">
            {heroData.ctaTxt}
          </a>
        </div>
        <img
          className="hero__img"
          src={heroData.img.url}
          alt={heroData.img.altTxt}
        />
      </div>
    </section>
  );
}
