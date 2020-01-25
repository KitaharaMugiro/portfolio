import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";

const slug = "test-maker";
const architectImage = getPath("/test-maker-architect.png");
const description = "偏差値が出るテストを作って各SNSで共有できるサービス";
const difficulty =
  "アジャイル開発を大きく取り入れ、インセプションデッキを作成し、コアな機能から取り組む方法で開発を行った。";
export default () => {
  const product = ProductList.find(p => p.slug === slug);

  const renderImage = () => {
    if (product?.image) {
      return <Image src={getPath(product.image)}></Image>;
    }
  };

  if (!product) {
    console.error("見つかりません");
    return;
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
      <HeaderLine>詳細リンク</HeaderLine>
      <Link href="https://qiita.com/yuno_miyako/items/e772a0b2ef820059b22d">
        インクリメンタルな開発によって5日でWebアプリをこさえた話【個人開発】
      </Link>
    </Frame>
  );
};

const Title = styled.h1``;

const Link = styled.a`
  font-size: 20px;
`;

const Description = styled.h3`
  color: rgba(255, 255, 255, 0.7);
`;

const HeaderLine = styled.h2``;

const Image = styled.img`
  height: 300px;
`;

const Frame = styled.div`
  background-color: ${colors.gray};
  color: white;
`;
