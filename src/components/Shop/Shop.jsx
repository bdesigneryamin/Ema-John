import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container grid grid-cols-5 gap-3">
      <div className=" col-span-4 grid grid-cols-3 gap-6 ml-10">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className=" ">
        <h2 className="text-lg font-bold text-center">Order Summary </h2>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
