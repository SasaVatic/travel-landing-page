import './Description.scss';
import DescriptionImage from '../../assets/img/description/description_img.png';

export default function Description() {
  const descriptionData = {
    title: 'Choose anywhere you’d like to be',
    textTop: {
      title: 'Lorem Ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.',
    },
    textBottom: {
      title: 'Lorem Ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre henderit in voluptate velit esse.',
    },
    image: {
      url: DescriptionImage,
      alt: 'Hiker with backpack standing on cliff edge looking at distance',
    },
  };

  return (
    <section className="description">
      <div className="container description__container row">
        <div className="description__content">
          <h2 className="description__title heading-small fs-heading-small">
            {descriptionData.title}
          </h2>
          <div className="description__text">
            <h3>{descriptionData.textTop.title}</h3>
            <p className="fs-base paragraph">{descriptionData.textTop.text}</p>
          </div>
          <div className="description__text">
            <h3>{descriptionData.textBottom.title}</h3>
            <p className="fs-base paragraph">
              {descriptionData.textBottom.text}
            </p>
          </div>
        </div>
        <img
          src={descriptionData.image.url}
          alt={descriptionData.image.alt}
          className="description__img"
        />
      </div>
    </section>
  );
}
