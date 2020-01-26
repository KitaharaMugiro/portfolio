import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";
import {
  Image,
  Frame,
  Title,
  Description,
  HeaderLine,
  Link
} from "../../components/ProductStyledComponents";

const slug = "campwill";
const architectImage = getPath("/campwill-architect.png");
const description =
  "複数の予約サイトの登録されているキャンプ場の在庫と価格を同期させるシステム。また在庫数が減ってきた時に自動で価格をあげるダイナミックプライシングを実装した。";
const difficulty =
  "予約サイトの在庫や価格を変更するのにPuppeteerを採用したが、Puppeteerのメモリ使用量が大きく複数のリクエストを同時に捌くことができなかったためサービスを切り出し非同期化させた。";
export default () => {
  const product = ProductList.find(p => p.slug === slug);

  const renderImage = () => {
    if (product?.image) {
      return <Image src={getPath(product.image)}></Image>;
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
      <HeaderLine>アーキテクチャ図(クリックで拡大)</HeaderLine>
      <Image
        src={architectImage}
        onClick={() => (window.location.href = architectImage)}
      ></Image>
      <HeaderLine>苦労したこと/どう乗り越えたか</HeaderLine>
      <Description>{difficulty}</Description>
    </Frame>
  );
};
