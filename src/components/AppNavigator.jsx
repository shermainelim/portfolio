import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import sciFi from "../assets/sci-fi-2.png";
import himori from "../assets/Himori.png";
import orangeButton from "../assets/button.png";
import pastelDreams from "../assets/pastel-dreams.png";
import coupleGoals from "../assets/couple-goals.png";
import twilightEnd from "../assets/twilights-end-3d.png";
import logicUniversity from "../assets/logic-university.png";
import minimize from "../assets/minimize.png";
import close from "../assets/close.png";
import tech from "../assets/tech.gif";
import CardProfile from "./CardProfile";
import ReactIcon from "../assets/circular/react.png";
import GithubLogo from "../assets/circular/github-logo.png";
import Javascript from "../assets/circular/javascript.png";
import TypeScript from "../assets/circular/typescript.svg";
import AWS from "../assets/circular/aws.svg";
import Figma from "../assets/circular/figma.svg";
import nodeJS from "../assets/circular/nodeJS.png";
import Gmail from "../assets/circular/gmail.png";
import Linkedin from "../assets/circular/linkedin.png";
import Waves from "../assets/waves.gif";
import "../screens/scss/GlobalStyles.scss";

const AppNavigator = () => {
  const [asmr, setAsmr] = useState(true);
  const [closeAsmr, setCloseAsmr] = useState(false);

  const [about, setAbout] = useState(true);
  const [closeAbout, setCloseAbout] = useState(false);

  const [music, setMusic] = useState(true);
  const [closeMusic, setCloseMusic] = useState(false);

  const [portfolio, setPortfolio] = useState(true);
  const [closePortfolio, setClosePortfolio] = useState(false);

  const [skills, setSkills] = useState(true);
  const [closeSkills, setCloseSkills] = useState(false);

  const [contact, setContact] = useState(true);
  const [closeContact, setCloseContact] = useState(false);

  const playCoupleGoalsDemoVideo = () => {
    return (
      <div style={{position:"absolute"}}><iframe
      width="560" height="315"
      src="https://www.youtube.com/embed/mIRTlowfscw?si=OitLOI_07zSmKciR"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    /></div>
      
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "90%",
        paddingLeft: "3.75rem",
        paddingRight: "3.75rem",
      }}
    >
      <img
        style={{
          display: "block",
          marginTop: "1.25rem",
          objectFit: "cover",
          width: "99%",
          height: "25rem",
          border: "5px solid #FFFAE4",
          marginLeft: "0.7rem",
          borderRadius: "5px",
        }}
        src={sciFi}
        alt="sciFi"
      />

      <hr
        style={{
          marginLeft: "1rem",

          borderColor: "white",
        }}
      />
      <Router>
        <nav
          style={{
            textAlign: "center",
            flexDirection: "row",
            padding: "0.9375rem",
            backgroundImage: "url(../../assets//wall-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "1.125rem",
              color: "gold",
              textDecoration: "none",
              padding: "1.25rem",
              display: "flex",
            }}
          >
            <img
              style={{
                marginTop: "-1.5625rem",
                width: "7.5rem",
                height: "3.75rem",
              }}
              src={orangeButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "white",
                marginLeft: "2rem",
                fontFamily: "Orbitron",
              }}
            >
              Home
            </span>
          </Link>

          <Link
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "1.125rem",
              color: "gold",
              textDecoration: "none",
              padding: "1.25rem",
            }}
          >
            <img
              style={{
                marginTop: "-1.5625rem",
                width: "7.5rem",
                height: "3.75rem",
              }}
              src={orangeButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "white",
                marginLeft: "-5.625rem",
                fontFamily: "Orbitron",
              }}
            >
              About
            </span>
          </Link>
          <Link
            onClick={() =>
              document
                .getElementById("portfolio")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "1.125rem",
              color: "gold",
              textDecoration: "none",
              padding: "1.25rem",
            }}
          >
            <img
              style={{
                marginTop: "-1.5625rem",
                width: "7.5rem",
                height: "3.75rem",
              }}
              src={orangeButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "white",
                marginLeft: "-6.25rem",
                fontFamily: "Orbitron",
              }}
            >
              Portfolio
            </span>
          </Link>
          <Link
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "1.125rem",
              color: "gold",
              textDecoration: "none",
              padding: "1.25rem",
            }}
          >
            <img
              style={{
                marginTop: "-1.5625rem",
                width: "7.5rem",
                height: "3.75rem",
              }}
              src={orangeButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "white",
                marginLeft: "-5.3125rem",
                fontFamily: "Orbitron",
              }}
            >
              Skills
            </span>
          </Link>

          <Link
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              fontSize: "1.125rem",
              color: "gold",
              textDecoration: "none",
              padding: "1.25rem",
            }}
          >
            <img
              style={{
                marginTop: "-1.5625rem",
                width: "7.5rem",
                height: "3.75rem",
              }}
              src={orangeButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "white",
                marginLeft: "-5.9375rem",
                fontFamily: "Orbitron",
              }}
            >
              Contact
            </span>
          </Link>
        </nav>
        <hr
          style={{
            marginLeft: "1rem",
            marginTop: "-1.5625rem",

            borderColor: "white",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1.875rem",
            marginLeft: "1.25rem",
          }}
        >
          <div style={closeAsmr ? { display: "none" } : null}>
            <div
              style={
                asmr
                  ? {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "11.875rem",

                      marginRight: "1.875rem",
                    }
                  : {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "1.875rem",

                      marginRight: "1.875rem",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                >
                  PROFILE.PNG
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "88px",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => {
                    setAsmr(!asmr);
                  }}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => {
                    setCloseAsmr(!closeAsmr);
                  }}
                ></img>
              </div>
              {asmr ? (
                <div
                  style={{
                    marginTop: "5px",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "black",
                    width: "250px",
                    height: "160px",
                    justifyContent: "center",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{
                      marginTop: "18px",
                      width: "110px",
                      height: "110px",
                      marginLeft: "70px",
                    }}
                    src={himori}
                    alt="profile"
                  />

                  <div
                    style={{
                      fontSize: "16px",
                      fontFamily: "Orbitron",
                      color: "white",
                    }}
                  >
                    Shermaine Lim{" "}
                  </div>
                  <div
                    style={{
                      marginBottom: "20px",
                      fontSize: "12px",
                      fontFamily: "Orbitron",
                      color: "white",
                    }}
                  >
                    {" "}
                    - Software Engineer -{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div style={closeAbout ? { display: "none" } : null}>
            <div
              style={
                about
                  ? {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "62.5rem",
                      height: "11.875rem",
                    }
                  : {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "62.5rem",
                      height: "2.1875rem",
                    }
              }
            >
              {" "}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                  id="about"
                >
                  ABOUT.PNG
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "850px",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => setAbout(!about)}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => setCloseAbout(!closeAbout)}
                ></img>
              </div>
              <div
                style={
                  about
                    ? {
                        marginTop: "0.625rem",
                        width: "62.5rem",
                        height: "8.125rem",
                        backgroundColor: "black",
                        color: "white",
                      }
                    : { display: "none" }
                }
              >
                <div
                  style={{
                    padding: "0.625rem",
                    textAlign: "left",
                    fontFamily: "san-serif",
                    fontSize: "16px",
                  }}
                >
                  Frontend React Engineer skilled in web and mobile development
                  with JavaScript, TypeScript, ReactJS, and React Native.
                  Developed full-stack applications using ASP.NET Core (C#),
                  Java Spring Boot, and Python for machine learning during
                  postgraduate studies at the National University of Singapore.
                  <br /> <br />
                  Currently pursuing a part-time Master of Computer Science at
                  Georgia Institute of Technology, specializing in artificial
                  intelligence and human-computer interaction.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1.875rem",
            marginLeft: "1.375rem",
          }}
        >
          {" "}
          <div style={closeMusic ? { display: "none" } : null}>
            <div
              style={
                music
                  ? {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "50rem",

                      marginRight: "1.875rem",
                    }
                  : {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "2.1875rem",

                      marginRight: "1.875rem",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                >
                  MUSIC.EXE
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "6.5625rem",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => setMusic(!music)}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => setCloseMusic(!closeMusic)}
                ></img>
              </div>
              <img
                style={
                  music
                    ? {
                        marginTop: "0.5rem",
                        width: "15.625rem",
                        height: "13.75rem",
                        objectFit: "cover",
                        objectPosition: "10% 25%",
                      }
                    : { display: "none" }
                }
                src={tech}
                alt="vapor-wave-statue"
              ></img>
              {music ? <CardProfile /> : null}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={
                !closePortfolio
                  ? portfolio
                    ? {
                        border: "0.0625rem solid white",
                        backgroundColor: "rgb(255 161 61)",
                        width: "62.5rem",
                        height: "775px",
                      }
                    : {
                        border: "0.0625rem solid white",
                        backgroundColor: "rgb(255 161 61)",
                        width: "62.5rem",
                        height: "2.1875rem",
                      }
                  : { display: "none" }
              }
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                  id="portfolio"
                >
                  PORTFOLIO.PNG
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "50.73rem",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => setPortfolio(!portfolio)}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => setClosePortfolio(!closePortfolio)}
                ></img>
              </div>
              <div
                style={
                  portfolio
                    ? {
                        marginTop: "0.625rem",
                        width: "62.5rem",
                        height: "725px",
                        backgroundColor: "black",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                      }
                    : { display: "none" }
                }
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <a  href="https://github.com/shermainelim/CoupleGoalsApp"
                        style={{ textDecoration: "none", color: "white" }}>
                  <img
                    style={
                      portfolio
                        ? {
                            width: "9.375rem",
                            height: "9.375rem",
                            marginTop: "1.25rem",
                            marginLeft: "0.9375rem",
                            marginRight: "0.3125rem",
                          }
                        : { display: "none" }
                    }
                    src={coupleGoals}
                    alt="couple-goals"
                  />
           </a>

                  <div style={{ padding: "0.625rem", textAlign: "left" }}>
                    <div
                      style={
                        portfolio
                          ? {
                              color: "white",
                              fontSize: "1.5rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "0.625rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      <a
                        href="https://github.com/shermainelim/CoupleGoalsApp"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Couple Goals App
                      </a>
                    </div>
                    <div
                      style={
                        portfolio || closePortfolio
                          ? {
                              color: "white",
                              textAlign: "left",
                              fontSize: "1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "1.25rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      Tech Stack : React, NodeJS, Redux Toolkit, MySQL & GitLab
                      DevOps Pipleline <br />
                      <br />A goal setting app that allows couples to set and
                      track shared goals, such as saving money for house,
                      vacation, starting a business or learning a new language.
                      The app includes features like unique couple board space,
                      synchronized progress and finance trackers.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/">
                    <img
                      style={
                        portfolio
                          ? {
                              width: "9.375rem",
                              height: "9.375rem",
                              marginTop: "1.25rem",
                              marginLeft: "0.9375rem",
                              marginRight: "0.3125rem",
                            }
                          : { display: "none" }
                      }
                      src={twilightEnd}
                      alt="twilight-end"
                    ></img>
                  </a>
                  <div style={{ padding: "0.625rem", textAlign: "left" }}>
                    <div
                      style={
                        portfolio
                          ? {
                              color: "white",
                              fontSize: "1.5rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "0.625rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Twilight's End
                      </a>
                    </div>
                    <div
                      style={
                        portfolio || closePortfolio
                          ? {
                              color: "white",
                              textAlign: "left",
                              fontSize: "1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "1.25rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      Tech Stack : C# and Unity Engine <br />
                      <br />
                      This is a team project under Video Game Design and Programming module in my masters program. My team and I learnt how to create AI states on enemies, NPCs, game logic , 3D animation , modelling, audio theory and so on etc. 
                      <br/>Story: A hybrid vampire and human hero is hired to rid sun blob enemies that have invaded the Land of Vampara. Pure vampires cannot be in contact with the sunlight and live in Vampara with eternal crimson nights. 
                   
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <a href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System">
                    <img
                      style={
                        portfolio
                          ? {
                              width: "9.375rem",
                              height: "9.375rem",
                              marginTop: "1.25rem",
                              marginLeft: "0.9375rem",
                              marginRight: "0.3125rem",
                            }
                          : { display: "none" }
                      }
                      src={logicUniversity}
                      alt="logic-university"
                    ></img>
                  </a>
                  <div style={{ padding: "0.625rem", textAlign: "left" }}>
                    <div
                      style={
                        portfolio
                          ? {
                              color: "white",
                              fontSize: "1.5rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "0.625rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      <a
                        href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Stationery Logistics Inventory System
                      </a>
                    </div>
                    <div
                      style={
                        portfolio || closePortfolio
                          ? {
                              color: "white",
                              textAlign: "left",
                              fontSize: "1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "1.25rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                     Tech Stack: C# ASP.NET Core & Azure Machine Learning <br />
                      <br />
                      This project is a full Software Development Life Cycle and about delivering a software solution aimed at computerizing and improving LOGIC University Stationary Store’s inventory and disbursement system. <br/>
                      Its main objective is to eliminate the reliance on manual processes.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <a href="https://pastelwithdreams.netlify.app/">
                    <img
                      style={
                        portfolio
                          ? {
                              width: "9.375rem",
                              height: "110px",
                              marginTop: "1.25rem",
                              marginLeft: "0.9375rem",
                              marginRight: "0.3125rem",
                            }
                          : { display: "none" }
                      }
                      src={pastelDreams}
                      alt="pastel-dreams"
                    ></img>
                  </a>
                  <div style={{ padding: "0.625rem", textAlign: "left" }}>
                    <div
                      style={
                        portfolio
                          ? {
                              color: "white",
                              fontSize: "1.5rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "0.625rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      <a
                        href="https://pastelwithdreams.netlify.app/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        JavaScript Aesthetic Portfolio
                      </a>
                    </div>
                    <div
                      style={
                        portfolio || closePortfolio
                          ? {
                              color: "white",
                              textAlign: "left",
                              fontSize: "1rem",
                              fontFamily: "sans-serif",
                              fontWeight: 200,
                              marginTop: "1.25rem",
                              marginLeft: "0.625rem",
                            }
                          : { display: "none" }
                      }
                    >
                      Tech Stack: Vanilla JavaScript <br />
                      <br />
                      A 2-D Web-based aesthetic style portfolio with HTML, CSS and plain JS to minimize external dependencies. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "-0.9375rem",
            marginBottom: "2.1875rem",
          }}
        >
          <div
            style={
              closeSkills ? { display: "none" } : { marginLeft: "1.375rem" }
            }
          >
            <div
              style={
                skills
                  ? {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "12.8125rem",

                      marginRight: "1.875rem",
                    }
                  : {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "15.625rem",
                      height: "2.1875rem",

                      marginRight: "1.875rem",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                  id="skills"
                >
                  SKILLS.PNG
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "6.25rem",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => setSkills(!skills)}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => {
                    setCloseSkills(!closeSkills);
                  }}
                ></img>
              </div>
              <div
                style={
                  skills
                    ? { marginTop: "0.3125rem", backgroundColor: "black" }
                    : { display: "none" }
                }
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0.625rem",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      marginTop: "0.1875rem",
                      width: "4.375rem",
                      height: "4.375rem",
                    }}
                    src={ReactIcon}
                    alt="react-icon"
                  ></img>{" "}
                  <img
                    style={{
                      marginTop: "-0.1875rem",
                      width: "4.875rem",
                      height: "4.875rem",
                    }}
                    src={Javascript}
                    alt="javascript-icon"
                  ></img>{" "}
                  <img
                    style={{
                      marginTop: "0.3125rem",
                      width: "3.9375rem",
                      height: "3.9375rem",
                    }}
                    src={AWS}
                    alt="aws-icon"
                  ></img>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "0.625rem",
                    justifyContent: "center",
                    marginTop: "-1.25rem",
                  }}
                >
                  <img
                    style={{
                      marginTop: "0.125rem",
                      width: "3.6875rem",
                      height: "3.6875rem",
                      marginRight: "0.625rem",
                      marginLeft: "0.625rem",
                    }}
                    src={nodeJS}
                    alt="nodeJS-icon"
                  ></img>{" "}
                  <img
                    style={{
                      marginTop: "-0.125rem",
                      width: "4.0625rem",
                      height: "4.0625rem",
                      marginRight: "0.625rem",
                    }}
                    src={Figma}
                    alt="figma-icon"
                  ></img>{" "}
                  <img
                    style={{
                      marginTop: "-0.0625rem",
                      width: "3.8125rem",
                      height: "3.8125rem",
                    }}
                    src={TypeScript}
                    alt="typescript-icon"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div style={closeContact ? { display: "none" } : null}>
            <div
              style={
                contact
                  ? {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "62.5rem",
                      height: "12.8125rem",
                    }
                  : {
                      border: "0.0625rem solid white",
                      backgroundColor: "rgb(255 161 61)",
                      width: "62.5rem",
                      height: "2.1875rem",
                    }
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    color: "white",
                    marginTop: "0.375rem",
                    marginLeft: "0.4375rem",
                    fontSize: "1rem",
                  }}
                  id="contact"
                >
                  CONTACT.PNG
                </div>
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "51.875rem",
                  }}
                  src={minimize}
                  alt="minimize"
                  onClick={() => setContact(!contact)}
                ></img>{" "}
                <img
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginTop: "0.3125rem",
                    marginLeft: "0.3125rem",
                  }}
                  src={close}
                  alt="close"
                  onClick={() => setCloseContact(!closeContact)}
                ></img>
              </div>
              <div>
                <div
                  style={
                    contact
                      ? {
                          display: "flex",
                          flexDirection: "row",
                          padding: "0.625rem",
                          justifyContent: "center",
                          marginTop: "-1.25rem",
                        }
                      : { display: "none" }
                  }
                >
                  {" "}
                  <img
                    style={{
                      marginTop: "1rem",
                      paddingLeft: "1.25rem",
                      paddingRight: "1.25rem",
                      objectFit: "cover",
                      objectPosition: "10% 60%",
                      width: "62.5rem",
                      height: "9.8125rem",
                      position: "absolute",
                    }}
                    src={Waves}
                    alt="waves-icon"
                  ></img>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      position: "absolute",
                      alignContent: "space-evenly",
                      marginTop: "0.4375rem",
                    }}
                  >
                    {" "}
                    <a href="mailto:codeandcharm@gmail.com">
                      <img
                        style={{
                          marginTop: "1.25rem",
                          width: "8.125rem",
                          height: "8.125rem",
                          marginLeft: "11.875rem",
                          marginRight: "9.375rem",
                        }}
                        src={Gmail}
                        alt="Gmail-icon"
                      ></img>{" "}
                    </a>
                    <a href="https://github.com">
                      {" "}
                      <img
                        style={{
                          marginTop: "1.25rem",
                          width: "7.8125rem",
                          height: "7.8125rem",
                          marginRight: "9.375rem",
                        }}
                        src={GithubLogo}
                        alt="github-icon"
                      ></img>{" "}
                    </a>
                    <a href="https://linkedin.com">
                      <img
                        style={{
                          marginTop: "1.25rem",
                          width: "8.125rem",
                          height: "8.125rem",
                          marginRight: "9.375rem",
                        }}
                        src={Linkedin}
                        alt="linked-in-icon"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </Router>
    </div>
  );
};

export default AppNavigator;
