import CartList from "../components/molecules/CartList";
import React, { Suspense } from "react";
import { getCart } from "../services/cart";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";

const CartPage = () => {
  const { data } = useQuery("cart", getCart);
  return <CartList data={data} />;
};

export default CartPage;
