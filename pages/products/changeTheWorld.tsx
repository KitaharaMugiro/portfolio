import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";

const slug = "changeTheWorld";
const architectImage = getPath("/changeTheWorld-architect.png");
const description =
  "熱い思いと共にGithub/Slack/Twitterなどへの導線を用意したポストをすることができるWebサービス。5時間で作成した。";
const difficulty =
  "Webサービスを作るにあたって時間がかかる工程を一切省き、とにかくスピードを上げてPoCを作ることに専念した。詳しくは以下のQiitaリンクに工夫したことを列挙している。";
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
      <Link href="https://qiita.com/yuno_miyako/items/314510e4e4b11a080fe3">
        5時間でWebサービスをローンチするためにした７つのこと
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
