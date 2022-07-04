const Total = ({ totalAmount }) => {
  const cartTotal = totalAmount.reduce(
    (acc, total) => acc + total.price * total.quantity,
    0
  );

  return (
    <div className="book">
      <h3 className="book__title">Total amount:</h3>
      <p className="total-price">
        {cartTotal === 0 ? 'Cart empty' : cartTotal}
      </p>
    </div>
  );
};

export default Total;
