export const textForTask = 'Hello, React';
export const textForTaskDuplicate = 'Hello again, React';

function Text() {
  return (
    <>
      <div>Hello, React!</div>
      <hr />
      <div>{textForTask}</div>
      <hr />
      <div>
        <p>{textForTask}</p>
      </div>
      <hr />
      <div>
        <p>{textForTask}</p>
        <p>!!!</p>
        <p>{textForTaskDuplicate}</p>
      </div>
      <hr />
    </>
  );
}

export default Text;
