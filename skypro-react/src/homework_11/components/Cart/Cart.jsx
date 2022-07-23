import { useState } from 'react';
import { bookList } from './bookList';
import CartDetail from './CartDetail';
import TotalPrice from './TotalPrice';

import './cart.css';

const Cart = () => {
  const [books, setBooks] = useState(bookList);

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    );
  };

  const booksInCart = books.map((book) => (
    <CartDetail
      key={book.id}
      book={book}
      deleteBook={() => deleteBook(book.id)}
      onAmountChange={(quantity) => setQuantity(book.id, quantity)}
    />
  ));

  return (
    <>
      <div className="cart-content">
        <div className="books">{booksInCart}</div>
        <TotalPrice total={books} />
      </div>
    </>
  );
};

export default Cart;
