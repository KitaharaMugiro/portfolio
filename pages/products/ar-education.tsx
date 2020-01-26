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

const slug = "ar-education";
const architectImage = getPath("/ar-education-architecture.png");
const description =
  "ARを利用したプロダクトを3人チームで作成した。物理シミュレーションをARで再現し、より科学が身近に感じられるような教材を作成した。";
const difficulty =
  "ARを使うことだけが条件でプロダクトの内容は自由に決定する必要があったのでテーマ決めに難航した。評価軸と評価軸の重みを議論し、ブレインストーミングで出した題材についてそれぞれの評価軸で採点することで得点化させて決定した。これによりなぜそれをやるのか、を説明することができた。";
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
