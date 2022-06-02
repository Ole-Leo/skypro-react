const arr = ['a', 'b', 'c', 'd', 'e'];

function ArrayList() {
  return (
    <>
      <ul>
        {arr.map((elem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{elem}</li>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default ArrayList;
