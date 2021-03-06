const TotalAmount = ({ totalAmount }) => {
  const cartTotal = totalAmount.reduce((acc, total) => acc + total.quantity, 0);

  return (
    <div className="total">
      <h3 className="total__title">Total amount:</h3>
      <p className="total">{cartTotal === 0 ? 'Cart empty' : cartTotal}</p>
    </div>
  );
};

export default TotalAmount;
