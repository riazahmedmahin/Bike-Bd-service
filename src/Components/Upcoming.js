import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Upcoming = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/upcoming")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-5xl my-5 text-center font-bold">Upcoming products</h1>
      <div className="grid grid-cols-3 ">
        {products.map((product) => (
          <div>
            <div className="card w-96 h-[450px] bg-base-100 shadow-xl">
              <figure className="">
                <img
                  src={product.img}
                  alt="Shoes"
                  className="rounded-xl w-full h-[300px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
