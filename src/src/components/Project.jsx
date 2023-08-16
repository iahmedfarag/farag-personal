import React, { useState } from "react";
import { styled } from "styled-components";

import { AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
const Project = ({
  id,
  thumbnail,
  title,
  short_description,
  urls,
  category,
}) => {
  AOS.init();

  return (
    <Wrapper key={id} data-aos="fade-left">
      <div className="img">
        <img src={thumbnail} alt="project" />
        <div className="overlay">
          <div>
            <Link to={`/${category}/${id}`}>
              <AiOutlineSearch />
            </Link>
          </div>
        </div>
      </div>

      <div className="info">
        <h3>
          <Link to={`/${category}/${id}`}>{title}</Link>
        </h3>
        <p>{short_description}</p>
        <div>
          <Link to={`/${category}/${id}`} className="more-btn">
            More Details
          </Link>
          <Link to={urls.git} target="_blank">
            <AiFillGithub />
          </Link>
          <Link to={urls.demo} target="_blank">
            <BsFillShareFill />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background-color: var(--color-white);
  width: calc(50% - 20px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .img {
    width: 100%;
    height: 300px;
    position: relative;
    img {
      /* max-width: 100%; */
      /* height: 300px; */
      width: 100%;
      height: 100%;
    }
    &:hover {
      .overlay {
        width: 100%;
        height: 100%;
        div {
          font-size: 60px;
        }
      }
    }
    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0px;
      height: 0px;
      background-color: rgba(0, 0, 0, 0);
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: 0.5s;
      div {
        font-size: 20px;
        color: var(--color-red);
        transition: 0.1s;
        position: relative;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
      a {
        transition: 0.1s;
        &:hover {
          color: var(--color-red);
        }
      }
    }
    p {
      color: var(--color-black-4);
      line-height: 1.5;
    }
    div {
      margin-top: auto;
      display: flex;
      flex-direction: row;
      gap: 20px;
      a {
        transition: 0.1s;

        &:hover {
          color: var(--color-red);
        }
        svg {
          font-size: 18px;
        }
      }
      .more-btn {
        margin-right: auto;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Project;
