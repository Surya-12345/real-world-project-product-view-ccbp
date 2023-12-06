import React from "react";
import "./index.css";

const Products = ({ data }) => {
  const { title, price, category, image } = data;

  return (
    <div>
      <div className="products-containers">
        <div className="product">
          <img src={image} alt={image} className="image" />
          <div className="matter">
            <h4 className="product-heading">{title}</h4>
            <p className="product-category">{category}</p>
            <h3 className="product-price">Rs. {price}</h3>
            <button className="button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
