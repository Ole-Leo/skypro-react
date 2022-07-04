import { useState } from 'react';
import { bookList } from './bookList';
import Total from './Total';
import BookCopy from './BookCopy';

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
          <BookCopy
            key={book.id}
            book={book}
            deleteBook={() => deleteBook(book.id)}
            onAmountChange={(quantity) => setQuantity(book.id, quantity)}
          />
        ))}
        <Total totalAmount={books} />
      </div>
    </>
  );
}
