import React from "react";
import styled from "styled-components";

const ModalWrap = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  overflow: auto;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  mac-width: 600px;
  margin: 0 auto;
`;

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
};
const PayModal = ({ children, handleClose }: Props) => {
  return (
    <ModalWrap onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrap>
  );
};

export default PayModal;
