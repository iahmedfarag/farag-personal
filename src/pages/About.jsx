import { useEffect } from "react";
import { useAppContext } from "../context.jsx";
import { styled } from "styled-components";
import img from "../assets/images/farag.png";
import { Link } from "react-router-dom";
import { Loading, LetterElement } from "../components";
import { nanoid } from "nanoid";
import html from "../assets/images/skills/html.svg"
import css from "../assets/images/skills/css.svg"
import js from "../assets/images/skills/js.svg"
import bootstrap from "../assets/images/skills/bootstrap.svg"
import github from "../assets/images/skills/github.svg"
import react from "../assets/images/skills/react.svg"
import reactStyled from "../assets/images/skills/react-styled-components.png"
import redux from "../assets/images/skills/redux.svg"
import reactQuery from "../assets/images/skills/react-query.svg"
import ts from "../assets/images/skills/ts.svg"
import nodejs from "../assets/images/skills/nodejs.svg"
import express from "../assets/images/skills/express.svg"
import mongodb from "../assets/images/skills/mongodb.svg"
const skills = [
  {
    name: 'HTML',
    img: html,
    id: nanoid(),
  },
  {
    name: 'CSS',
    img: css,
    id: nanoid(),
  },
  {
    name: 'Javascript',
    img: js,
    id: nanoid(),
  },
  {
    name: 'Bootstrap',
    img: bootstrap,
    id: nanoid(),
  },
  {
    name: 'Git & Github',
    img: github,
    id: nanoid(),
  },
  {
    name: 'React',
    img: react,
    id: nanoid(),
  },
  {
    name: 'React-Styled-Components',
    img: reactStyled,
    id: nanoid(),
  },
  {
    name: 'Redux',
    img: redux,
    id: nanoid(),
  },
  {
    name: 'React-Query',
    img: reactQuery,
    id: nanoid(),
  },
  {
    name: 'Typescript',
    img: ts,
    id: nanoid(),
  },
  {
    name: 'Nodejs',
    img: nodejs,
    id: nanoid(),
  },
  {
    name: 'Express',
    img: express,
    id: nanoid(),
  },
  {
    name: 'MongoDB',
    img: mongodb,
    id: nanoid(),
  },
]

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
                {
                  skills.map((skill) => {
                    return <li key={skill.id}>
                      <img src={skill.img} alt="skill-logo" />
                      <p>{skill.name}</p>
                    </li>
                  })
                }
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
            margin-bottom: 20px;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            li {
              font-size: 18px;
            }
          }

          &.skills {
            ul {
              li {
                width: calc(( 100% / 3 ) - (40px / 3));
                display: flex;
                align-items: center;
                gap: 10px;
                img {
                  width: 20px;
                }
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

  @media(max-width: 768px) {
      .container {
        .wrapper {
          .sum {
            div {
              &.skills {
                ul {
                  li {
                    width: calc(( 100% / 2 ) - (20px / 2));

                  }
                }
              }
            }
          }
        }
      }
  }

  @media (max-width: 768px) {
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
