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

const slug = "changeTheWorld";
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
      <Link href="https://qiita.com/yuno_miyako/items/314510e4e4b11a080fe3">
        ・5時間でWebサービスをローンチするためにした７つのこと
      </Link>
      <br />
      <Link href="https://changeworld.appspot.com/#/">・Change The World</Link>
    </Frame>
  );
};
