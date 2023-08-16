import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { styled } from "styled-components";

const UpArrow = () => {
  return (
    <Wrapper>
      <BsArrowUp />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 24px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: var(--color-red);
`;
export default UpArrow;
