import { useState, useEffect } from "react";
import ProductGrid from "../../components/ProductGrid";
import { Tag, Product, ProductList } from "../../contents/ProductList";
import TagCheckList from "../../components/TagCheckList";
import TypeRadioList from "../../components/TypeRadioList";
import styled from "styled-components";
import ModalView from "../../components/ModalView";
import Campwill from "./campwill";
import { getComponentFromSlug } from "../../models/getComponentFromSlug";

export default () => {
  const [type, setType] = useState("全て");
  const [all, setAll] = useState(true);
  const [filter, setFilter] = useState<Tag[]>([]);
  const [targetProduct, setTargetProduct] = useState<Product[]>(ProductList);
  const [openModal, setOpenModal] = useState(false);
  const [clickedProduct, setClickedProduct] = useState<Product>();

  useEffect(() => {
    const filterProducts = () => {
      const products = ProductList.filter(product => {
        if (all) return true;
        if (filter.length === 0) return false;
        let result = true;
        filter.forEach(f => {
          result = result && product.tags.includes(f);
        });
        return result;
      }).filter(product => {
        if (type === "全て") return true;
        return type === product.type;
      });
      setTargetProduct(products);
    };
    filterProducts();
  }, [type, all, filter]);

  const onCheck = (checked: { [key: string]: boolean }) => {
    const filter = Object.keys(checked).filter(key => checked[key]) as Tag[];
    let all = filter.length === 0;
    setAll(all);
    setFilter(filter);
  };

  const onClickProduct = (product: Product) => {
    setClickedProduct(product);
    setOpenModal(true);
  };

  const renderComponent = () => {
    if (clickedProduct?.slug) {
      return <div>{getComponentFromSlug(clickedProduct.slug)}</div>;
    }
    return <div></div>;
  };

  return (
    <div>
      <TypeRadioList type={type} onChangeType={type => setType(type)} />
      <Spacer />
      <TagCheckList
        onCheck={onCheck}
        all={all}
        onClickAll={() => setAll(!all)}
        targetProducts={targetProduct}
      />
      <ProductGrid products={targetProduct} onClickProduct={onClickProduct} />
      <ModalView open={openModal} onClickClose={() => setOpenModal(false)}>
        {renderComponent()}
      </ModalView>
    </div>
  );
};

const Spacer = styled.div`
  height: 20px;
`;
