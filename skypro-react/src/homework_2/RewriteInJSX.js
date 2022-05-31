function Book(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </>
  );
}

function RewriteInJSX() {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );
}

export default RewriteInJSX;
