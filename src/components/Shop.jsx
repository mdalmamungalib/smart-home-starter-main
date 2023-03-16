import React, { useContext } from "react";
import { cartContext, productContext } from "./Root";
import Product from "./Product";
import { addToDb } from "../utils/fakeDB";
import { toast } from "react-toastify";

const Shop = () => {
  const products = useContext(productContext);
  const [cart, setCart] = useContext(cartContext);

  const handaleAddToCart = (products) => {
    let newCart = [];

    const exist = cart.find(existingProduct => existingProduct.id === products.id);
    if (!exist) {
      products.quantity = 1;
      newCart = [...cart, products];
    }
    else {
      const rest = cart.filter(existingProduct => existingProduct.id !== products.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(products.id);
    toast.success('Cart Added!!!', { autoClose: 500 })
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handaleAddToCart={handaleAddToCart}
            ></Product>
          ))
        }
      </div>
    </div>
  );
};

export default Shop;
