import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 order-2 order-md-1">
          <div className="row">
            {products.map((product) => (
              <Product
                key={product.id}
                handleAddToCart={handleAddToCart}
                product={product}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-2 order-1 order-md-2">
          <h4>Order Summery</h4>
          <p>Selected items: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
