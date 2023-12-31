import { useRef, useState, useEffect } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  let togglePressed = false;
  const navToggle = useRef(null);
  const navData = {
    links: ['home', 'guides', 'flights', 'about'],
    linkBtn: 'contact us',
  };

  const handleBtnClick = (event) => {
    togglePressed = !(event.target.getAttribute('aria-pressed') === 'true');
    event.target.setAttribute('aria-pressed', togglePressed.toString());
    event.target.setAttribute('aria-expanded', togglePressed.toString());

    if (togglePressed) {
      document.body.classList.add('menu-open');
      navToggle.current.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
      navToggle.current.classList.remove('menu-open');
    }
  };

  const handleLinkClick = (event) => {
    if (event.target.dataset.link) {
      setActiveLink(event.target.dataset.link);
    }
  };

  const linkElements = navData.links.map((link, index) => (
    <li role="none" className="navigation__item fw-light" key={index}>
      <a
        role="menuitem"
        className={`navigation__link fw-light ${
          activeLink === link ? 'active' : ''
        }`}
        data-link={link}
      >
        {link}
      </a>
    </li>
  ));

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('section > .container')
    );
    const rgbBg = 'rgb(30, 30, 30)';
    let sectionBgColor;
    let isNavToggleOver;

    const darkSections = sections.filter((section) => {
      sectionBgColor = getComputedStyle(section, '::before').getPropertyValue(
        'background-color'
      );
      return sectionBgColor === rgbBg;
    });

    const scrollEvent = window.addEventListener('scroll', function () {
      isNavToggleOver = darkSections.some(
        (s) =>
          s.getBoundingClientRect().top < 30 &&
          s.getBoundingClientRect().bottom > 30
      );

      if (isNavToggleOver) {
        navToggle.current.classList.add('light');
      } else {
        navToggle.current.classList.remove('light');
      }
    });

    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <nav className="navigation" aria-label="Main">
      <input
        type="checkbox"
        id="navCheckbox"
        className="navigation__checkbox"
        hidden
      />
      <label
        role="button"
        aria-pressed="false"
        aria-haspopup="true"
        aria-controls="navigationList"
        aria-expanded="false"
        htmlFor="navCheckbox"
        className="navigation__toggle"
        onClick={handleBtnClick}
        ref={navToggle}
      ></label>

      <ul
        id="navigationList"
        className="navigation__list"
        role="menu"
        onClick={handleLinkClick}
      >
        {linkElements}
        <li role="none" className="navigation__item-cta">
          <a role="menuitem" className="navigation__cta fw-black">
            {navData.linkBtn}
          </a>
        </li>
      </ul>
    </nav>
  );
}
