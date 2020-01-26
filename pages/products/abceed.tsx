import Chips from "../../components/Chips";
import {
  Description,
  Frame,
  HeaderLine,
  Image,
  Link,
  Title
} from "../../components/ProductStyledComponents";
import { getPath } from "../../constants/utils";
import { ProductList } from "../../contents/ProductList";

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
      return <Image src={getPath(product.image)} onClick={() => (window.location.href = "/products/" + slug)} ></Image>;
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
        onClick={() => (window.location.href = "/products/" + slug)}
      ></Image>
      <HeaderLine>苦労したこと/どう乗り越えたか</HeaderLine>
      <Description>{difficulty}</Description>
      <HeaderLine>詳細リンク</HeaderLine>
      <Link href="https://www.abceed.com/">AI英語教材アプリ abceed</Link>
    </Frame>
  );
};
