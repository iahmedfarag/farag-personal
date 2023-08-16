import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { portfolio as projects } from "../data.js";
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowDown,
  BsArrowUp,
} from "react-icons/bs";
import Project from "./Project.jsx";
import AOS from "aos";
import LetterElement from "./LetterElement.jsx";

const Portfolio = ({ showExtra }) => {
  const [isExtra, setIsExtra] = useState(false);
  const extraRef = useRef(null);
  const extraStyles = {
    maxHeight: isExtra ? `${extraRef.current.scrollHeight + "px"}` : "0px",
  };
  let title = "P o r t f o l i o";
  AOS.init();

  return (
    <Wrapper>
      <div className="container">
        <h2>
          {title.split(" ").map((letter, index) => {
            return <LetterElement key={index} index={index} letter={letter} />;
          })}
        </h2>
        <div className="wrapper">
          <div className="projects">
            {projects.projects.map((project) => {
              const { id, thumbnail, title, short_description, urls } = project;
              return (
                <Project
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  title={title}
                  short_description={short_description}
                  urls={urls}
                  category={"projects"}
                />
              );
            })}
          </div>
          {showExtra && (
            <button
              className="main-btn"
              onClick={() => setIsExtra(!isExtra)}
              data-aos="fade-in"
            >
              <p>Extra Projects {!isExtra ? <BsArrowDown /> : <BsArrowUp />}</p>

              <span></span>
            </button>
          )}

          <div className="projects extra" ref={extraRef} style={extraStyles}>
            {projects.extra.map((project) => {
              const { id, thumbnail, title, short_description, urls } = project;
              return (
                <Project
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  title={title}
                  short_description={short_description}
                  urls={urls}
                  category={"extra"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 50px 0;
  overflow: hidden;
  .container {
    h2 {
      margin-bottom: 50px;
      font-size: 40px;
      /* letter-spacing: 5px; */
      font-family: "Acme", sans-serif;
      display: flex;
      gap: 5px;
      /* margin: 0; */
    }
    .wrapper {
      .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        &.extra {
          margin-top: 50px;
          overflow: hidden;
          transition: 0.5s;
          max-height: 0;
        }
      }
      .main-btn {
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        align-items: center;
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      .wrapper {
        .projects {
          gap: 20px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export default Portfolio;
