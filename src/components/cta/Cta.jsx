import './Cta.scss';

export default function Cta() {
  const ctaData = {
    heading: 'Create a memory to remember',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida.',
    link: {
      text: 'my travel logs',
    },
  };

  return (
    <section className="cta-section">
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
