import { useState } from 'react';
import Square from './Square';

const TwoSquares = () => {
  const [isHidden, setIsHidden] = useState(false);

  const changeStateHandler = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="container">
        <Square className={`blue-color`} />
        <Square
          className={`green-color ${isHidden ? 'hidden' : ''}`}
          onClick={changeStateHandler}
        />
        <Square
          className={`red-color ${!isHidden ? 'hidden' : ''}`}
          onClick={changeStateHandler}
        />
      </div>
      <hr />
    </>
  );
};

export default TwoSquares;
