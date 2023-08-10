import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
  const { data } = useQuery("cart", getCart);

  return <OrderTemplate data={data} />;
};

export default OrderPage;
