import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React from "react";
import { getTagList, ProductList } from "../contents/ProductList";
import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  onCheck: (checked: any) => void;
  all: boolean;
  onClickAll: () => void;
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
    return getTagList(ProductList).map(label => {
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
      <h3>タグから絞り込む</h3>
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
