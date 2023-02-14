import React from "react";
import "./product.css"

const Product = ({product}) => {
  return (
    <div className="product-container">
      <p className="title"><strong>Title: </strong>{product.title}</p>
      <img className="image" src={product.image} />
      <p className="description"> <strong>description: </strong>{product.description}</p>
      <p className="rating"> <strong>rating: </strong>{product.rating.rate}</p>
      <p className="price">  <strong>price: </strong>${product.price}</p>
    </div>
  )
}

export default Product;

