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

const slug = "smartguide";
const description = "スマートフォンで観光地の音声ガイドを提供するサービス";
const difficulty =
  "フルリモートによる業務であったが開発フローがしっかりしており問題が生じることはなかった。非エンジニアとの連携が難しく、スクリプトによる業務の自動化を浸透させることができなかった。";
export default () => {
  const product = ProductList.find(p => p.slug === slug);

  const renderImage = () => {
    if (product?.image) {
      return <Image src={getPath(product.image)} onClick={() => (window.location.href = "/products/" + slug)} ></Image>;
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
      <Link href="https://smartguide.net">Smartguide - スマートガイド</Link>
    </Frame>
  );
};
