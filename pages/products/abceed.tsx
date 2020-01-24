import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";

const slug = "abceed";
const architectImage = getPath("/abceed-architect.png");
const description =
  "TOEIC NO1アプリ「abceed」のアプリエンジニアを担当。iOSとandroidを両輪で開発。また法人向けにアプリの機能をWebで再現。その他に紙の本を電子データ化させるためにOCRで効率化するなど業務の自動化を行った。";
const difficulty =
  "業務としてのプログラミングが初経験だったため、趣味としてのプログラミングとの違いを意識することが難しかった。思いやりのある設計や、バグのないコーディング、既存のコードへの接し方、作業の見積もりなど、多くをここで学んだ。";
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
      <Link href="https://www.abceed.com/">AI英語教材アプリ abceed</Link>
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
