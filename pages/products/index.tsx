import ProductList from "../../contents/products/ProductList";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const renderProducts = () => {
    return ProductList.map(product => {
      return (
        <div
          key={product.slug}
          onClick={() => router.push("/products/" + product.slug)}
        >
          {product.name}
        </div>
      );
    });
  };
  return <div>{renderProducts()}</div>;
};
