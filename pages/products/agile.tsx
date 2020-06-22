import Chips from "../../components/Chips";
import {
  Description,
  Frame,
  HeaderLine,
  Image,
  Link,
  Title,
} from "../../components/ProductStyledComponents";
import { getPath } from "../../constants/utils";
import { ProductList } from "../../contents/ProductList";

const slug = "agile";
const description = "日系大企業向けにアジャイル開発の導入支援を行った";
const difficulty =
  "従来型の「制度」「マインド」「スキル」がアジャイルとバッティングし導入を困難にさせることがありました。小さいところから改善させ、その良さを体感して頂くことでアジャイルの考え方を浸透させた。";
export default () => {
  const product = ProductList.find((p) => p.slug === slug);

  const renderImage = () => {
    if (product?.image) {
      return (
        <Image
          src={getPath(product.image)}
          onClick={() => (window.location.href = "/products/" + slug)}
        ></Image>
      );
    }
  };

  if (!product) {
    console.error("見つかりません");
    return <div></div>;
  }

  return (
    <Frame>
      {renderImage()}
      <Title>{product?.name}</Title>
      <Chips tags={product?.tags} />
      <Description>{description}</Description>
      <HeaderLine>苦労したこと/どう乗り越えたか</HeaderLine>
      <Description>{difficulty}</Description>
      <HeaderLine>詳細リンク</HeaderLine>
      <Link href="https://qiita.com/yuno_miyako/items/8da729aa28bdaede8777">
        Qiita
        ウォーターフォール開発経験の長いチームにアジャイル開発を体験してもらった
      </Link>
    </Frame>
  );
};
