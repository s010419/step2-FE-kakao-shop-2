import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  return (
    <Card to={staticServerUrl + `/product/${product.id}`}>
      <Photo
        src={product.image}
        alt={product.productName}
        className="rounded-lg"
      />
      <div className="text-sm font-medium text-gray-500">
        {product.productName}
      </div>
      <div>{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
