import { useRef } from 'react';
import './Accordion.scss';

export default function Accordion(props) {
  const accordionData = props.accordionData;
  const accordionButtons = useRef([]);
  const accordionPanels = useRef([]);
  let activePanelIndex = 0;
  let accordionItems;
  let activePanel;
  let nextActivePanel;
  let activeBtn;
  let nextActiveBtn;

  function handleButtonClick(event, index) {
    activePanel = accordionPanels.current[activePanelIndex];
    nextActivePanel = accordionPanels.current[index];
    activeBtn = accordionButtons.current[activePanelIndex];
    nextActiveBtn = accordionButtons.current[index];

    if (nextActivePanel.classList.contains('show')) {
      nextActivePanel.style.maxHeight = 0;
      nextActivePanel.classList.remove('show');
      nextActiveBtn.classList.remove('active');
      return;
    }

    activePanel.style.maxHeight = 0;
    activePanel.classList.remove('show');
    nextActivePanel.classList.add('show');
    activeBtn.classList.remove('active');
    nextActiveBtn.classList.add('active');
    nextActivePanel.style.maxHeight = nextActivePanel.scrollHeight + 'px';

    activePanelIndex = index;
  }

  accordionItems = accordionData.map((data, index) => (
    <div className="accordion__item" key={index}>
      <h2 className="accordion__header">
        <button
          className="accordion__button paragraph fs-base"
          type="button"
          ref={(ref) => {
            if (accordionButtons?.current.length < accordionData.length) {
              accordionButtons?.current.push(ref);
            }
          }}
          onClick={(event) => handleButtonClick(event, index)}
        >
          {data.title}
          <span className="accordion__indicator"></span>
        </button>
      </h2>
      <div
        className="accordion__collapse"
        ref={(ref) => {
          if (accordionPanels?.current.length < accordionData.length) {
            accordionPanels?.current.push(ref);
          }
        }}
      >
        <div className="accordion__body">
          <p className="paragraph fs-base">{data.text}</p>
        </div>
      </div>
    </div>
  ));

  return <div className="accordion">{accordionItems}</div>;
}
