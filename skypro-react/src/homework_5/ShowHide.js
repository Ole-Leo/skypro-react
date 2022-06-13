import { useState } from 'react';

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat quia
officia aliquid? Voluptatum reiciendis illum perspiciatis possimus velit
ipsum labore nostrum, libero sed, consequuntur molestiae provident, ea
ratione doloremque.`;

const ShowHide = () => {
  const [buttonText, setButtonText] = useState(false);
  const [showText, setShowText] = useState(true);

  function showHideHandler() {
    setButtonText(!buttonText);
    setShowText(!showText);
  }

  return (
    <>
      <button onClick={showHideHandler}>
        {buttonText ? 'Показать' : 'Скрыть'}
      </button>
      <p>{showText && text}</p>
      <hr />
    </>
  );
};

export default ShowHide;
