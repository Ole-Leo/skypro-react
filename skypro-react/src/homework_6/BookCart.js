import { useState } from 'react';
import { bookList } from './bookList';
import Counter from './Counter';
import Total from './Total';

export default function BookCart() {
  const [books, setBooks] = useState(bookList);

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    );
  };

  return (
    <>
      <div className="cart-content">
        {books.map((book) => (
          <article className="book" key={book.id}>
            <h3 className="book__title">{book.title}</h3>
            <Counter
              max={book.rest}
              onAmountChange={(quantity) => setQuantity(book.id, quantity)}
            />
            <p className="book__price">{book.price * book.quantity}</p>
            <button className="delete" onClick={() => deleteBook(book.id)}>
              x
            </button>
          </article>
        ))}
        <Total totalAmount={books} />
      </div>
    </>
  );
}
