import React from "react";
import { styled } from "styled-components";
import icon from "../assets/images/logo/favicon3.ico";
import { navLinks } from "../data.js";
import { Link } from "react-router-dom";
import cv from "../assets/ahmed_farag_front_end_react_cv.pdf";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          {/* logo */}
          <div className="logo">
            <Link to="/">
              <img src={icon} alt="logo" />
            </Link>
          </div>
          {/* nav links */}
          <div className="nav-links">
            <ul>
              {navLinks.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* fill */}
          <div className="cv">
            <buton className="main-btn">
              <a href={cv} download={"ahmed_farag_front_end_react_cv"}>
                <p>Download CV</p>
                <span></span>
              </a>
            </buton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 55;

  font-family: "Acme", sans-serif;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .container {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
      }
      .nav-links {
        ul {
          display: flex;
          gap: 20px;
          li {
            a {
              font-size: 24px;
              padding: 10px;
              transition: 0.1s;
              &:hover {
                /* box-shadow: rgba(172, 22, 22, 0.2) 0px 2px 8px 0px; */
                color: var(--color-red);
              }
            }
          }
        }
      }
      .cv {
        .main-btn {
          background-color: var(--color-red);
          color: var(--color-white);
          span {
            background-color: var(--color-white);
          }
          &:hover {
            color: var(--color-black);
          }
        }
      }
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  @media (max-width: 768px) {
    .container {
      .wrapper {
        .nav-links {
          ul {
            gap: 10px;
            li {
              a {
                font-size: 20px;
              }
            }
          }
        }

        .cv {
          /* display: none; */
          .main-btn {
            padding: 6px 12px;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    height: 70px;

    .container {
      .wrapper {
        .nav-links {
          ul {
            /* gap: 0px; */
            li {
              a {
                font-size: 20px;
              }
            }
          }
        }

        .cv {
          display: none;
        }
      }
    }
  }
`;
export default Navbar;
