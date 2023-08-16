import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { styled } from "styled-components";
const DownArror = () => {
  return (
    <Wrapper>
      <BsArrowDown />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-size: 24px;
  position: absolute;
  right: 20px;
  top: 0;
  color: var(--color-red);
`;
export default DownArror;
