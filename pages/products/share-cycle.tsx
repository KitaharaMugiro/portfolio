import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";

const slug = "share-cycle";
const architectImage = getPath("/share-cycle-architect.png");
const description =
  "IoTを使わずにQRコードとスマートフォンだけでシェアサイクルを実現させた。QRコードの読み込みで解錠し、解錠せずに利用するとアラームが鳴ることで不正利用を防ぐ。";
const difficulty =
  "PoCを作成して公園内に配置して利用されるかをテストする予定だったが、公園の許可がおりず断念した。QRコードを読んでwebアプリケーションを起動しapple payで支払って即座に利用開始するUXを実現することができた。";
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
      <Link href="https://hackmd.io/NqMcAjL0Q-SQbyAzOkqPWg">
        アイディア説明資料
      </Link>
      <HeaderLine>Github</HeaderLine>
      <Link href="https://github.com/KitaharaMugiro/rental-cycle">
        rental-cycle
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
