import { Button, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { contents } from "../models/contents";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { catchcopy } from "../models/catchcopy";

export default () => {
  const router = useRouter();
  const renderButtons = () => {
    return contents.map(content => {
      return (
        <Box m={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push(content.link)}
          >
            {content.name}
          </Button>
        </Box>
      );
    });
  };

  return (
    <div>
      <CenterText>
        <MainText>{catchcopy.title}</MainText>
        <SubText>{catchcopy.subText}</SubText>
      </CenterText>
      <Spacer />
      <Spacer />
      <Spacer />
      <Center>
        <Box display="flex" flexDirection="row">
          {renderButtons()}
        </Box>
      </Center>
      <Spacer />
    </div>
  );
};

const MainText = styled.h1`
  color: ${colors.mainTextBlack};
`;

const SubText = styled.h3`
  color: ${colors.subTextBlack};
`;

const CenterText = styled.div`
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Spacer = styled.div`
  height: 20px;
`;
