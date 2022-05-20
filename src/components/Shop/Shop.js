import React, { useEffect, useState } from "react";
import { addToDb, getData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

  useEffect(() => {
    const storeData = getData();
    let saveCart = [];
    for (const id in storeData) {
      const addedCart = products.find((item) => item.id === id);

      if (addedCart) {
        const quantity = storeData[id];
        addedCart.quantity = quantity;
        saveCart.push(addedCart);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    addToDb(item.id);
  };

  // Total Price
  // let totalPrice = cart.reduce(
  //   (previous, current) => previous + current.price,
  //   0
  // );
  // console.log(totalPrice);

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
        <div className="col-12 col-md-2 order-1 order-md-2 order-summery p-3">
          <Cart carts={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
