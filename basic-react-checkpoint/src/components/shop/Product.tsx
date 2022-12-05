import React from "react";
import "./Product.css";

const Product: React.FC<{ image: string; title: string; price: string }> = (
  props
) => {
  console.log(props);
  return (
    <div className="product">
      <img src={props.image} alt="" className="product-image" />
      <h3>{props.title}</h3>
      <p>Price €{props.price}</p>
    </div>
  );
};

export default Product;
