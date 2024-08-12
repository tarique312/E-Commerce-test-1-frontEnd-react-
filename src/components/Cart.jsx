import "./Cart.css";
import CartCard from "./CartCard";

const Cart = ({ cartItems, handleDelete }) => {
  // Calculate total MRP, price, and discount
  const totals = cartItems.reduce(
    (acc, item) => {
      acc.TOTAL_MRP += item.mrp;
      acc.TOTAL_PRICE += item.price;
      acc.TOTAL_DISCOUNT += item.mrp - item.price;
      return acc;
    },
    { TOTAL_MRP: 0, TOTAL_PRICE: 0, TOTAL_DISCOUNT: 0 }
  );

  return (
    <div className="cart">
      <div className="cart-item">
        {cartItems.map((item, i) => (
          <CartCard key={i} item={item} handleDelete={handleDelete} />
        ))}
      </div>
      <div className="total">
        <p className="mrp">Total MRP: {totals.TOTAL_MRP}</p>
        <h4 className="price">Total Price: {totals.TOTAL_PRICE}</h4>
        <p className="discount">Total Discount: {totals.TOTAL_DISCOUNT}</p>
        <button className="btn btn-success">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
