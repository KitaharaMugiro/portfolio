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
  Link,
} from "../../components/ProductStyledComponents";

const slug = "travel-thru";
const description = "オンライン旅行を楽しめるアプリ(iOS/Web)";
const difficulty = "デザイナと協働してアプリを作成した";
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
      <Link href="https://qiita.com/yuno_miyako/items/3356e98ea9971866bbab">
        ・ストリートビューでオンライン旅行できるサービスを作った
      </Link>
      <Link href="https://qiita.com/yuno_miyako/items/03371e4af95d6fc56a12">
        ・リーンスタートアップで個人開発の成功率を上げる
      </Link>
      <br />
      <Link href="https://shiken-maker.herokuapp.com">・テストメーカー</Link>
    </Frame>
  );
};
