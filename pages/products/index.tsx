import { useState } from "react";
import ProductGrid from "../../components/ProductGrid";
import { Tag } from "../../contents/ProductList";
import TagCheckList from "../../components/TagCheckList";
import TypeRadioList from "../../components/TypeRadioList";
import styled from "styled-components";

export default () => {
  const [filter, setFilter] = useState<Tag[]>([]);
  const [type, setType] = useState("全て");
  const [all, setAll] = useState(true);
  const onCheck = (checked: { [key: string]: boolean }) => {
    const keys = Object.keys(checked).filter(key => checked[key]) as Tag[];
    setFilter(keys);
    if (keys.length === 0) {
      setAll(true);
    } else {
      setAll(false);
    }
  };

  return (
    <div>
      <TypeRadioList type={type} onChangeType={type => setType(type)} />
      <Spacer />
      <TagCheckList
        onCheck={onCheck}
        all={all}
        onClickAll={() => setAll(!all)}
      />
      <ProductGrid filter={filter} all={all} type={type} />
    </div>
  );
};

const Spacer = styled.div`
  height: 20px;
`;
