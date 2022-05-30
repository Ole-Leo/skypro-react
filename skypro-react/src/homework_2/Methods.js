import { textForTask } from './Text';

const getText = () => <p>{textForTask}</p>;

const getNum1 = () => 1;
const getNum2 = () => 2;

function Methods() {
  return (
    <>
      <div>{getText()}</div>
      <div> Sum: {getNum1() + getNum2()}</div>
    </>
  );
}

export default Methods;
