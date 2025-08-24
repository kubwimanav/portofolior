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
import { MessageCircle, X, Send, Bot } from "lucide-react";
import "./App.css";
import ModelSearch from "./ModelSearch";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";

function Services() {
  const [openModel, setOpenModel] = useState(false);

  // Advanced AI Assistant states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "🚀 Welcome! I'm Vincent's Advanced AI Assistant. I can help you with:\n\n• Detailed project analysis\n• Skill assessments\n• Career timeline\n• Technology recommendations\n• Code examples\n• Hiring consultation\n\nWhat would you like to explore?",
      isBot: true,
      timestamp: new Date(),
      type: "welcome",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handlemadal = () => {
    setOpenModel(!openModel);
  };

  const onsubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Advanced AI Assistant functions
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const getAdvancedAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Advanced AI responses with detailed information
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech stack")
    ) {
      return {
        text: "🛠️ **Vincent's Technical Expertise:**\n\n**Frontend Development:**\n• React.js (Advanced) - Component architecture, Hooks, Context API\n• JavaScript ES6+ - Modern syntax, async/await, destructuring\n• HTML5/CSS3 - Semantic markup, Flexbox, Grid, animations\n• UI/UX Design - User-centered design, wireframing, prototyping\n\n**Tools & Frameworks:**\n• Version Control: Git/GitHub\n• Development: VS Code, browser DevTools\n• Design: Figma, Adobe Creative Suite\n\n**Current Learning:** Full-stack development, backend integration\n\nWould you like specific examples of how he's used these technologies?",
        type: "technical",
        suggestedQuestions: [
          "Show me project examples",
          "What makes Vincent different?",
          "Can you show code samples?",
        ],
      };
    } else if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return {
        text: "🚀 **Vincent's Featured Projects:**\n\n**1. Boostify YouTube** (Team Project - kLab Rwanda)\n• YouTube analytics dashboard\n• React.js frontend with modern UI\n• Team collaboration experience\n🔗 [View Live Demo](https://boostify-tube-network-frontend.vercel.app)\n\n**2. Feli Express Dashboard** (FeliTechnology)\n• Car rental management system\n• Real-time transaction tracking\n• 5 months development experience\n🔗 [View Dashboard](https://dashboard-ruby-iota-75.vercel.app/)\n\n**3. Event Management System** (Afritec)\n• Full-stack web application\n• Event planning and management\n• Modern responsive design\n🔗 [Explore System](https://event-system-wine.vercel.app)\n\n**Personal Projects:**\n• Holiday Planning App\n• Personal To-Do Application\n\nWhich project interests you most?",
        type: "portfolio",
        suggestedQuestions: [
          "Tell me about the team project",
          "What challenges did you solve?",
          "Show me the code structure",
        ],
      };
    } else if (
      message.includes("experience") ||
      message.includes("career") ||
      message.includes("journey")
    ) {
      return {
        text: "📈 **Vincent's Professional Journey:**\n\n**2025 - Present: Web Developer at Afritec**\n• Full-stack development focus\n• Event Management System implementation\n• Client collaboration and project delivery\n\n**2024: Frontend Developer at FeliTechnology**\n• 5 months intensive development\n• Built Feli Express dashboard from scratch\n• Managed company transaction systems\n\n**2023-2024: Frontend Developer & UI/UX Designer at kLab Rwanda**\n• 4-month intensive training program\n• Team project: Boostify YouTube\n• Learned modern development practices\n\n**2022-2023: Data Analyst at Co-Harvester Ministry**\n• Business intelligence and data processing\n• Informed decision-making support\n\n**Education:** Currently studying Information Systems at University of Rwanda (2021-present)\n\nVincent shows consistent growth and hands-on experience. What specific aspect interests you?",
        type: "career",
        suggestedQuestions: [
          "What makes Vincent hireable?",
          "Tell me about his growth",
          "What are his future goals?",
        ],
      };
    } else if (
      message.includes("hire") ||
      message.includes("contact") ||
      message.includes("available")
    ) {
      return {
        text: "💼 **Ready to Work with Vincent?**\n\n**Why Choose Vincent:**\n✅ Proven track record with real companies\n✅ Modern tech stack expertise\n✅ Team collaboration experience\n✅ Currently available for projects\n✅ Competitive rates for quality work\n\n**Contact Information:**\n📧 Email: vkubwimana@gmail.com\n📱 Use the contact form on this page\n💻 GitHub: Check out his code repositories\n\n**Project Types:**\n• Frontend web applications\n• UI/UX design and prototyping\n• Dashboard and admin panels\n• Responsive website development\n• React.js applications\n\n**Response Time:** Usually within 24 hours\n\nReady to start your project? Use the contact form above or reach out directly!",
        type: "hiring",
        suggestedQuestions: [
          "What are his rates?",
          "How does he work with clients?",
          "Can I see references?",
        ],
      };
    } else if (
      message.includes("education") ||
      message.includes("learning") ||
      message.includes("study")
    ) {
      return {
        text: "🎓 **Vincent's Educational Background:**\n\n**Current: University of Rwanda (2021-Present)**\n• Bachelor's in Information Systems\n• Focus on software development and system design\n• Combining theory with practical application\n\n**Professional Training:**\n• **kLab Rwanda Frontend Program** (2023-2024)\n  - 4-month intensive bootcamp\n  - React.js, JavaScript, UI/UX Design\n  - Team project development\n  - Industry best practices\n\n• **Data Analysis Certification** (2022-2023)\n  - Business intelligence tools\n  - Data processing and visualization\n  - Decision support systems\n\n**Foundation:**\n• **High School Diploma** - E.S.Rukozo (2014-2019)\n  - Mathematics, Computer Science, Economics\n  - Entrepreneurship foundation\n\n**Continuous Learning:** Vincent actively stays updated with latest web technologies and development practices.\n\nWhat aspects of his educational journey interest you most?",
        type: "education",
        suggestedQuestions: [
          "How does he stay current?",
          "What certifications does he have?",
          "Tell me about kLab Rwanda",
        ],
      };
    } else if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      const greetings = [
        "Hello! 👋 Great to meet you! I'm Vincent's advanced AI assistant.",
        "Hi there! 🚀 Welcome to Vincent's portfolio. How can I help you today?",
        "Hey! 😊 I'm here to help you learn everything about Vincent's skills and experience.",
      ];
      return {
        text:
          greetings[Math.floor(Math.random() * greetings.length)] +
          "\n\n**I can help you with:**\n• Technical skills and expertise\n• Project details and live demos\n• Career progression and experience\n• Hiring information and availability\n• Code examples and development approach\n\nWhat interests you most?",
        type: "greeting",
        suggestedQuestions: [
          "Tell me about his best projects",
          "Is he available for hire?",
          "What makes him special?",
        ],
      };
    } else {
      const responses = [
        "I'm Vincent's comprehensive AI assistant! I can provide detailed information about his technical skills, project portfolio, professional experience, and availability for hire.",
        "Let me help you discover Vincent's expertise! I can discuss his React.js projects, UI/UX design work, development approach, or hiring process.",
        "Welcome! I have extensive knowledge about Vincent's background, from his University studies to professional projects at FeliTechnology and Afritec.",
      ];
      return {
        text:
          responses[Math.floor(Math.random() * responses.length)] +
          "\n\n**Popular Topics:**\n• Project portfolio and live demos\n• Technical skills and code examples\n• Professional experience and growth\n• Hiring process and availability\n• Educational background and certifications\n\nWhat would you like to explore first?",
        type: "general",
        suggestedQuestions: [
          "Show me his best work",
          "What technologies does he use?",
          "Is he available for projects?",
        ],
      };
    }
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

    // Simulate advanced AI processing time
    setTimeout(() => {
      const aiResponse = getAdvancedAIResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        text: aiResponse.text,
        isBot: true,
        timestamp: new Date(),
        type: aiResponse.type || "general",
        suggestedQuestions: aiResponse.suggestedQuestions || [],
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
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
                Design
              </button>
              <button className="button" data-filter=".code">
                Development
              </button>
              <button className="button" data-filter=".logo">
                Logo
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
                  <a href="https://event-system-wine.vercel.app">
                    VIEW Project
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
                <p style={{fontSize:'14px'}}>
                  Passionate frontend developer with experience in building{" "}
                  <br />
                  modern, user-friendly web applications using React, Next.js,
                  and <br />
                  TypeScript. Always learning, creating, and improving to
                  deliver impactful <br /> digital solutions.
                </p>
              </div>
              <div className="vinct-p">
                <h3>Quik Links</h3>
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
              <p>© {new Date().getFullYear()} Vincent Turikubwimana.</p>
            </center>
          </div>
        </div>

        {/* Advanced AI Assistant Chat Widget */}
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

              {/* Pulse animation ring */}
              {!isChatOpen && (
                <div
                  className="ai-chat-pulse-ring"
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    borderRadius: "50%",
                    border: "2px solid rgba(5, 85, 92, 0.3)",
                    animation: "aiChatPulse 2s infinite",
                  }}
                />
              )}
            </button>

            {/* Notification badge */}
            {!isChatOpen && (
              <div
                className="ai-chat-badge"
                style={{
                  position: "absolute",
                  top: "clamp(0px, 1vw, 5px)",
                  right: "clamp(0px, 1vw, 5px)",
                  width: "clamp(18px, 4vw, 20px)",
                  height: "clamp(18px, 4vw, 20px)",
                  backgroundColor: "#ff4757",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(9px, 2vw, 10px)",
                  color: "white",
                  fontWeight: "bold",
                  animation: "aiChatBounce 1s infinite",
                }}
              >
                AI
              </div>
            )}
          </div>

          {/* Chat Window */}
          {isChatOpen && (
            <div
              className="ai-chat-window"
              style={{
                position: "absolute",
                bottom: "clamp(60px, 12vw, 70px)",
                right: "0",
                width: "clamp(280px, 90vw, 420px)",
                height: "clamp(400px, 70vh, 500px)",
                maxWidth: "95vw",
                maxHeight: "80vh",
                background:
                  "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)",
                borderRadius: "clamp(15px, 3vw, 20px)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                animation: "aiChatSlideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Chat Header */}
              <div
                className="ai-chat-header"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                  backdropFilter: "blur(10px)",
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
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Bot size={window.innerWidth <= 768 ? 18 : 24} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "clamp(13px, 3vw, 14px)",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "var(--bg-clr-one)",
                    }}
                  >
                    Vincent's AI Assistant
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
                        animation: "aiChatPulse 1.5s infinite",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "clamp(11px, 2.5vw, 12px)",
                        opacity: 0.9,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: "var(--bg-clr-one)",
                      }}
                    >
                      {window.innerWidth <= 480
                        ? "AI Online"
                        : "Advanced AI • Online"}
                    </span>
                  </div>
                </div>
                {/* Close button for mobile */}
                {window.innerWidth <= 480 && (
                  <button
                    onClick={toggleChat}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--bg-clr-one)",
                      cursor: "pointer",
                      padding: "4px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Messages Area */}
              <div
                className="ai-chat-messages"
                style={{
                  flex: 1,
                  padding: "clamp(8px, 2vw, 12px)",
                  overflowY: "auto",
                  background: "var(--bg-clr-one)",
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
                            ? "var(--primary-light-clr)"
                            : "linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)",
                          color: message.isBot
                            ? "var(--text-clr)"
                            : "var(--bg-clr-one)",
                          fontSize: "clamp(13px, 3vw, 14px)",
                          lineHeight: "1.5",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                          boxShadow: message.isBot
                            ? "0 3px 10px rgba(0,0,0,0.1)"
                            : "0 3px 10px rgba(5, 85, 92, 0.3)",
                          border: message.isBot
                            ? "1px solid var(--bg-clr-three)"
                            : "none",
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
                        background: "var(--primary-light-clr)",
                        color: "var(--text-clr)",
                        fontSize: "clamp(13px, 3vw, 14px)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "3px" }}>
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--text-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out infinite both",
                          }}
                        />
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--text-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out 0.16s infinite both",
                          }}
                        />
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--text-clr)",
                            borderRadius: "50%",
                            animation:
                              "aiChatBounce 1.4s ease-in-out 0.32s infinite both",
                          }}
                        />
                      </div>
                      <span>
                        {window.innerWidth <= 480
                          ? "AI analyzing..."
                          : "Advanced AI is analyzing..."}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div
                className="ai-chat-input-area"
                style={{
                  padding: "clamp(12px, 3vw, 20px)",
                  background: "var(--bg-clr-one)",
                  borderTop: "1px solid var(--bg-clr-three)",
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
                        : window.innerWidth <= 768
                        ? "Ask me about Vincent's skills..."
                        : "Ask me anything about Vincent's skills, projects, or availability..."
                    }
                    className="ai-chat-input"
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 3vw, 12px) clamp(12px, 3vw, 16px)",
                      border: "2px solid transparent",
                      borderRadius: "clamp(20px, 5vw, 25px)",
                      fontSize: "clamp(13px, 3vw, 14px)",
                      outline: "none",
                      resize: "none",
                      minHeight: "clamp(36px, 8vw, 44px)",
                      maxHeight: "clamp(80px, 20vw, 120px)",
                      background: "white",
                      color: "var(--text-clr)",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
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
                        : "var(--bg-clr-three)",
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
                        : "0 2px 6px rgba(0,0,0,0.1)",
                    transform: "scale(1)",
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
              transform: scale(1.1);
              opacity: 0.7;
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

          /* AI Chat Widget Hover Effects */
          .ai-chat-toggle-btn:hover {
            transform: ${isChatOpen
              ? "rotate(180deg) scale(1.1)"
              : "scale(1.1)"};
            box-shadow: 0 12px 35px rgba(5, 85, 92, 0.6);
          }

          .ai-chat-suggestion-btn:hover {
            background-color: var(--primary-clr);
            color: var(--bg-clr-one);
          }

          .ai-chat-send-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(5, 85, 92, 0.4);
          }

          .ai-chat-input:focus {
            border-color: var(--primary-clr);
            box-shadow: 0 4px 15px rgba(5, 85, 92, 0.2);
          }

          /* Custom scrollbar for AI chat */
          .ai-chat-messages::-webkit-scrollbar {
            width: 4px;
          }

          .ai-chat-messages::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
          }

          .ai-chat-messages::-webkit-scrollbar-thumb {
            background: linear-gradient(
              135deg,
              var(--primary-clr),
              var(--links-clr)
            );
            border-radius: 3px;
          }

          .ai-chat-messages::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              135deg,
              var(--links-clr),
              var(--primary-clr)
            );
          }

          /* Mobile touch improvements for AI chat */
          @media (max-width: 768px) {
            .ai-chat-input,
            .ai-chat-suggestion-btn,
            .ai-chat-send-btn {
              font-size: 16px !important; /* Prevent zoom on iOS */
            }

            .ai-chat-toggle-btn,
            .ai-chat-send-btn,
            .ai-chat-suggestion-btn {
              min-height: 44px;
              min-width: 44px;
            }

            .ai-chat-suggestion-btn:active {
              background-color: var(--primary-clr);
              color: var(--bg-clr-one);
            }

            .ai-chat-window {
              /* Full screen on very small devices */
              position: fixed !important;
              top: 20px !important;
              right: 20px !important;
              left: 20px !important;
              bottom: 20px !important;
              width: auto !important;
              height: auto !important;
              border-radius: 15px !important;
            }
          }

          /* Tablet adjustments for AI chat */
          @media (min-width: 481px) and (max-width: 768px) {
            .ai-chat-window {
              width: 350px !important;
              height: 450px !important;
            }
          }

          /* Small mobile phones AI chat adjustments */
          @media (max-width: 320px) {
            .ai-chat-messages {
              padding: 6px !important;
            }

            .ai-chat-input-area {
              padding: 10px !important;
            }
          }

          /* Landscape mobile adjustments for AI chat */
          @media (max-height: 500px) and (orientation: landscape) {
            .ai-chat-window {
              height: 70vh !important;
              max-height: 350px !important;
            }
          }

          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .ai-chat-toggle-btn,
            .ai-chat-window,
            .ai-chat-pulse-ring,
            .ai-chat-badge {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Services;
