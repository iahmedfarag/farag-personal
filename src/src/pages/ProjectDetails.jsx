import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { portfolio } from "../data.js";
import { useParams, Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { useAppContext } from "../context.jsx";
import Loading from "../components/Loading.jsx";

const ProjectDetails = () => {
  const { setIsLoading, isLoading } = useAppContext();
  const { category, id } = useParams();
  const [project, setProject] = useState(null);
  // console.log(project);
  useEffect(() => {
    setIsLoading(true);
    if (category === "projects") {
      const proj = portfolio.projects.find((item) => item.id === id);
      console.log(proj);
      setProject({ ...proj });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    if (category === "extra") {
      const proj = portfolio.extra.find((item) => item.id == id);
      setProject({ ...proj });

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading loader={"portfolio"}></Loading>;
  }

  if (project) {
    return (
      <Wrapper>
        <div className="container">
          <h1>
            <Link to="/portfolio">Portfolio</Link> <span> / </span>
            {project?.title}
          </h1>
          <div className="wrapper">
            <div className="images">
              {project?.images?.map((img, index) => {
                return <img key={index} src={img} />;
              })}
            </div>

            <div className="info">
              <h2>{project?.title}</h2>

              <div>
                <p>
                  {project?.description}
                  <span></span>
                </p>
              </div>

              <div>
                <h3>Features</h3>
                <ul>
                  {project?.features?.map((feature, index) => {
                    return (
                      <li key={index}>
                        {feature}
                        <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  {project?.skills?.map((skill, index) => {
                    return (
                      <li key={index}>
                        {skill} <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <Link to={project?.urls?.demo}>
                  Visit Website <BsFillShareFill />
                </Link>
                <Link to={project?.urls?.git}>
                  Github <AiFillGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.main`
  margin-top: 100px;

  padding: 50px 0;
  .container {
    h1 {
      margin-bottom: 50px;
      color: var(--color-red);
      span {
        color: var(--color-black);
        user-select: none;
      }
      a {
        color: var(--color-black);
        transition: 0.1s;
        &:hover {
          color: var(--color-red);
        }
      }
    }
    .wrapper {
      display: flex;
      gap: 40px;
      .images {
        width: calc(60% - 20px);
        height: 700px;
        overflow-y: scroll;
        img {
          width: 100%;
        }
      }
      .info {
        width: calc(40% - 20px);
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          p,
          li {
            line-height: 1.2;
            position: relative;
            padding-left: 10px;
            span {
              position: absolute;
              height: 100%;
              width: 2px;
              background-color: var(--color-red);
              left: 0;
              top: 0;
            }
          }
          a {
            display: flex;
            align-items: center;
            gap: 5px;
            transition: 0.1s;
            &:hover {
              color: var(--color-red);
            }
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          &:last-child {
            flex-direction: row;
            gap: 20px;
          }
          h3 {
            border-bottom: 1px solid var(--color-red);
            padding-bottom: 5px;
          }
          &.skills {
            ul {
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              li {
                width: calc(50% - 15px);
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      .wrapper {
        gap: 20px;

        .images {
          width: calc(60% - 10px);
        }
        .info {
          width: calc(40% - 10px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .wrapper {
        flex-wrap: wrap;
        gap: 30px;

        .images {
          width: calc(100%);
          height: 400px;
        }
        .info {
          width: calc(100%);
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 70px;
  }
`;
export default ProjectDetails;
