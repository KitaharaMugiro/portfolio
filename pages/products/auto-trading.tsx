import { ProductList } from "../../contents/ProductList";

const slug = "auto-trading";
export default () => {
  const product = ProductList.find(p => p.slug === slug);

  return <div>{product?.name}</div>;
};
