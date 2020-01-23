import { ProductInterface } from "./ProductInterface";

const detail = () => {
  return <div>hello</div>;
};

const challenge = () => {
  return <div>挑戦的</div>;
};

const product: ProductInterface = {
  name: "機械学習による株式売買の最適化/自動化",
  description: "",
  image: "",
  detail: detail,
  challenge: challenge,
  slug: "auto-trading"
};

export default product;
