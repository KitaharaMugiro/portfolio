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

const slug = "adapp2";
const architectImage = getPath("/adapp2-architect.png");
const description =
  "「RTした人の中から抽選で10名にプレゼント」をサービス化した。実際にアマゾンギフト券をこのサービスを使って抽選したところ数分で500RTされ月間5万PVを達成した。";
const difficulty =
  "Twitter APIの制限が厳しくリクエストが失敗することが多い一方で「リツイートしたのに結果のDMがこない」という障害が信頼に関わる問題であった。Job workerアーキテクチャを採用してこの問題に対応した。";
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
      <HeaderLine>詳細リンク</HeaderLine>
      <Link href="https://qiita.com/yuno_miyako/items/5e8ca0ec49a8ccb01ad2">
        【個人開発】プレゼントキャンペーンを開けるWebサービスをサーバレスで作ってみた
      </Link>
    </Frame>
  );
};
