const Total = ({ total }) => {
  const cartTotalPrice = total.reduce(
    (acc, total) => acc + total.price * total.quantity,
    0
  );

  const cartTotalAmount = total.reduce((acc, total) => acc + total.quantity, 0);

  return (
    <div className="total">
      <h3 className="total__title">Total</h3>
      <div className="total__text">
        <p className="total__amount">
          {cartTotalAmount === 0 ? 'Cart empty' : cartTotalAmount}
        </p>
        <p className="total__price">
          {cartTotalPrice === 0 ? 'Cart empty' : cartTotalPrice}
        </p>
      </div>
    </div>
  );
};

export default Total;
