import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props);
  const { name, price, ratings, seller, category, img } = props.product;

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="product-card mx-auto shadow bg-body rounded">
        <div className="img-area">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <h5>{name}</h5>
          <h6>Price: ${price}</h6>
          <p>Category: {category}</p>
          <p>Brand: {seller}</p>

          <p>Rating: {ratings}</p>
        </div>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="addToCart-btn"
        >
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
