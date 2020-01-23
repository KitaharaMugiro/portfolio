import { useRouter } from "next/router";

const ProductList = [{ name: "株式自動売買", slug: "auto-trading" }];
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
