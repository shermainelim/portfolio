import React, { useState } from "react";
import styles from "./LandingPage.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../screens/scss/GlobalStyles.scss";
import sciFi from "../../assets/sci-fi.png";
import profilePic from "../../assets/shermaineLim.png";
import orangeButton from "../../assets/button.png";
import coupleGoals from "../../assets/couple-goals.png";
import twilightEnd from "../../assets/twilights-end-3d.png";
import logicUniversity from "../../assets/logic-university.png";
import grabCarBaby from "../../assets/grabCarBaby.png";
import javaEMS from "../../assets/java-ems.png";
import minimize from "../../assets/minimize.svg";
import close from "../../assets/close.svg";
import musicPlayer from "../../assets/musicPlayer.png";
import CardProfile from "../cards/CardProfile";
import ReactIcon from "../../assets/circular-icons/react.svg";
import GithubLogo from "../../assets/circular-icons/github.svg";
import Javascript from "../../assets/circular-icons/javascript.svg";
import TypeScript from "../../assets/circular-icons/typescript.svg";
import AWS from "../../assets/circular-icons/aws.svg";
import Figma from "../../assets/circular-icons/figma.svg";
import nodeJS from "../../assets/circular-icons/nodeJS.svg";
import Gmail from "../../assets/circular-icons/gmail.svg";
import Linkedin from "../../assets/circular-icons/linkedin.svg";

