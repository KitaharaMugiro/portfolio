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

const slug = "goal-achivement";
const description =
  "毎日やりたいことを設定し、それが達成したかどうかを管理するアプリ。定期的な通知で確認をしてくれるのでサボりがちな自分のお尻を叩いてくれた。";
const difficulty =
  "ReactNativeの勉強になり、従来のXcodeなどの開発方法と大きく異なることを学んだ。";
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
      <HeaderLine>苦労したこと/どう乗り越えたか</HeaderLine>
      <Description>{difficulty}</Description>
      <HeaderLine>Github</HeaderLine>
      <Link href="https://github.com/KitaharaMugiro/TaskManagerReactNative">
        TaskManagerReactNative
      </Link>
    </Frame>
  );
};
