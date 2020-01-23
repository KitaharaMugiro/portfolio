import { useEffect, useState } from "react";
import { useRouter, Router } from "next/router";
import { ProductInterface } from "../../../contents/products/ProductInterface";

const index = ({ slug }: { slug: string }) => {
  const [content, setContent] = useState();
  const router = useRouter();
  useEffect(() => {
    const load = async () => {
      try {
        const productImport = await import(
          `../../../contents/products/${slug}.tsx`
        );
        const content: ProductInterface = productImport.default;
        setContent(content);
      } catch {
        console.error(`cannot find ${slug} from products`);
        router.push("/products");
      }
    };
    load();
  }, []);

  if (content) {
    return <div>{content.detail()}</div>;
  } else {
    return <div>loading</div>;
  }
};

index.getInitialProps = async ({ query }: any) => {
  const slug = query.id;
  return { slug };
};

export default index;
