import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import styles from "./ProductCard.module.css";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  return (
    <Card
      className={`${styles["product-card"]}`}
      to={staticServerUrl + `/product/${product.id}`}
    >
      <div className={`${styles["product-photo"]}`}>
        <Photo
          src={product.image}
          alt={product.productName}
          className={`${styles["product-photo"]} rounded-lg`}
        />
      </div>
      <div className={`${styles["product-name"]}`}>{product.productName}</div>
      <div className={`${styles["product-price"]}`}>
        {comma(product.price)}원
      </div>
    </Card>
  );
};

export default ProductCard;
