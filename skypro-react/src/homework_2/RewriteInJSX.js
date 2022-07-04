const Book = ({ name, year, price }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{year}</p>
      <p>{price}</p>
    </>
  );
};

// const listOfBooks = [
//   {
//     name: 'JS for beginners',
//     year: '2018',
//     price: '1000',
//   },
//   {
//     name: 'React for beginners',
//     year: '2019',
//     price: '1200',
//   },
//   {
//     name: 'Vue for beginners',
//     year: '2021',
//     price: '1500',
//   },
// ];

function RewriteInJSX() {
  return (
    <div>
      {/* {listOfBooks.map((book) => (
        <Book
          key={book.name}
          name={book.name}
          year={book.year}
          price={book.price}
        />
      ))} */}
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );
}

export default RewriteInJSX;
