import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { getTagList, Product } from "../contents/ProductList";

interface Props {
  onCheck: (checked: any) => void;
  all: boolean;
  onClickAll: () => void;
  targetProducts: Product[];
}

export default (props: Props) => {
  const [state, setState] = React.useState<any>({});

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newState = { ...state, [name]: event.target.checked };
    setState(newState);
    console.log(newState);
    props.onCheck(newState);
  };

  const renderCheckBoxs = () => {
    return getTagList(props.targetProducts).map(label => {
      const checked = state[label] || false;
      return (
        <FormControlLabel
          key={label}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange(label)}
              color="primary"
            />
          }
          label={label}
        />
      );
    });
  };

  return (
    <Frame>
      <TestH3>タグから絞り込む</TestH3>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.all}
              onChange={props.onClickAll}
              indeterminate
            />
          }
          label="全選択"
        />
        {renderCheckBoxs()}
      </FormGroup>
    </Frame>
  );
};

const Frame = styled.div`
  padding: 15px;
  max-width: 1000px;
  background-color: ${colors.mediumColor};
`;

const TestH3 = styled.h3`
  color: red;
`;
