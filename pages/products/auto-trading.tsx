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

const slug = "auto-trading";
const architectImage = getPath("/auto-trading-architect.png");
const description =
  "株価の予測ができるか興味で始めたデータ分析から売買を最適化する方法を見つけて自動売買のプロダクトを作成した。どの学習モデルが予測に最適化検証している中で、全ての学習機を平均させたモデルが最も成績がよかったことからアンサンブル学習を基軸としたモデルを構成した。";
const difficulty =
  "①株価の上がり下がりを予測しようとしたが成果が全く出なかった。そこで「多数ある銘柄のうちどれを買うのが良いのか」を評価軸として教師データを作成した。 ②過去のデータで学習させ、未来のデータでフォワードテスト/バーチャル取引のテスト/実売買のテストを行った。利益で評価するとばらつきが大きくモデルがうまくいっているかの評価が難しかった。市場平均との差が一定してプラスであることを発見しそれを評価軸とした。";
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
      <Link href="https://qiita.com/yuno_miyako/items/1357684a7618e210c3c6">
        Qiita「機械学習で株取引を半年してみた結果」
      </Link>
    </Frame>
  );
};
