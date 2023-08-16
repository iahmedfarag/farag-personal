import React from "react";
import { styled } from "styled-components";
import LetterElement from "./LetterElement.jsx";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import DownArror from "./DownArror.jsx";
import UpArrow from "./UpArrow.jsx";
import { Link } from "react-router-dom";
import cv from "../assets/ahmed_farag_front_end_react_cv.pdf";

const Hero = () => {
  let hi = "h i ,";
  let im = "i ' m  . f a r a g , ";
  //   let web = "w e b . d e v e l o p e r ";
  let dev = "f r o n t . e n d . . d e v e l o p e r";

  let isScrolled = false;
  return (
    <Wrapper>
      <div className="container">
        {isScrolled && (
          <>
            <DownArror />
            <UpArrow />
          </>
        )}

        <div className="wrapper">
          <div className="content">
            <h2>
              {hi.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
            <h2>
              {im.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
            <h2>
              {dev.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
          </div>
          <button className="main-btn">
            <a href={cv} download={"ahmed_farag_front_end_react_cv"}>
              <p>Download CV</p>
            </a>
            <span></span>
          </button>
        </div>

        <div className="icons">
          <Link
            to={"https://github.com/iahmedfarag"}
            className="git animate__animated animate__bounceIn animate__repeat-2	animate__delay-1s animate__slow	"
          >
            <AiFillGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/ahmed-farag-16433b260/"}
            className="linked animate__animated animate__bounceIn animate__repeat-2	animate__delay-1s	animate__slow"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-family: "Acme", sans-serif;
  /* padding: 200px 0; */
  margin-top: 100px;

  .container {
    position: relative;

    .wrapper {
      height: calc(100vh - 100px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;

      .content {
        display: flex;
        flex-direction: column;
        gap: 0px;
        h2,
        h3 {
          display: flex;
          gap: 10px;
          margin: 0;
        }
        h2 {
          font-size: 80px;
          text-transform: uppercase;
        }
        h3 {
          font-size: 50px;
        }
      }
    }
    .icons {
      position: absolute;
      top: 25%;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      gap: 50px;
      a {
        font-size: 30px;

        &:hover {
          opacity: 0.5;
          color: var(--color-red);
        }
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      .wrapper {
        .content {
          h2 {
            font-size: 50px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .wrapper {
        .content {
          gap: 10px;
          h2 {
            font-size: 40px;
            gap: 7px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    margin-top: 70px;
    padding: 0 10px;
    .container {
      .wrapper {
        height: calc(100vh - 70px);

        .content {
          h2:last-child {
            font-size: 28px;
            gap: 4px;
          }
        }
      }
    }
  }
`;
export default Hero;
