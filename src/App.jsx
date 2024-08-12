import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [cartItems, setCartItems] = useState([]);
  const [itemsArr, setItemsArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const indianNumberFormat = (value) => {
    const strValue = value.toString();
    const lastThreeDigits = strValue.slice(-3);
    const otherDigits = strValue.slice(0, -3);

    const formattedValue =
      otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      (otherDigits ? "," : "") +
      lastThreeDigits;

    return formattedValue;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let itemsPromise = await fetch(
          "https://e-commerce-test-1-backend.onrender.com/items"
        );
        let data = await itemsPromise.json();
        setItemsArr(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterToggle = () => {
    setFilterActive(!filterActive);
  };

  const handleApplyFilter = (range) => {
    setPriceRange(range);
    setFilterActive(false);
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar
        onSearch={handleSearch}
        onFilter={handleFilterToggle}
        cartItems={cartItems}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {filterActive && <Filter onApplyFilter={handleApplyFilter} />}
              <CardList
                searchQuery={searchQuery}
                priceRange={priceRange}
                setCartItems={setCartItems}
                cartItems={cartItems}
                itemsArr={itemsArr}
                loading={loading}
                handleDelete={handleDelete}
                indianNumberFormat={indianNumberFormat}
              />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleDelete={handleDelete}
              indianNumberFormat={indianNumberFormat}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
