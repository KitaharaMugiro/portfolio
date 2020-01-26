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

const slug = "jpeg-resolution";
const architectImage = getPath("/jpeg-resolution-architect.png");
const description =
  "高画質画像をJPEG圧縮した際に生じるノイズを取り除くモデルを作成した。当時の最新の研究論文を読み、super-resolutionのアイディアを援用してGANモデルを作成した。";
const difficulty =
  "Generatorの学習速度が遅かったため、最初に低画質画像を高画質画像に変換する事前学習を行ってからGANによる学習をさせ学習時間を短縮させた。";
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
      <Title>{product.name}</Title>
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
