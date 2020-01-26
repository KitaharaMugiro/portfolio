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

const slug = "adapp1";
const architectImage = getPath("/adapp1-architect.png");
const description =
  "Twitter連携を利用し、宣伝をしてもらった人にお返しができるサービス";
const difficulty =
  "Webサービスを作成したことがない３人で試行錯誤をしてリリースしたサービス。具体的にどんなことをしたか/何に苦労したかについては下記のQiitaリンクに詳細を記述しています。";
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
      <Link href="https://qiita.com/yuno_miyako/items/d6595719ae7065927499">
        初心者3人でwebサービス(webアプリ)を作ったので、立ち上げからリリースまでを時系列に書いていく
      </Link>
    </Frame>
  );
};
