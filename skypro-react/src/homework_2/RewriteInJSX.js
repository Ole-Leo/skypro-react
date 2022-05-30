const books = [
  {
    name: 'JS for beginners',
    year: '2018',
    price: '1000',
  },
  {
    name: 'React for beginners',
    year: '2019',
    price: '1200',
  },
  {
    name: 'Vue for beginners',
    year: '2021',
    price: '1500',
  },
];

function RewriteInJSX() {
  return (
    <>
      <hr />
      <div>
        {books.map((book) => (
          <>
            <h2>Book: {book.name}</h2>
            <p>{book.year}</p>
            <p>{book.price}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default RewriteInJSX;
