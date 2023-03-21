import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import SingleProduct from "./SingleProduct";
import { toast } from "react-hot-toast";

const Services = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/products`);
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this product?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product Deleted Successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <h1 className=" font-bold text-5xl my-5 text-center">Our Products</h1>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <div>
            <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
              <figure className="">
                <img
                  src={product.img}
                  alt="Shoes"
                  className="rounded-xl w-full h-[400px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p className=" font-bold">{product.price} Taka</p>
                <p>{product.details}</p>
                <div className="card-actions flex justify-between">
                  <button className="btn bg-sky-700 text-white ">
                    <Link to={`product/${product._id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
