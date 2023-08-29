import React, { useEffect } from "react";
import { useAppContext } from "../context.jsx";
import { styled } from "styled-components";
import img from "../assets/images/farag.png";
import { Link } from "react-router-dom";
import { Loading, LetterElement } from "../components";
const About = () => {
  const { isLoading, setIsLoading } = useAppContext();
  let title = "A b o u t . . A h m e d . . F a r ag";

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading loader={"main"}></Loading>;
  }

  return (
    <Wrapper>
      <div className="container">
        <h1>
          {title.split(" ").map((letter, index) => {
            return <LetterElement key={index} index={index} letter={letter} />;
          })}
        </h1>
        <div className="wrapper">
          <header>
            <img src={img} alt="farag" />
            <p>
              I'm Ahmed, a Mern Stack developer. I’m passionate about building user-friendly and visually appealing websites and applications.
            </p>
          </header>

          <div className="content">
            <p>
              I have built big projects, such as a jobs platform and an e-commerce store. I am passionate about learning new technologies and using them to create innovative solutions. I am also a team player and I enjoy working with others to achieve common goals.
            </p>
          </div>

          <div className="sum">
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>SAAS</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>React</li>
                <li>Redux</li>
                <li>React-Styled-Components</li>
                <li>Typescript</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Mongo DB</li>
              </ul>
            </div>

            <div className="cert">
              <h2>Licenses & certifications</h2>
              <ul>
                <li>
                  <Link
                    to={
                      "https://www.udemy.com/certificate/UC-22a0ccd7-d5cb-48e7-9926-20c16ab88595/"
                    }
                  >
                    React 18 Tutorials and Projects Course 2023
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      "https://www.udemy.com/certificate/UC-ba633535-7150-4ff3-a079-c87b7448926c/"
                    }
                  >
                    React-Styled-Components Course
                  </Link>
                </li>
                <li>

                  Front-End Diploma in Route Academy IT Center

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  margin-top: 100px;
  padding: 50px 0;
  .container {
    h1 {
      /* text-align: center; */
      font-size: 40px;
      margin-bottom: 50px;
      display: flex;
      gap: 5px;
    }
    .wrapper {
      p {
        font-size: 20px;
        line-height: 1.4;
      }
      header {
        display: flex;
        gap: 10px;
        align-items: center;
        img {
          width: 100px;
          border-radius: 50%;
        }
      }
      .content {
        margin-top: 25px;
        a {
          color: #02029b;
          border-bottom: 1px solid blue;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      .sum {
        margin-top: 50px;
        div {
          &:not(:last-child) {
            margin-bottom: 25px;
          }
          h2 {
            margin-bottom: 15px;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            li {
              font-size: 18px;
            }
          }

          &.skills {
            ul {
              li {
                width: calc(50% - 15px / 2);
              }
            }
          }

          &.cert {
            ul {
              display: flex;
              flex-direction: column;
              li {
                width: 100%;
                border: 1px solid #999;
                width: fit-content;
                padding: 10px;
                a {
                  color: #02029b;
                  /* border-bottom: 1px solid blue; */
                  &:hover {
                    opacity: 0.7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    /* padding: 30px 0; */
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 70px;
    .container {
      h1 {
        font-size: 35px;
        gap: 2px;
      }
      .wrapper {
        p {
          font-size: 16px;
        }
      }
    }
  }
`;
export default About;
