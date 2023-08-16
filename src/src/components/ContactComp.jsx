import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import LetterElement from "./LetterElement";
import AOS from "aos";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactComp = () => {
  const form = useRef();
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let title = "C o n t a c t . . m e";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wy2d0b3",
        "template_k0mytc9",
        form.current,
        "4YWwdpL9ywyxBJtp7"
      )
      .then(
        (result) => {
          toast.success("Thank you for your message :)");
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <section className="form">
            <header>
              <h2>
                {title.split(" ").map((letter, index) => {
                  return (
                    <LetterElement key={index} index={index} letter={letter} />
                  );
                })}
              </h2>
              <p>
                I am always happy to hear from potential clients and partners.
                If you are interested in working with me, please feel free to
                contact me through my website. I would be happy to discuss your
                needs and see if I can be of assistance.
              </p>
            </header>

            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    value={values.name}
                    onChange={(e) => {
                      setValues({ ...values, name: e.target.value });
                    }}
                  />
                  <span></span>
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="from_name"
                    value={values.email}
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                    }}
                  />
                  <span></span>
                </div>
              </div>

              <div className="row">
                <div>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={(e) => {
                      setValues({ ...values, subject: e.target.value });
                    }}
                  />
                  <span></span>
                </div>
              </div>

              <div className="row">
                <div>
                  <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    name="message"
                    value={values.message}
                    onChange={(e) => {
                      setValues({ ...values, message: e.target.value });
                    }}
                  ></textarea>
                  <span></span>
                </div>
              </div>

              <button
                type="submit"
                className="main-btn"
                value="Send"
                disabled={
                  (values.name !== "" &&
                    values.name !== " " &&
                    values.email !== "" &&
                    values.email !== " " &&
                    values.message !== "" &&
                    values.message !== " " &&
                    values.email !== " ") == true
                    ? false
                    : true
                }
              >
                <p>Send message!</p>
                <span></span>
              </button>
            </form>
          </section>

          <section
            className="info"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <ul>
              <li>Giza, Egypt</li>
              <li>ahmedfarag1k@gmail.com</li>
              <li>+0201069858429</li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/ahmed-farag-16433b260/"}
                  target="_blank"
                >
                  <AiFillLinkedin />
                </Link>
                <Link to={"https://github.com/iahmedfarag"} target="_blank">
                  <AiFillGithub />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 50px 0;
  .wrapper {
    display: flex;
    gap: 10px;
    .form {
      header {
        h2 {
          font-size: 40px;
          margin-bottom: 20px;
          color: var(--color-red);
          display: flex;
          gap: 5px;
        }
        p {
          line-height: 1.3;
          margin-bottom: 20px;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .row {
          width: 100%;
          display: flex;
          gap: 20px;
          div {
            width: 100%;
            display: flex;
            gap: 10px;
            input,
            textarea {
              width: 100%;
              padding: 15px;
              border: none;
              outline: none;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              &:focus ~ span {
                width: 100%;
              }
            }
            &,
            div {
              position: relative;
              span {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0px;
                height: 2px;
                background-color: var(--color-red);
                transition: 0.3s;
              }
            }
          }
        }
        button {
          /* margin-left: auto; */
          margin-top: 20px;
        }
      }
    }
    .info {
      background-color: var(--color-white);
      padding: 10px;
      padding-bottom: 50px;
      align-self: flex-end;
      position: relative;
      /* &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 10px;
        background-color: var(--color-grey);
        top: 75%;
        transform: translateY(-50%);
        left: 0;
      } */
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        a {
          margin-right: 10px;
          font-size: 20px;
          transition: 0.2s;
          &:hover {
            color: var(--color-red);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      flex-wrap: wrap;
      .form {
      }
      .info {
        width: 100%;
        padding-bottom: 10px;

        &::after {
          width: 10px;
          height: 100%;
          background-color: var(--color-grey);
          top: 0%;
          left: 65%;
          transform: translateY(0);
          transform: translateX(-50%);
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    .wrapper {
      .form {
      }
      .info {
        margin-top: 20px;
        &::after {
          left: 65%;
        }
      }
    }
  }
`;
export default ContactComp;
