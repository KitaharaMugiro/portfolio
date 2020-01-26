import React from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import { colors } from "../constants/colors";

interface Props {
  open: boolean;
  onClickClose: () => void;
  children: React.ReactChild;
}

export default (props: Props) => {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.onClickClose}
      >
        <Container>{props.children}</Container>
      </Modal>
    </div>
  );
};

const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;

  position: absolute;
  width: 90%;
  height: 80%;
  max-width: 500px;
  max-height: 700px;
  background-color: ${colors.whiteColor};
  border: 2px solid #000;
  padding: 20px;
  padding-bottom: 50px;
  filter: drop-shadow(20px);
`;
