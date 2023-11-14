import './Travels.scss';
import Accordion from '../accordion/Accordion';
import TravelsImg from '../../assets/img/travels/travels__img.png';

export default function Travels() {
  const accordionData = [
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint odio recusandae rerum perspiciatis cum adipisci nemo accusamus? Qui nostrum laboriosam deserunt ipsa in porro, similique, minima sunt, hic sequi possimus quasi quod! In dolorum laborum vitae voluptatem excepturi iure sint. Repudiandae quo officia eum, enim, quaerat nulla culpa nostrum quas aperiam nisi quae incidunt atque corporis error iste dignissimos maiores nesciunt sapiente consequatur soluta. Eaque recusandae rerum voluptatibus asperiores eveniet exercitationem in molestiae, necessitatibus veritatis magnam sapiente quam, id enim commodi obcaecati ad repellat voluptas odit? Necessitatibus, maxime.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium odit atque officia necessitatibus laudantium asperiores tempora voluptates, inventore suscipit alias? Reprehenderit dicta, error aut unde voluptatem aliquid fugiat ipsam blanditiis officiis itaque voluptate? Alias tempora aliquid dolores ad. Quidem explicabo eligendi quisquam harum aliquid ex cupiditate aliquam perspiciatis eveniet velit ipsam, dignissimos quo officia fuga ipsa voluptatibus eaque eius labore?',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae culpa quos veritatis eligendi eaque exercitationem! Consequuntur mollitia quidem neque illo perspiciatis fugit cumque provident dolorem nihil cum tenetur, soluta obcaecati ipsam atque ea sit veritatis delectus iusto, dolor libero possimus voluptatem illum! Hic culpa, pariatur quas ex totam accusantium et perferendis quos distinctio dolorum vero libero accusamus soluta facere? Nemo architecto voluptatum voluptate velit impedit iure, totam odio, consequuntur consequatur blanditiis accusantium ullam dolorem laudantium rerum. Dolore beatae optio amet, doloremque rerum rem! Aspernatur dignissimos possimus enim est illo veniam magnam ducimus doloribus voluptatum saepe, voluptas et quam ipsam delectus.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae culpa quos veritatis eligendi eaque exercitationem! Consequuntur mollitia quidem neque illo perspiciatis fugit cumque provident dolorem nihil cum tenetur, soluta obcaecati ipsam atque ea sit veritatis delectus iusto, dolor libero possimus voluptatem illum! Hic culpa, pariatur quas ex totam accusantium et perferendis quos distinctio dolorum vero libero accusamus soluta facere? Nemo architecto voluptatum voluptate velit impedit iure, totam odio, consequuntur consequatur blanditiis accusantium ullam dolorem laudantium rerum. Dolore beatae optio amet, doloremque rerum rem! Aspernatur dignissimos possimus enim est illo veniam magnam ducimus doloribus voluptatum saepe, voluptas et quam ipsam delectus.',
    },
  ];

  return (
    <section className="travels container">
      <h2 className="travels__title fs-heading-primary heading__primary fw-bold">
        Lorem ipsum dolor sit amet consectetur
      </h2>
      <div className="travels__accordion">
        <Accordion accordionData={accordionData} />
      </div>
      <img src={TravelsImg} alt="" className="travels__img" />
    </section>
  );
}
