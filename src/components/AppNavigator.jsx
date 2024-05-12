import React,{useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import castle from "../assets/castle.gif";
import himori from "../assets/Himori.png";
import pinkButton from "../assets/pinkButtons.png";
import pixelMagic from "../assets/pixelmagic.png";
import nintendo from "../assets/nintendo.png";
import minimize from "../assets/minimize.png";
import close from "../assets/close.png";
import vaporwavePC from "../assets/vaporwave-pc.gif";
import vaporwaveStatue from "../assets/statue-vaporwave.gif";
import CardProfile from "./CardProfile";
import Keyboard from "../assets/keyboard.png";
import ReactIcon from "../assets/circular/react.png";
import GithubLogo from "../assets/circular/github-logo.png";
import Javascript from "../assets/circular/javascript.png";
import GarageBand from "../assets/circular/garageband.png";
import AWS from "../assets/circular/aws.svg";
import Figma from "../assets/circular/figma.svg";
import Unity from "../assets/circular/unity.png";
import Gmail from "../assets/circular/gmail.png";
import Linkedin from "../assets/circular/linkedin.png";
import Waves from "../assets/waves.gif";
import "../screens/scss/GlobalStyles.scss";

const AppNavigator = () => {
  const [asmr, setAsmr] = useState(true);
  const [closeAsmr, setCloseAsmr] = useState(false);

  const [introduction, setIntroduction] = useState(true);
  const [closeIntro, setCloseIntro] = useState(false);

  const [music, setMusic] = useState(true);
  const [closeMusic, setCloseMusic] = useState(false);

  const [about, setAbout] = useState(true);
  const [closeAbout, setCloseAbout] = useState(false);

  const [portfolio, setPortfolio] = useState(true);
  const [closePortfolio, setClosePortfolio] = useState(false);

  const [skills, setSkills] = useState(true);
  const [closeSkills, setCloseSkills] = useState(false);

  const [contact, setContact] = useState(true);
  const [closeContact, setCloseContact] = useState(false);

  return (
    <div style={{position:"absolute", width: "90%",paddingLeft:"3.75rem", paddingRight:"3.75rem"}}>
      <img
        style={{
          display: "block",
          marginTop: "1.25rem",
          paddingLeft: "2.5rem",
          paddingRight: "1.25rem",
          objectFit: "cover",
          objectPosition: "10% 1%",
          width: "95%",
          height: "25rem",
        }}
        src={castle}
        alt="castle"
      />
      <div style={{ padding: "6.25rem" }}>
        <img
          style={{
            position: "absolute",
            marginTop: "-16.5rem",
            width: "11.25rem",
            height: "12.5rem",
            marginLeft:"-1.25rem"
          }}
          src={himori}
          alt="profile"
        />
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          marginLeft: "4rem",
          marginTop: "-9.5rem",
          fontSize: "1.25rem",
          fontFamily: "Jacques Francois Shadow",
          color: "black",
        }}
      >
        Jacques Francisea{" "}
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          marginLeft: "5.875rem",
          marginTop: "-7.5rem",
          fontSize: "1rem",
          fontFamily: "Jacques Francois Shadow",
          color: "black",
        }}
      >
        {" "}
        - Software Engineer -{" "}
      </div>
      <hr
        style={{
          marginLeft: "1rem",
        
          marginTop: "-5.5rem",
          borderColor: "white",
        }}
      />
      <Router>
        <nav
          style={{
            textAlign: "center",
            flexDirection: "row",
            padding: "0.9375rem",
            backgroundImage: "url(../../assets//pixel-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            onClick={() =>
              document
                .getElementById("introduction")
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
              style={{ marginTop: "-1.5625rem", width: "7.5rem", height: "3.75rem" }}
              src={pinkButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "black",
                marginLeft: "2rem",
                fontFamily: "Jacques Francois Shadow",
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
              style={{ marginTop: "-1.5625rem", width: "7.5rem", height: "3.75rem" }}
              src={pinkButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "black",
                marginLeft: "-5.625rem",
                fontFamily: "Jacques Francois Shadow",
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
              style={{ marginTop: "-1.5625rem", width: "7.5rem", height: "3.75rem" }}
              src={pinkButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "black",
                marginLeft: "-6.25rem",
                fontFamily: "Jacques Francois Shadow",
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
              style={{ marginTop: "-1.5625rem", width: "7.5rem", height: "3.75rem" }}
              src={pinkButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "black",
                marginLeft: "-5.3125rem",
                fontFamily: "Jacques Francois Shadow",
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
              style={{ marginTop: "-1.5625rem", width: "7.5rem", height: "3.75rem" }}
              src={pinkButton}
              alt="pink-button"
            ></img>
            <span
              style={{
                marginTop: "-0.5rem",
                position: "absolute",
                color: "black",
                marginLeft: "-5.9375rem",
                fontFamily: "Jacques Francois Shadow",
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
            marginLeft:"1.25rem"
        
          }}
        ><div style={closeAsmr?{display:"none"}:null}>
          <div
            style={asmr?{
              border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "15.625rem",
              height: "11.875rem",

              marginRight: "1.875rem",
            }:{ border: "0.0625rem solid #E71687",
            backgroundColor: "#CA9EED",
            width: "15.625rem",
            height: "1.875rem",

            marginRight: "1.875rem",}}
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
                ASMR.PNG
              </div>
              <img
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginTop: "0.3125rem",
                  marginLeft: "6.875rem",
                }}
                src={minimize}
                alt="minimize"
                onClick={()=>{setAsmr(!asmr)}}
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
                onClick={()=>{setCloseAsmr(!closeAsmr)}}
              ></img>
            </div>
            <img
              style={asmr?{
                marginTop: "0.5rem",
                width: "15.625rem",
                height: "8.125rem",
                objectFit: "cover",
                objectPosition: "10% 25%",
              }:{display:"none"}}
              src={vaporwavePC}
              alt="vapor-wave-pc"
            ></img>
          </div>
          </div>
          <div style={closeIntro?{display:"none"}:null}>
          <div
            style={introduction?{
              border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "62.5rem",
              height: "11.875rem",
            }:{ border: "0.0625rem solid #E71687",
            backgroundColor: "#CA9EED",
            width: "62.5rem",
            height: "2.1875rem",}}
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
                id="introduction"
              >
                INTRODUCTION.PNG
              </div>
              <img
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginTop: "0.3125rem",
                  marginLeft: "48.75rem",
                }}
                src={minimize}
                alt="minimize"
                onClick={()=>setIntroduction(!introduction)}
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
                onClick={()=>setCloseIntro(!closeIntro)}
              ></img>
            </div>
            <div
              style={introduction?{
                marginTop: "0.625rem",
                width: "62.5rem",
                height: "8.125rem",
                backgroundColor: "white",
                color: "black",
              }:{display:"none"}}
            >
              <div style={{ padding: "0.625rem", textAlign: "left",fontFamily:"sans-serif", fontWeight:300}}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page . Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and tike).It is a long established fact
                that a reader will be distracted by the readable content of a
                page . Hello, a reader will be distracted by the readable
                content of a page when looking at its layout. A reader will be
                distracted by the readable content of a page .a reader will be
                distracted by the readable content of a page when looking at its
                layout.{" "}
              </div>
            </div>
          </div></div>
        </div>{" "}
   
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1.875rem",
            marginLeft:"1.375rem"
            
          }}
        >     <div style={closeMusic?{display:"none"}:null}>
          <div
            style={music?{
              border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "15.625rem",
              height: "50rem",

              marginRight: "1.875rem",
            }:{         border: "0.0625rem solid #E71687",
            backgroundColor: "#CA9EED",
            width: "15.625rem",
            height: "2.1875rem",

            marginRight: "1.875rem",}}
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
                onClick={()=>setMusic(!music)}
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
                onClick={()=>setCloseMusic(!closeMusic)}
              ></img>
            </div>
            <img
              style={music?{
                marginTop: "0.5rem",
                width: "15.625rem",
                height: "13.75rem",
                objectFit: "cover",
                objectPosition: "10% 25%",
              }:{display:"none"}}
              src={vaporwaveStatue}
              alt="vapor-wave-statue"
            ></img>
            {music?<CardProfile />:null}
          </div></div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={closeAbout?{display:"none"}:null}>
            <div
              style={about?{
                border: "0.0625rem solid #E71687",
                backgroundColor: "#CA9EED",
                width: "62.5rem",
                height: "11.875rem",
              }:{     border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "62.5rem",
              height: "2.1875rem",}}
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
                    marginLeft: "53.125rem",
                  }}
                  src={minimize}
                  alt="minimize"
               onClick={()=>setAbout(!about)}
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
             onClick={()=>setCloseAbout(!closeAbout)}
                ></img>
              </div>
              <div
                style={about?{
                  marginTop: "0.625rem",
                  width: "62.5rem",
                  height: "8.125rem",
                  backgroundColor: "white",
                  color: "black",
                }:{display:"none"}}
              >
                <div style={{ padding: "0.625rem", textAlign: "left" , fontFamily:"sans-serif", fontWeight:300}}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page . Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and tike).It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page . Hello, a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. A reader will be distracted by the readable
                  content of a page .a reader will be distracted by the readable
                  content of a page when looking at its layout.{" "}
                </div>
              </div>
            </div></div>
            <div
              style={!closePortfolio?portfolio ?{
                border: "0.0625rem solid #E71687",
                backgroundColor: "#CA9EED",
                width: "62.5rem",
                height: "36.875rem",

                marginTop: "1.25rem",
              }:{border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "62.5rem",
              height: "2.1875rem",

              marginTop: "1.25rem",}:{display:"none"}}
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
                  onClick={()=>setPortfolio(!portfolio)}
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
                  onClick={()=>setClosePortfolio(!closePortfolio)}
                ></img>
              </div>
              <div
                style={portfolio?{
                  marginTop: "0.625rem",
                  width: "62.5rem",
                  height: "33.125rem",
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                  flexDirection: "row",
                }:{display:"none"}}
              >  <a href="https://itch.io">
                <img
                  style={portfolio?{
                    width: "9.375rem",
                    height: "9.375rem",
                    marginTop: "1.25rem",
                    marginLeft: "0.9375rem",
                    marginRight: "0.3125rem",
                  }:{display:"none"}}
                  src={pixelMagic}
                  alt="pixel-magic"
                ></img></a>
                <div style={{ padding: "0.625rem", textAlign: "left" }}>
           
                  <div
                    style={portfolio?{
                      color: "black",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                      fontWeight: 200,
                      marginTop: "0.625rem",
                      marginLeft: "0.625rem",
                    }:{display:"none"}}
                  ><a href="https://itch.io" style={{textDecoration:"none", color:"black"}}>
                    Pixel RPG Game</a>
                  </div>
                  <div
                    style={portfolio || closePortfolio?{
                      color: "black",
                      textAlign: "left",
                      fontSize: "1rem",
                      fontFamily: "sans-serif",
                      fontWeight: 200,
                      marginTop: "1.25rem",
                      marginLeft: "0.625rem",
                    }:{display:"none"}}
                  >
                    I made this game with Unity and C# programming language. It
                    is free to play on Itch.io. <br />
                    <br />
                    This is a relaxing game with beautiful pixel art. You are a
                    student who has become disillusioned with life after a
                    series of unfortunate events. One day you fall asleep and
                    find yourself in a forest. To wake up, you must find
                    <br />
                    the events in the map. By the end of the game , you would
                    have achieved self love and inner peace.{" "}
                  </div>
                  
                </div>
              </div>
            </div>
            <img
              style={portfolio? {
                width: "9.375rem",
                height: "9.375rem",
                marginTop: "27.5rem",
                marginLeft: "0.9375rem",
                marginRight: "0.3125rem",
                position: "absolute",
       display:closePortfolio?"none":"block",
              }:{display:"none"}}
              src={Keyboard}
              alt="keyboard"
            ></img>
            <div style={{ padding: "0.625rem", textAlign: "left" }}>
              <div
                style={portfolio ?{
                  color: "black",
                  marginTop: "-23.3rem",
                  position: "absolute",
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  fontWeight: 200,
                  marginLeft: "11.25rem",  display:closePortfolio?"none":"block",
                }:{display:"none"}}
              ><a href="https://itch.io" style={{textDecoration:"none", color:"black"}}>
                Programming and Engineering Project</a>
                <br />     - <br />  <br />  <br />  
              </div>
           
            </div>{" "}
            <img
              style={portfolio ?{
                width: "9.375rem",
                height: "9.375rem",
                marginTop: "38.4375rem",
                marginLeft: "0.9375rem",
                marginRight: "0.3125rem",
                position: "absolute",  display:closePortfolio?"none":"block",
              }:{display:"none"}}
              src={nintendo}
              alt="nintendo"
            ></img>
            <div style={portfolio ?{ padding: "0.625rem", textAlign: "left" }:{display:"none"}}>
              <div
                style={{
                  color: "black",
                  marginTop: "-13.5rem",
                  position: "absolute",
                  fontSize: "1.5rem",
                  fontFamily: "sans-serif",
                  fontWeight: 200,
                  marginLeft: "11.25rem",  display:closePortfolio?"none":"visible",
                }}
              ><a href="https://itch.io" style={{textDecoration:"none", color:"black"}}>
                Gaming and Music Project</a>   <br />     - <br />  <br />  <br /> 
              </div>
             
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "-0.9375rem",
            marginBottom: "2.1875rem",
          }}
        >
          <div style={closeSkills?{display:"none"}:{   marginLeft:"1.375rem"}}>
          <div
            style={skills?{
              border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "15.625rem",
              height: "12.8125rem",

              marginRight: "1.875rem",
            }:{border: "0.0625rem solid #E71687",
            backgroundColor: "#CA9EED",
            width: "15.625rem",
            height: "2.1875rem",

            marginRight: "1.875rem",}}
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
                onClick={()=>setSkills(!skills)}
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
                onClick={()=>{setCloseSkills(!closeSkills)}}
              ></img>
            </div>
            <div style={skills?{ marginTop: "0.3125rem", backgroundColor: "white" }:{display:"none"}}>
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
                  src={Unity}
                  alt="unity-icon"
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
                  src={GarageBand}
                  alt="garage-icon"
                ></img>
              </div>
            </div>
          </div>
          </div>
          <div style={closeContact?{display:"none"}:null}>
          <div
            style={contact?{
              border: "0.0625rem solid #E71687",
              backgroundColor: "#CA9EED",
              width: "62.5rem",
              height: "12.8125rem",
            }:{border: "0.0625rem solid #E71687",
            backgroundColor: "#CA9EED",
            width: "62.5rem",
            height: "2.1875rem",}}
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
                onClick={()=>setContact(!contact)}
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
                onClick={()=>setCloseContact(!closeContact)}
              ></img>
            </div>
            <div>
              <div
                style={contact?{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0.625rem",
                  justifyContent: "center",
                  marginTop: "-1.25rem",
                }:{display:"none"}}
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
                  <a href="mailto:codeandcharm@gmail.com"><img
                    style={{
                      marginTop: "1.25rem",
                      width: "8.125rem",
                      height: "8.125rem",
                      marginLeft: "11.875rem",
                      marginRight: "9.375rem",
                    }}
                    src={Gmail}
                    alt="Gmail-icon"
                    
                  ></img>{" "}</a>
                  <a href="https://github.com"> <img
                    style={{
                      marginTop: "1.25rem",
                      width: "7.8125rem",
                      height: "7.8125rem",
                      marginRight: "9.375rem",
                    }}
                    src={GithubLogo}
                    alt="github-icon"
                  ></img>{" "}</a>
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
                  ></img></a>
                </div>
              </div>
            </div>
          </div></div>
        </div>{" "}
      </Router>
    </div>
  );
};

export default AppNavigator;
