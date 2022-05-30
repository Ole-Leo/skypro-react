import { textForTask, textForTaskDuplicate } from './Text';

// const show = true;
const show = false;

function Conditions() {
  return (
    <>
      <div>{show ? textForTask : textForTaskDuplicate}</div>
      <hr />
    </>
  );
}

export default Conditions;
