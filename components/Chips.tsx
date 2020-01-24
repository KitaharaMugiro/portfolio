import { Chip } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  tags: string[];
}

export default (props: Props) => {
  return (
    <Root>
      {props.tags.map(tag => {
        return <Chip label={tag} key={tag} />;
      })}
    </Root>
  );
};

const Root = styled.div`
  display: "flex";
  justify-content: "center";
  flex-wrap: "wrap";
  & > * {
    margin: 3px;
  }
`;
