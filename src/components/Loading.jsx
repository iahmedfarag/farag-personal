import React from "react";
import { styled } from "styled-components";

const Loading = ({ loader }) => {
  return (
    <Wrapper>
      <span className={`${loader}`}></span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .main {
    width: 106px;
    height: 56px;
    display: block;
    margin: 30px auto;
    background-image: linear-gradient(var(--color-black-4) 50px, transparent 0),
      linear-gradient(var(--color-black-4) 50px, transparent 0),
      linear-gradient(var(--color-black-4) 50px, transparent 0),
      linear-gradient(var(--color-black-4) 50px, transparent 0),
      radial-gradient(circle 14px, var(--color-black-4) 100%, transparent 0);
    background-size: 48px 15px, 15px 35px, 15px 35px, 25px 15px, 28px 28px;
    background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
    background-repeat: no-repeat;
    position: relative;
    transform: rotate(-45deg);
    box-sizing: border-box;
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 56px;
      height: 56px;
      border: 6px solid var(--color-black);
      border-radius: 50%;
      left: -45px;
      top: -10px;
      background-repeat: no-repeat;
      background-image: linear-gradient(var(--color-red) 64px, transparent 0),
        linear-gradient(var(--color-red) 66px, transparent 0),
        radial-gradient(circle 4px, var(--color-black) 100%, transparent 0);
      background-size: 40px 1px, 1px 40px, 8px 8px;
      background-position: center center;
      box-sizing: border-box;
      animation: rotation 0.3s linear infinite;
    }
    &::before {
      left: 25px;
      top: 60px;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .contact {
    position: relative;
    border-style: solid;
    box-sizing: border-box;
    border-width: 40px 60px 30px 60px;
    border-color: var(--color-red) var(--color-red-darker) var(--color-red)
      var(--color-red-dark);
    animation: envFloating 1s ease-in infinite alternate;

    &:after {
      content: "";
      position: absolute;
      right: 62px;
      top: -40px;
      height: 70px;
      width: 50px;
      background-image: linear-gradient(var(--color-red) 45px, transparent 0),
        linear-gradient(var(--color-red) 45px, transparent 0),
        linear-gradient(var(--color-red) 45px, transparent 0);
      background-repeat: no-repeat;
      background-size: 30px 4px;
      background-position: 0px 11px, 8px 35px, 0px 60px;
      animation: envDropping 0.75s linear infinite;
    }

    @keyframes envFloating {
      0% {
        transform: translate(-2px, -5px);
      }
      100% {
        transform: translate(0, 5px);
      }
    }

    @keyframes envDropping {
      0% {
        background-position: 100px 11px, 115px 35px, 105px 60px;
        opacity: 1;
      }
      50% {
        background-position: 0px 11px, 20px 35px, 5px 60px;
      }
      60% {
        background-position: -30px 11px, 0px 35px, -10px 60px;
      }
      75%,
      100% {
        background-position: -30px 11px, -30px 35px, -30px 60px;
        opacity: 0;
      }
    }
  }

  .portfolio {
    width: 48px;
    height: 48px;
    display: block;
    margin: 20px auto;
    position: relative;
    border: 3px solid var(--color-red);
    border-radius: 50%;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
    &::after {
      content: "";
      box-sizing: border-box;
      width: 6px;
      height: 24px;
      background: var(--color-red);
      transform: rotate(-45deg);
      position: absolute;
      bottom: -20px;
      left: 46px;
    }

    @keyframes animloader {
      0% {
        transform: translate(-10px, -10px);
      }
      25% {
        transform: translate(-10px, 10px);
      }
      50% {
        transform: translate(10px, 10px);
      }
      75% {
        transform: translate(10px, -10px);
      }
      100% {
        transform: translate(-10px, -10px);
      }
    }
  }
`;
export default Loading;
