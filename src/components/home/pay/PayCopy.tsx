import { Copy } from "iconoir-react";
import React from "react";

import { Header, PartyLabel, PartyRow, PayLabel, Wrap } from "./styles";
import styled from "styled-components";

type Props = { handleClose: () => void };

const PayCopy = ({ handleClose }: Props) => {
  const CopyTextButton = styled.button`
    padding: 0;
    border: none;
    background: none;

    svg {
      width: 20px;
      height: 20px;
      padding: 2px;
      color: #999;
      vertical-align: sub;
    }
  `;
  const CloseButton = styled.button`
    border: none;
    width: calc(100% + 40px);
    background: rgba(251, 185, 107);
    bottom: -20px;
    position: relative;
    height: 40px;
    left: -20px;
    right: -20px;
    color: #fdfdfd;
    font-weight: bold;
  `;
  const CopyText = ({ text }: { text: string }) => {
    const handleCopyText = () => {
      const fallbackCopyClipboard = (value: string) => {
        const $text = document.createElement("textarea");
        document.body.appendChild($text);
        $text.value = value;
        $text.select();
        document.execCommand("copy");
        document.body.removeChild($text);
      };

      navigator.clipboard
        .writeText(text)
        .catch(() => fallbackCopyClipboard(text))
        .then(() => alert("계좌번호가 복사 되었습니다."));
    };
    return (
      <>
        <PayLabel>{text}</PayLabel>
        <CopyTextButton onClick={handleCopyText} aria-label="복사">
          <Copy />
        </CopyTextButton>
      </>
    );
  };

  return (
    <Wrap>
      <Header>
        <span>신랑측 계좌번호</span>
      </Header>
      <PartyRow>
        <PartyLabel htmlFor="bride">이창호</PartyLabel>
        <CopyText text="카카오뱅크 7979-42-93459" />{" "}
      </PartyRow>
      <CloseButton onClick={handleClose}>확인</CloseButton>
    </Wrap>
  );
};

export default PayCopy;
