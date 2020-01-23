import { Radio, RadioGroup } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { Type } from "../contents/ProductList";

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
      <RadioGroup value={props.type} onChange={handleChange} row>
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
