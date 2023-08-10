import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../services/order";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const { id } = useParams();

  // 완료된 결제 정보를 불러오기
  const { data } = useQuery(`/orders/${id}`, () => getOrderFromId(id));

  return <OrderCompleteTemplate data={data} />;
};

export default OrderCompletePage;
