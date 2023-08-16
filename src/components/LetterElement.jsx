import React, { useEffect } from "react";
import { styled } from "styled-components";

const LetterElement = ({ letter, index }) => {
  let clas = index % 2 == 0 ? "animate__swing" : "animate__swing";

  const hoverd = (el) => {
    el.classList.remove("animate__slow");
    el.classList.add("animate__heartBeat");
  };

  const left = (el) => {
    setTimeout(() => {
      el.classList.remove("animate__heartBeat");
    }, 1000);
  };

  if (letter === "g") {
    return (
      <Wrapper
        style={{ color: "#A7233A" }}
        className="animate__animated"
        onMouseEnter={(e) => hoverd(e.target)}
        onMouseLeave={(e) => left(e.target)}
      >
        {letter}
      </Wrapper>
    );
  }

  if (letter === ".") {
    return <Wrapper> </Wrapper>;
  }

  return (
    <Wrapper
      className={`animate__animated animate__slow  ${clas}`}
      onMouseEnter={(e) => hoverd(e.target)}
      onMouseLeave={(e) => left(e.target)}
    >
      {letter}
    </Wrapper>
  );
};
const Wrapper = styled.span`
  user-select: none;
`;
export default LetterElement;
