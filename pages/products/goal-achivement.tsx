import { ProductList } from "../../contents/ProductList";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getPath } from "../../constants/utils";
import Chips from "../../components/Chips";

const slug = "goal-achivement";
const description =
  "毎日やりたいことを設定し、それが達成したかどうかを管理するアプリ。定期的な通知で確認をしてくれるのでサボりがちな自分のお尻を叩いてくれた。";
const difficulty =
  "ReactNativeの勉強になり、従来のXcodeなどの開発方法と大きく異なることを学んだ。";
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
      <HeaderLine>苦労したこと/どう乗り越えたか</HeaderLine>
      <Description>{difficulty}</Description>
      <HeaderLine>Github</HeaderLine>
      <Link href="https://github.com/KitaharaMugiro/TaskManagerReactNative">
        TaskManagerReactNative
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
