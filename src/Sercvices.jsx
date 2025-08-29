import React from "react";
import { useState } from "react";
import heroimag from "./assets/images/hero-imag.jpg";
import aboutimg from "./assets/images/about-img.jpg";
import design2 from "./assets/images/design2.jpg";
import design1 from "./assets/images/design1.jpg";
import website1 from "./assets/images/website1.jpg";
import website2 from "./assets/images/website2.jpg";
import website4 from "./assets/images/logo1.jpg";
import website3 from "./assets/images/website3.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Calendar,
  Mail,
  Clock,
  User,
} from "lucide-react";
import "./App.css";
import ModelSearch from "./ModelSearch";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";

function Services() {
  const [openModel, setOpenModel] = useState(false);

  // Professional AI Secretary states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Vincent's Portfolio Secretary. I can help you with:\n\n• Questions about Vincent's background, projects & services\n• Taking messages and scheduling appointments\n• Providing project information and availability\n• Connecting you with Vincent for business inquiries\n\nHow may I assist you today?",
      isBot: true,
      timestamp: new Date(),
      type: "welcome",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentMode, setCurrentMode] = useState("chat");

  const handlemadal = () => {
    setOpenModel(!openModel);
  };

  const onsubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Professional Secretary Response System
  const getSecretaryResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Message taking functionality
    if (
      message.includes("leave a message") ||
      message.includes("send message") ||
      message.includes("tell vincent") ||
      message.includes("contact vincent")
    ) {
      return {
        text: "I'd be happy to take a message for Vincent. Please provide:\n\n• Your name and email\n• Your message\n• Priority level (if urgent)\n• Best time for Vincent to respond\n\nVincent checks messages daily and responds within 24 hours for urgent matters.",
        type: "message_taking",
        suggestedQuestions: [
          "Schedule appointment instead",
          "Mark as urgent",
          "Request specific callback time",
        ],
      };
    }

    // Appointment scheduling
    if (
      message.includes("schedule") ||
      message.includes("appointment") ||
      message.includes("meeting") ||
      message.includes("book")
    ) {
      return {
        text: "I can schedule an appointment with Vincent.\n\n**Business Hours:** Mon-Fri, 9:00 AM - 6:00 PM (Kigali time)\n**Duration Options:** 15, 30, or 60 minutes\n**Meeting Types:** Google Meet, Zoom, Phone, or In-person\n\nTo schedule, please provide:\n• Preferred date and time\n• Meeting duration\n• Meeting type\n• Your contact details\n• Brief purpose of meeting\n\nI'll check Vincent's availability and confirm your appointment.",
        type: "appointment",
        suggestedQuestions: [
          "Check this week availability",
          "Schedule project consultation",
          "Book phone meeting",
        ],
      };
    }

    // Portfolio and projects information
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return {
        text: "Vincent's Portfolio Overview:\n\n**Recent Projects:**\n• Harmony Spa Website - Responsive site with booking system\n• Wouessi Website - ReactJS development & SEO optimization\n• Herve Designs - Personal business showcase site\n• Event Management System (Afritec 2025)\n• Feli Express Dashboard (FeliTechnology)\n• Boostify YouTube (kLab team project)\n\n**Services Available:**\n• Website development (React + frontend)\n• SEO optimization\n• Microsoft 365 support\n• Digital outreach campaigns\n• Tender coordination\n\nWould you like details about any specific project or service?",
        type: "portfolio",
        suggestedQuestions: [
          "Request project quote",
          "Schedule project discussion",
          "View live demos",
        ],
      };
    }

    // Skills and technology
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech") ||
      message.includes("experience")
    ) {
      return {
        text: "Vincent's Technical Profile:\n\n**Core Skills:**\n• HTML, CSS, JavaScript\n• ReactJS (advanced level)\n• SEO (on-page optimization)\n• Figma (UI/UX basics)\n• Microsoft 365 (Outlook/SharePoint/Teams)\n• Digital Record Management\n\n**Soft Skills:**\n• Communication & Problem-solving\n• Strategic thinking\n• Client outreach\n• Process improvement\n• Team collaboration\n\n**Education:** Bachelor in Business Information Technology, University of Rwanda\n\n**Current Status:** Available for new projects",
        type: "skills",
        suggestedQuestions: [
          "Schedule technical interview",
          "Discuss project requirements",
          "Check availability for hire",
        ],
      };
    }

    // Contact and availability
    if (
      message.includes("contact") ||
      message.includes("available") ||
      message.includes("reach") ||
      message.includes("hire")
    ) {
      return {
        text: "Contact Information:\n\n**Email:** vkubwimana@gmail.com\n**Location:** Kigali, Rwanda\n**Availability:** Currently available for new projects\n**Response Time:** Within 24 hours\n\n**Best Contact Methods:**\n1. Through this secretary system (immediate)\n2. Email for formal inquiries\n3. Scheduled consultations\n\nI can schedule a consultation or take a detailed message for Vincent. What would you prefer?",
        type: "contact",
        suggestedQuestions: [
          "Schedule consultation",
          "Leave detailed message",
          "Request project quote",
        ],
      };
    }

    // About Vincent
    if (
      message.includes("about") ||
      message.includes("who is") ||
      message.includes("background")
    ) {
      return {
        text: "About Vincent Turikubwimana:\n\n**Profile:** Early-career professional with experience in:\n• Software development (ReactJS)\n• Tender coordination\n• Business development support\n• Microsoft 365 IT support\n\n**Current Role:** Web Developer\n**Location:** Kigali, Rwanda\n**Education:** Business Information Technology student\n\n**Professional Focus:** Creating modern web solutions and helping businesses optimize their digital tools.\n\nWould you like more specific information about his experience or current projects?",
        type: "about",
        suggestedQuestions: [
          "View detailed CV",
          "Schedule introduction call",
          "Ask about specific experience",
        ],
      };
    }

    // Services information
    if (
      message.includes("service") ||
      message.includes("what can") ||
      message.includes("help")
    ) {
      return {
        text: "Vincent's Services:\n\n**Web Development:**\n• ReactJS applications\n• Responsive website design\n• Frontend optimization\n\n**Digital Services:**\n• SEO optimization\n• Microsoft 365 support\n• Digital outreach campaigns\n• Process improvement consulting\n\n**Business Support:**\n• Tender coordination assistance\n• Digital record management\n• Client communication systems\n\n**Consultation Available:** Free 30-minute initial consultation to discuss your needs.\n\nWhich service interests you most?",
        type: "services",
        suggestedQuestions: [
          "Get service quote",
          "Schedule consultation",
          "Discuss project timeline",
        ],
      };
    }

    // Greeting responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return {
        text: "Hello! Welcome to Vincent's professional portfolio. I'm his AI Secretary, here to assist with all inquiries.\n\n**I can help you with:**\n• Learning about Vincent's skills and experience\n• Scheduling meetings and consultations\n• Taking messages for Vincent\n• Providing project information\n• Connecting you for business opportunities\n\nWhat would you like to know about Vincent's services?",
        type: "greeting",
        suggestedQuestions: [
          "Tell me about Vincent",
          "Schedule a meeting",
          "View his projects",
        ],
      };
    }

    // Default professional response
    return {
      text: "I'm Vincent's professional secretary, here to help with your inquiry.\n\n**Available Services:**\n• Portfolio information and project details\n• Appointment scheduling\n• Message taking for Vincent\n• Business inquiry support\n• Service consultation\n\nPlease let me know how I can assist you today, or feel free to ask about Vincent's background, projects, or availability.",
      type: "general",
      suggestedQuestions: [
        "Learn about Vincent's background",
        "Schedule appointment",
        "Leave a message",
      ],
    };
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate processing
    setTimeout(() => {
      const secretaryResponse = getSecretaryResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: secretaryResponse.text,
        isBot: true,
        timestamp: new Date(),
        type: secretaryResponse.type || "general",
        suggestedQuestions: secretaryResponse.suggestedQuestions || [],
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <>
      <div className="Website-container">
        {openModel && <ModelSearch handlemadal={handlemadal} />}

        <section className="home" id="home">
          <nav className="navbar">
            <div className="logo">
              <b>Vincent</b>
            </div>

            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>

            <a href="#contactForm" className="button-wrapper">
              <button className="btn contact-btn">Contact</button>
            </a>

            <div className="menu-btn" onClick={handlemadal}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>

          <div className="hero">
            <div className="hero-text">
              <h3>Hey, There</h3>
              <h1>I am VINCENT</h1>
              <h2>Web Designer & Developer</h2>
              <p>
                I am web designer and developer, this career is very good, we
                have to work hard, we will achieve ,we will get money,& we will
                be rich man.
              </p>
              <a href="#contactForm">
                <button className="btn hire-btn">Hire Me</button>
              </a>
            </div>

            <div className="hero-image">
              <img src={heroimag} alt="Vincent" />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-image">
            <img src={aboutimg} alt="About Vincent" />
          </div>

          <div className="about-desc">
            <h3>About Me</h3>
            <h2>Personal details</h2>
            <p>
              Iam Vincent Turikubwimana web designer and developer, today i
              focus on my education especially in software development,
            </p>
            <p>
              but my future will focus to build soft ware development company
            </p>
            <div className="about-personal-info">
              <div>
                <span>Name:</span>
                <span>T Vincent</span>
              </div>
              <div>
                <span>Age:</span>
                <span>21 Years</span>
              </div>
              <div>
                <span>Email:</span>
                <span>vkubwimana@gmail.com</span>
              </div>
              <div>
                <span>Hobby:</span>
                <span>football</span>
              </div>
            </div>
            <button className="btn download-btn">
              <span>
                <a href="../public/my cv-v.pdf" download="my cv-v.pdf">
                  Download my CV
                </a>
              </span>
            </button>
          </div>
        </section>

        <section className="resume reusable" id="resume">
          <header className="headings">
            <h3>Resume</h3>
            <h1>Education & Experience</h1>
            <p>
              education is amazing thinks, we have to educate, we will get
              experience and our future be better.
            </p>
          </header>

          <div className="resume-row">
            <div className="column column-left">
              <header className="sub-heading">
                <h2>EDUCATION</h2>
              </header>

              <main className="resume-contents">
                <div className="box">
                  <h4>2014 - 2019</h4>
                  <h3>High School Degree</h3>
                  <p>
                    designed to provide a broad-based education covering various
                    subjects like: Mathematics, Computer science, Economics and
                    Entrepreneur ship
                  </p>
                  <h5 className="vanue">E.S.Rukozo</h5>
                </div>

                <div className="box">
                  <h4>2022 - 2023</h4>
                  <h3>Data analyist</h3>
                  <p>
                    Data analysts play a crucial role in helping businesses make
                    informed choices and optimize their operations.
                  </p>
                  <h5 className="vanue">co-herverster ministry</h5>
                </div>

                <div className="box">
                  <h4>2023 - 2024</h4>
                  <h3>Front-end Developer</h3>
                  <p>
                    You attended a 4-month training program at kLab Rwanda,
                    where you gained experience working as a frontend developer
                  </p>
                  <h5 className="vanue">Klab Rwanda</h5>
                </div>

                <div className="box">
                  <h4>2021 - until now</h4>
                  <h3>information systems</h3>
                  <p>
                    systems play crucial role in modern businesses and
                    organizations by facilitating the collection, storage and
                    processing of data and information for various purposes
                  </p>
                  <h5 className="vanue"> University of Rwanda</h5>
                </div>
              </main>
            </div>

            <div className="column column-right">
              <header className="sub-heading">
                <h2>EXPERIENCE</h2>
              </header>

              <div className="resume-contents">
                <div className="box">
                  <h4>2023- 2024</h4>
                  <h3>Front-End Web Developer</h3>
                  <p>
                    I attended a 4-month training program at kLab Rwanda, where
                    i worked as a frontend developer. At the end of the
                    training, me and my team implemented a project called
                    Boostify YouTube.
                  </p>
                  <h5 className="vanue">Klab Rwanda</h5>
                </div>

                <div className="box">
                  <h4>2023- 2024</h4>
                  <h3>UI/UX Designer</h3>
                  <p>
                    The main goal as UI/UX designer is to enhance user
                    satisfaction and meet the user's needs and goals while also
                    achieving the objectives of project
                  </p>
                  <h5 className="vanue">Klab Rwanda</h5>
                </div>

                <div className="box">
                  <h4>2024- 2024</h4>
                  <h3>Front-end Developer</h3>
                  <p>
                    I have 5 months ofexperience as a frontend developer at
                    FeliTechnology, where you implemented the dashboard of Feli
                    Express, a car rental company. The dashboard is used to
                    manage all company transactions
                  </p>
                  <h5 className="vanue">FeliTechnology</h5>
                </div>

                <div className="box">
                  <h4>2025- 2025</h4>
                  <h3>Web Developer</h3>
                  <p>
                    creating and maintaining websites and web applications. I
                    work on both the frontend and backend aspects of web
                    development. I implimented a project called Event Managment
                    System.
                  </p>
                  <h5 className="vanue">Afritec</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio reusable" id="portfolio">
          <header className="headings">
            <h3>Portfolio</h3>
            <h1>My latest featured projects</h1>
            <p>
              how are in extremely love with eco friendly system and thinks
              which is better in your future life
            </p>
          </header>

          <main className="mainContainer">
            <div className="button-group">
              <button className="button active" data-filter="*">
                All
              </button>
              <button className="button" data-filter=".design">
                React JS
              </button>
              <button className="button" data-filter=".code">
                Typescript
              </button>
              <button className="button" data-filter=".logo">
                Design
              </button>
            </div>

            <div className="gallery">
              <div className="item design">
                <img src={design1} alt="Design Project 1" />
                <div className="overlay">
                  <a href="https://hollday-plan.vercel.app">VIEW Project</a>
                </div>
              </div>

              <div className="item design">
                <img src={design2} alt="Design Project 2" />
                <div className="overlay">
                  <a href="https://vincent-to-do-app.vercel.app">VIEW To Do</a>
                </div>
              </div>

              <div className="item code">
                <img src={website1} alt="Website Project 1" />
                <div className="overlay">
                  <a href="https://boostify-tube-network-frontend.vercel.app">
                    VIEW Project
                  </a>
                </div>
              </div>
            </div>

            <div className="gallery">
              <div className="item design">
                <img src={website4} alt="Logo Project" />
                <div className="overlay">
                  <a href="https://vinc-klab-kubwimanav.vercel.app/">
                    VIEW Project
                  </a>
                </div>
              </div>

              <div className="item design">
                <img src={website2} alt="Website Project 2" />
                <div className="overlay">
                  <a href="https://dashboard-ruby-iota-75.vercel.app/">
                    VIEW Project
                  </a>
                </div>
              </div>

              <div className="item code">
                <img src={website3} alt="Website Project 3" />
                <div className="overlay">
                  <a href="https://product-typescript-sea3.vercel.app">
                    VIEW Typescript Project
                  </a>
                </div>
              </div>
            </div>
          </main>
        </section>

        <section className="portfolio reusable" id="contactForm">
          <header className="headings">
            <h3>Contact Us</h3>
            <h1>Get In Touch</h1>
            <p>
              if you have question or comments, please type here, were here for
              you
            </p>
          </header>
          <div className="contact-one">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2042014.2644906435!2d30.067304!3d-1.575976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc7e0817e278b9%3A0x2e1d372b9292caae!2sByumba!5e0!3m2!1sen!2srw!4v1709229665557!5m2!1sen!2srw"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-map"
                title="Location Map"
              ></iframe>
            </div>

            <form
              onSubmit={handleSubmit(onsubmit)}
              className="contact-inputform"
            >
              <input
                type="text"
                name="FullName"
                placeholder="Enter Your FullName"
                className="input"
                {...register("FullName", {
                  required: {
                    value: true,
                  },
                })}
              />
              {errors.FullName && (
                <span className="errorstext">Your FullName is required</span>
              )}
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email Address"
                className="input"
                {...register("Email", {
                  required: {
                    value: true,
                  },
                })}
              />
              {errors.Email && (
                <span className="errorstext">Your Email is Required</span>
              )}
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="input"
                {...register("Subject", {
                  required: {
                    value: true,
                  },
                })}
              />
              {errors.Subject && (
                <span className="errorstext">Your Subject is Required</span>
              )}
              <textarea
                className="contact-text"
                name="Message"
                placeholder="Type Your Message"
                {...register("Message", {
                  required: {
                    value: true,
                  },
                })}
              />
              {errors.Message && (
                <span className="errorstext">Your Message is Required</span>
              )}
              <button type="submit" className="sendbutton">
                Submit Your Message
              </button>
            </form>
          </div>
        </section>

        <div className="page-footer">
          <div className="footer-contents">
            <div className="vinct">
              <div className="vinct-p">
                <h3>About Me</h3>
                <p style={{ fontSize: "14px" }}>
                  Passionate frontend developer with experience in building{" "}
                  <br />
                  modern, user-friendly web applications using React, Next.js,
                  and <br />
                  TypeScript. Always learning, creating, and improving to
                  deliver impactful <br /> digital solutions.
                </p>
              </div>
              <div className="vinct-p">
                <h3>Quick Links</h3>
                <ul style={{ padding: "0px", margin: "0px" }}>
                  <li>
                    <a
                      href="#home"
                      style={{
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        color: "#464b4b",
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      style={{
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        color: "#464b4b",
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      style={{
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        color: "#464b4b",
                      }}
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div className="vinct-p">
                <h3>Follow Me</h3>
                <div className="contactSocialMedia">
                  <a href="#" aria-label="WhatsApp" className="link-icon">
                    <FaWhatsappSquare className="fot-icon" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <FaFacebookF className="fot-icon" />
                  </a>
                  <a
                    href="https://github.com/kubwimanav"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-icon"
                  >
                    <BsGithub className="fot-icon" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="link-icon">
                    <FaLinkedin className="fot-icon" />
                  </a>
                </div>
              </div>
            </div>

            <center>
              <p>
                © {new Date().getFullYear()} Vincent Turikubwimana. All rights
                reserved.
              </p>
            </center>
          </div>
        </div>

        {/* Professional AI Secretary Chat Widget */}
        <div
          className="ai-chat-widget"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {/* Chat Toggle Button */}
          <div style={{ position: "relative" }}>
            <button
              onClick={toggleChat}
              className="ai-chat-toggle-btn"
              style={{
                width: "clamp(50px, 8vw, 60px)",
                height: "clamp(50px, 8vw, 60px)",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)",
                border: "none",
                color: "var(--bg-clr-one)",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(5, 85, 92, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isChatOpen ? "rotate(180deg)" : "rotate(0deg)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {isChatOpen ? (
                <X size={window.innerWidth <= 768 ? 24 : 28} />
              ) : (
                <Bot size={window.innerWidth <= 768 ? 24 : 28} />
              )}

              {/* Notification indicator */}
              {!isChatOpen && (
                <div
                  className="ai-chat-badge"
                  style={{
                    position: "absolute",
                    top: "clamp(0px, 1vw, 5px)",
                    right: "clamp(0px, 1vw, 5px)",
                    width: "clamp(16px, 4vw, 18px)",
                    height: "clamp(16px, 4vw, 18px)",
                    backgroundColor: "#2ecc71",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(8px, 2vw, 9px)",
                    color: "white",
                    fontWeight: "bold",
                    animation: "aiChatPulse 2s infinite",
                  }}
                />
              )}
            </button>
          </div>

          {/* Chat Window */}
          {isChatOpen && (
            <div
              className="ai-chat-window"
              style={{
                position: "absolute",
                bottom: "clamp(60px, 12vw, 70px)",
                right: "0",
                width: "clamp(280px, 90vw, 400px)",
                height: "clamp(400px, 70vh, 500px)",
                maxWidth: "95vw",
                maxHeight: "80vh",
                background: "var(--bg-clr-one)",
                borderRadius: "clamp(15px, 3vw, 20px)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animation: "aiChatSlideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "2px solid var(--primary-clr)",
              }}
            >
              {/* Chat Header */}
              <div
                className="ai-chat-header"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)",
                  color: "var(--bg-clr-one)",
                  padding: "clamp(12px, 3vw, 15px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px, 2vw, 12px)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    width: "clamp(32px, 6vw, 40px)",
                    height: "clamp(32px, 6vw, 40px)",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <User size={window.innerWidth <= 768 ? 16 : 20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "clamp(13px, 3vw, 14px)",
                      fontWeight: "600",
                      color: "var(--bg-clr-one)",
                    }}
                  >
                    Portfolio Secretary
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#2ecc71",
                        borderRadius: "50%",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "clamp(11px, 2.5vw, 12px)",
                        opacity: 0.9,
                        color: "var(--bg-clr-one)",
                      }}
                    >
                      Available to assist
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div
                className="ai-chat-messages"
                style={{
                  flex: 1,
                  padding: "clamp(8px, 2vw, 12px)",
                  overflowY: "auto",
                  background: "#f8f9fa",
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {messages.map((message) => (
                  <div key={message.id} style={{ marginBottom: "15px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: message.isBot
                          ? "flex-start"
                          : "flex-end",
                        marginBottom: "3px",
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "clamp(85%, 90vw, 85%)",
                          padding:
                            "clamp(12px, 3vw, 16px) clamp(14px, 4vw, 20px)",
                          borderRadius: message.isBot
                            ? "15px 15px 15px 4px"
                            : "15px 15px 4px 15px",
                          background: message.isBot
                            ? "white"
                            : "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)",
                          color: message.isBot
                            ? "var(--text-clr)"
                            : "var(--bg-clr-one)",
                          fontSize: "clamp(13px, 3vw, 14px)",
                          lineHeight: "1.5",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                          boxShadow: message.isBot
                            ? "0 2px 8px rgba(0,0,0,0.1)"
                            : "0 3px 10px rgba(5, 85, 92, 0.3)",
                          border: message.isBot ? "1px solid #e1e5e9" : "none",
                        }}
                      >
                        {message.text}
                      </div>
                    </div>

                    {/* Suggested Questions */}
                    {message.isBot &&
                      message.suggestedQuestions &&
                      message.suggestedQuestions.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginTop: "8px",
                            paddingLeft: "4px",
                          }}
                        >
                          {message.suggestedQuestions.map((question, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestedQuestion(question)}
                              className="ai-chat-suggestion-btn"
                              style={{
                                padding:
                                  "clamp(6px, 2vw, 8px) clamp(10px, 3vw, 12px)",
                                fontSize: "clamp(11px, 2.5vw, 12px)",
                                backgroundColor: "transparent",
                                border: "1px solid var(--primary-clr)",
                                borderRadius: "12px",
                                color: "var(--primary-clr)",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                fontWeight: "500",
                                whiteSpace: "nowrap",
                                minWidth: "fit-content",
                              }}
                            >
                              {window.innerWidth <= 480 && question.length > 20
                                ? question.substring(0, 17) + "..."
                                : question}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        padding:
                          "clamp(12px, 3vw, 16px) clamp(14px, 4vw, 20px)",
                        borderRadius: "15px 15px 15px 4px",
                        background: "white",
                        color: "var(--text-clr)",
                        fontSize: "clamp(13px, 3vw, 14px)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        border: "1px solid #e1e5e9",
                      }}
                    >
                      <div style={{ display: "flex", gap: "3px" }}>
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--primary-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out infinite both",
                          }}
                        />
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--primary-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out 0.16s infinite both",
                          }}
                        />
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--primary-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out 0.32s infinite both",
                          }}
                        />
                      </div>
                      <span>Secretary analyzing...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div
                className="ai-chat-input-area"
                style={{
                  padding: "clamp(12px, 3vw, 20px)",
                  background: "white",
                  borderTop: "1px solid #e1e5e9",
                  display: "flex",
                  gap: "clamp(8px, 2vw, 12px)",
                  alignItems: "flex-end",
                }}
              >
                <div style={{ flex: 1, position: "relative" }}>
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={
                      window.innerWidth <= 480
                        ? "Ask about Vincent..."
                        : "Ask about Vincent's background, schedule a meeting, or leave a message..."
                    }
                    className="ai-chat-input"
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 3vw, 12px) clamp(12px, 3vw, 16px)",
                      border: "2px solid #e1e5e9",
                      borderRadius: "clamp(20px, 5vw, 25px)",
                      fontSize: "clamp(13px, 3vw, 14px)",
                      outline: "none",
                      resize: "none",
                      minHeight: "clamp(36px, 8vw, 44px)",
                      maxHeight: "clamp(80px, 20vw, 120px)",
                      background: "#f8f9fa",
                      color: "var(--text-clr)",
                      transition: "all 0.3s ease",
                      fontFamily: "'Roboto', sans-serif",
                      WebkitAppearance: "none",
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(e);
                      }
                    }}
                    rows={1}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="ai-chat-send-btn"
                  style={{
                    width: "clamp(36px, 8vw, 44px)",
                    height: "clamp(36px, 8vw, 44px)",
                    borderRadius: "50%",
                    background:
                      inputMessage.trim() && !isTyping
                        ? "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)"
                        : "#ccc",
                    border: "none",
                    color: "var(--bg-clr-one)",
                    cursor:
                      inputMessage.trim() && !isTyping
                        ? "pointer"
                        : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow:
                      inputMessage.trim() && !isTyping
                        ? "0 3px 10px rgba(5, 85, 92, 0.3)"
                        : "none",
                    flexShrink: 0,
                  }}
                >
                  <Send size={window.innerWidth <= 768 ? 16 : 20} />
                </button>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          /* AI Chat Widget Animations */
          @keyframes aiChatSlideInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 100%, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes aiChatPulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes aiChatBounce {
            0%,
            80%,
            100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }

          /* Professional hover effects */
          .ai-chat-toggle-btn:hover {
            transform: ${isChatOpen
              ? "rotate(180deg) scale(1.1)"
              : "scale(1.1)"};
            box-shadow: 0 12px 35px rgba(5, 85, 92, 0.6);
          }

          .ai-chat-suggestion-btn:hover {
            background-color: var(--primary-clr);
            color: var(--bg-clr-one);
            transform: translateY(-1px);
          }

          .ai-chat-send-btn:hover:not(:disabled) {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(5, 85, 92, 0.4);
          }

          .ai-chat-input:focus {
            border-color: var(--primary-clr);
            background: white;
            box-shadow: 0 0 0 3px rgba(5, 85, 92, 0.1);
          }

          /* Custom scrollbar */
          .ai-chat-messages::-webkit-scrollbar {
            width: 4px;
          }

          .ai-chat-messages::-webkit-scrollbar-track {
            background: #f1f3f4;
            border-radius: 3px;
          }

          .ai-chat-messages::-webkit-scrollbar-thumb {
            background: var(--primary-clr);
            border-radius: 3px;
          }

          .ai-chat-messages::-webkit-scrollbar-thumb:hover {
            background: var(--links-clr);
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .ai-chat-input,
            .ai-chat-suggestion-btn {
              font-size: 16px !important;
            }

            .ai-chat-toggle-btn,
            .ai-chat-send-btn,
            .ai-chat-suggestion-btn {
              min-height: 44px;
              min-width: 44px;
            }

            .ai-chat-window {
              position: fixed !important;
              top: 10px !important;
              right: 10px !important;
              left: 10px !important;
              bottom: 10px !important;
              width: auto !important;
              height: auto !important;
              border-radius: 15px !important;
            }
          }

          @media (max-width: 320px) {
            .ai-chat-messages {
              padding: 6px !important;
            }

            .ai-chat-input-area {
              padding: 10px !important;
            }
          }

          @media (max-height: 500px) and (orientation: landscape) {
            .ai-chat-window {
              height: 70vh !important;
              max-height: 350px !important;
            }
          }

          /* Accessibility */
          @media (prefers-reduced-motion: reduce) {
            .ai-chat-toggle-btn,
            .ai-chat-window,
            .ai-chat-badge {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Services;
