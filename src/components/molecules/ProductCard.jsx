import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  return (
    <Card to={staticServerUrl + `/product/${product.id}`}>
      <div className="h-240">
        <Photo
          src={product.image}
          alt={product.productName}
          className="rounded-lg"
        />
      </div>
      <div className="text-sm font-medium text-gray-500">
        {product.productName}
      </div>
      <div className="text-lg font-bold">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
