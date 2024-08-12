import "./Card.css";

const Card = ({ item, setCartItems, cartItems, handleDelete }) => {
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="card">
      <img src={item.img} className="card__img" alt="Card image" />
      <div className="card__body">
        <h5 className="card__title">{item.title}</h5>
        <p className="card__text">
          <span>{item.mrp}</span>
          <span className="price">{item.price}</span>
        </p>
        {isInCart ? (
          <button
            className="card__btn btn btn-danger"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="card__btn btn btn-success"
            onClick={() => {
              setCartItems([...cartItems, item]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
