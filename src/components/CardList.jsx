import { useEffect, useState } from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({
  searchQuery,
  priceRange,
  setCartItems,
  cartItems,
  itemsArr,
  loading,
  handleDelete,
  indianNumberFormat,
}) => {
  const filteredItems = itemsArr.filter((item) => {
    const matchesSearchQuery = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      item.price >= priceRange.min && item.price <= priceRange.max;
    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div className="cardlist">
      {loading ? (
        <div className="spinner-container">
          {[...Array(3)].map((_, i) => (
            <div
              className="spinner-grow m-5"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
              key={i}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ))}
        </div>
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Card
            key={item.id}
            item={item}
            setCartItems={setCartItems}
            cartItems={cartItems}
            handleDelete={handleDelete}
            indianNumberFormat={indianNumberFormat}
          />
        ))
      ) : (
        <h1 className="m-5">No items Found</h1>
      )}
    </div>
  );
};

export default CardList;
