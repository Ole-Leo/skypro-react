const arr = ['a', 'b', 'c', 'd', 'e'];

function ArrayList() {
  return (
    <>
      <ul>
        {arr.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default ArrayList;
