import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
        <figure className="">
          <img src={product.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.details}</p>
          <div className="card-actions flex justify-between">
            <Link className="btn btn-outline">Edit</Link>
            <Link className="btn btn-outline">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
