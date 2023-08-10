import CartList from "../components/molecules/CartList";
import { getCart } from "../services/cart";
import React from "react";
import { useQuery } from "react-query";

const CartPage = () => {
  const { data } = useQuery("cart", getCart);
  return <CartList data={data} />;
};

export default CartPage;