const LandingPage = () => {
  const cx = classNames.bind(styles);

  const [accordion, setAccordion] = useState(true);
  const [closeAccordion, setcloseAccordion] = useState(false);

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

  const renderNavBar = () => {
    return (
      <nav className={cx("background")}>
        <Link
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>Home</span>
        </Link>

        <Link
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>About</span>
        </Link>
        <Link
          onClick={() =>
            document
              .getElementById("portfolio")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-long-label")}>Portfolio</span>
        </Link>
        <Link
          onClick={() =>
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>Skills</span>
        </Link>

        <Link
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-long-label")}>Contact</span>
        </Link>
      </nav>
    );
  };

  const renderProfile = () => {
    return (
      <div style={closeAccordion ? { display: "none" } : null}>
        <div
          className={
            accordion ? cx("border-profile") : cx("border-profile-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")}>PROFILE.PNG</div>
            <img
              className={cx("minimize-icon-profile")}
              src={minimize}
              alt="minimize"
              onClick={() => {
                setAccordion(!accordion);
              }}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => {
                setcloseAccordion(!closeAccordion);
              }}
            ></img>
          </div>
          {accordion ? (
            <div className={cx("label-bg-filler")}>
              <img className={cx("profile")} src={profilePic} alt="profile" />

              <div className={cx("name-label")}>Shermaine Lim </div>
              <div className={cx("role-label")}> - Software Engineer - </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
  const renderAbout = () => {
    return (
      <div style={closeAbout ? { display: "none" } : null}>
        <div className={about ? cx("border-about") : cx("border-about-closed")}>
          <div className={cx("label-container")}>
            <div className={cx("label")} id="about">
              ABOUT.PNG
            </div>
            <img
              className={cx("minimize-icon-about")}
              src={minimize}
              alt="minimize"
              onClick={() => setAbout(!about)}
            ></img>{" "}
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setCloseAbout(!closeAbout)}
            ></img>
          </div>
          <div
            className={
              about
                ? cx("about-label-container")
                : cx("about-label-container-invisible")
            }
          >
            <div className={cx("about-desc")}>
              I'm a software engineer with 3+ years of experience, specializing
              in frontend development using React, TypeScript, Redux and MobX. I
              enjoy building responsive, intuitive applications that are both
              performant and user-focused. I've worked on geospatial platforms
              and scalable UI tools, and I value clean code, design thinking,
              and cross-functional collaboration. I'm AWS-certified and
              currently building my skills in backend and cloud development,
              with the goal of becoming a full-stack software engineer.
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMusicPlayer = () => {
    return (
      <div style={closeMusic ? { display: "none" } : null}>
        <div
          className={
            music ? cx("border-music-open") : cx("border-music-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")}>MUSIC.EXE</div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setMusic(!music)}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setCloseMusic(!closeMusic)}
            ></img>
          </div>
          <img
            className={music ? cx("music-img-show") : cx("music-img-none")}
            src={musicPlayer}
            alt="music-player"
          ></img>
          {music ? <CardProfile /> : null}
        </div>
      </div>
    );
  };

  const renderPortfolio = () => {
    return (
      <div className={cx("portfolio-container")}>
        <div
          className={
            !closePortfolio
              ? portfolio
                ? cx("border-portfolio-open")
                : cx("border-portfolio-closed")
              : cx("portfolio-none")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")} id="portfolio">
              PORTFOLIO.PNG
            </div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setPortfolio(!portfolio)}
            ></img>{" "}
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setClosePortfolio(!closePortfolio)}
            ></img>
          </div>
          <div
            className={
              portfolio
                ? cx("portfolio-accordion-filler-open")
                : cx("portfolio-accordion-filler-closed")
            }
          >
        

            <div className={cx("project-image-container")}>
              <a
                href="https://github.com/shermainelim/CoupleGoalsApp"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={coupleGoals}
                  alt="couple-goals"
                />
              </a>

              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://github.com/shermainelim/CoupleGoalsApp"
                    className={cx("title-label")}
                  >
                    Couple Goals App
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack : React, NodeJS, Redux Toolkit, MySQL & GitLab
                  DevOps Pipleline <br />
                  <br />A goal setting app that allows couples to set and track
                  shared goals, such as saving money for house, vacation,
                  starting a business or learning a new language. The app
                  includes features like unique couple board space, synchronized
                  progress and finance trackers.
                </div>
              </div>
            </div>

            <div className={cx("project-image-container")}>
              <a
                href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={logicUniversity}
                  alt="logic-university"
                ></img>
              </a>
              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System"
                    className={cx("title-label")}
                  >
                    Stationery Logistics Inventory System
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack: C# ASP.NET Core & Azure Machine Learning <br />
                  <br />
                  This project is a full Software Development Life Cycle and
                  about delivering a software solution aimed at computerizing
                  and improving LOGIC University Stationary Store’s inventory
                  and disbursement system. <br />
                  Its main objective is to eliminate the reliance on manual
                  processes.
                </div>
              </div>
            </div>

            <div className={cx("project-image-container")}>
              <a
                href="https://www.figma.com/proto/ydeMYFBGG96ImAl7knM2G9/GrabCar-Baby?node-id=0-1&t=zisPJsdO0e6Lcv1m-1"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  style={{ height: "11.5rem" }}
                  src={grabCarBaby}
                  alt="grab-car-baby"
                ></img>
              </a>
              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://www.figma.com/proto/ydeMYFBGG96ImAl7knM2G9/GrabCar-Baby?node-id=0-1&t=zisPJsdO0e6Lcv1m-1"
                    className={cx("title-label")}
                  >
                    GrabCar Baby Figma Design Prototype
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack : Figma
                  <br />
                  <br />
                  Introduces an infant ride option with baby seats, addressing key pain points missing in Grab Singapore.
                  <br />
                  Flow 1 - Infant-Friendly Ride: - Quick and simple booking
                  experience designed for passengers with infants.
                  <br />
                  Flow 2 - Customizable Booking Options: Drawer component lets users check multiple ride types for more flexible matching.
                  <br />
                  Flow 4 – Smarter Ride Matching: Tracks wait time and expands ride options for quicker pickup.
                </div>
              </div>
            </div>


                <div className={cx("project-image-container")}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={twilightEnd}
                  alt="twilight-end"
                />
              </a>

              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/"
                    className={cx("title-label")}
                  >
                    Twilight's End
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack : C# and Unity Engine <br />
                  <br />
                  This is a team project under Video Game Design and Programming
                  module. We learnt how to create AI states on enemies, NPCs,
                  game logic , 3D animation , modelling, audio theory and so on
                  etc. Story: A hybrid vampire and human hero is hired to rid
                  sun blob enemies that have invaded the Vampara Land.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div className={!closeSkills ? cx("skills-open") : cx("skills-closed")}>
        <div
          className={
            skills ? cx("border-skills-open") : cx("border-skills-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")} id="skills">
              SKILLS.PNG
            </div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setSkills(!skills)}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => {
                setCloseSkills(!closeSkills);
              }}
            ></img>
          </div>
          <div
            className={
              skills ? cx("accordion-filler-show") : cx("accordion-filler-none")
            }
          >
            <div className={cx("icon-container-top")}>
              <img
                style={{ marginRight: "4px" }}
                className={cx("icon-img")}
                src={ReactIcon}
                alt="react-icon"
              ></img>
              <img
                style={{ marginRight: "4px" }}
                className={cx("icon-img")}
                src={Javascript}
                alt="javascript-icon"
              ></img>
              <img
                style={{ marginLeft: "4px" }}
                className={cx("icon-img")}
                src={AWS}
                alt="aws-icon"
              ></img>
            </div>

            <div className={cx("icon-container-bottom")}>
              <img
                className={cx("icon-img")}
                src={nodeJS}
                alt="nodeJS-icon"
              ></img>{" "}
              <img
                className={cx("icon-img")}
                src={Figma}
                alt="figma-icon"
              ></img>{" "}
              <img
                className={cx("icon-img")}
                src={TypeScript}
                alt="typescript-icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div style={closeContact ? { display: "none" } : null}>
        <div
          className={
            contact ? cx("border-contact-open") : cx("border-contact-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")} id="contact">
              CONTACT.PNG
            </div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setContact(!contact)}
            ></img>{" "}
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setCloseContact(!closeContact)}
            ></img>
          </div>
          <div>
            <div
              className={
                contact ? cx("img-container-show") : cx("img-container-none")
              }
            >
              <div className={cx("icon-container")}>
                <a href="mailto:shermaine.lim.si.hui@gmail.com">
                  <img
                    className={cx("icon-gmail")}
                    src={Gmail}
                    alt="Gmail-icon"
                  ></img>
                </a>
                <a href="https://github.com/shermainelim">
                  <img
                    className={cx("icon-github")}
                    src={GithubLogo}
                    alt="github-icon"
                  ></img>{" "}
                </a>
                <a href="https://www.linkedin.com/in/shermaine-lim/">
                  <img
                    className={cx("icon-linkedin")}
                    src={Linkedin}
                    alt="linked-in-icon"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={cx("landing-page-main-container")}>
      <img className={cx("banner")} src={sciFi} alt="sciFi" />

      <hr className={cx("separator-start")} />
      <Router>
        {renderNavBar()}
        <hr className={cx("separator-end")} />
        <div className={cx("accordion-first-section-container")}>
          {renderProfile()}
          {renderAbout()}
        </div>
        <div className={cx("accordion-second-section-container")}>
          {renderMusicPlayer()}
          {renderPortfolio()}
        </div>
        <div className={cx("accordion-third-section-container")}>
          {renderSkills()}
          {renderContact()}
        </div>
      </Router>
    </div>
  );
};

export default LandingPage;
