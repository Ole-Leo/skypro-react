import { textForTask } from './Text';

const attrID = 'block';
const strCls = 'block';

function Attributes() {
  return (
    <>
      <div id={attrID}>{textForTask} with ID</div>
      <hr />
      <div className={strCls}>{textForTask} with class</div>
      <hr />
    </>
  );
}

export default Attributes;
