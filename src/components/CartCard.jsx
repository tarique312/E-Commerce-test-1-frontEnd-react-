import "./CartCard.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartCard = ({ item, handleDelete }) => {
  return (
    <div className="card-container">
      <img src={item.img} alt="item image" />
      <div className="detail">
        <h4 className="title">{item.title}</h4>
        <span className="mrp">{item.mrp}</span>
        <h4 className="price">{item.price}</h4>
      </div>
      <div className="text-danger">
        <RiDeleteBin5Line size={30} onClick={() => handleDelete(item.id)} style={{cursor:"pointer"}} />
      </div>
    </div>
  );
};

export default CartCard;
