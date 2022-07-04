import PropTypes from 'prop-types';
import Counter from './Counter';

const BookCopy = ({ book, deleteBook, onAmountChange }) => {
  return (
    <article className="book">
      <h3 className="book__title">{book.title}</h3>
      <Counter
        max={book.rest}
        value={book.quantity}
        onAmountChange={onAmountChange}
      />
      <p className="book__price">{book.price * book.quantity}</p>
      <button className="delete" onClick={() => deleteBook(book.id)}>
        x
      </button>
    </article>
  );
};

BookCopy.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    rest: PropTypes.number,
    quantity: PropTypes.number,
  }),
  deleteBook: PropTypes.func,
  onAmountChange: PropTypes.func,
};

export default BookCopy;
