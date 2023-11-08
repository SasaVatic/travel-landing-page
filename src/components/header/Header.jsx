import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import gsap from 'gsap';

export default function Header() {
  const headerElement = useRef(null);

  useEffect(() => {
    const scrollTrigger = window.addEventListener('scroll', function () {
      if (this.scrollY > 0) {
        headerElement.current.classList.add('scrolled');
      } else {
        headerElement.current.classList.remove('scrolled');
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollTrigger);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.navigation__list li', {
        delay: 0.3,
        duration: 0.5,
        yPercent: -50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power1.out',
      });
    }, headerElement);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <header ref={headerElement}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}
