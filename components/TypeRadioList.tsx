import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import React from "react";
import { getTagList, ProductList, Type } from "../contents/ProductList";
import { Paper, Typography, RadioGroup, Radio } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  type: string;
  onChangeType: (type: string) => void;
}

export default (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = (event.target as HTMLInputElement).value;
    props.onChangeType(type);
  };

  return (
    <Frame>
      <h3>タイプから絞り込む</h3>
      <RadioGroup value={props.type} onChange={handleChange}>
        <FormControlLabel value="全て" control={<Radio />} label="全て" />
        <FormControlLabel
          value={Type.work}
          control={<Radio />}
          label={Type.work}
        />
        <FormControlLabel
          value={Type.personal}
          control={<Radio />}
          label={Type.personal}
        />
        <FormControlLabel
          value={Type.intern}
          control={<Radio />}
          label={Type.intern}
        />
      </RadioGroup>
    </Frame>
  );
};

const Frame = styled.div`
  padding: 15px;
  max-width: 1000px;
  background-color: ${colors.mediumColor};
`;
