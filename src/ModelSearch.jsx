import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Calendar,
  Mail,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Phone,
  Video,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

function Services() {
  const [openModel, setOpenModel] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState("chat");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingType, setMeetingType] = useState("google-meet");
  const [meetingDuration, setMeetingDuration] = useState("30");
  const [appointmentPurpose, setAppointmentPurpose] = useState("");
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  
  // Booked appointments (in real app, this would come from a database)
  const [bookedAppointments, setBookedAppointments] = useState([
    {
      date: "2025-09-02",
      time: "10:00",
      duration: 60,
      client: "John Doe",
      type: "project-consultation"
    }
  ]);

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

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Available time slots (Vincent's working hours)
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  const meetingTypes = [
    { value: "google-meet", label: "Google Meet", icon: Video },
    { value: "zoom", label: "Zoom", icon: Video },
    { value: "phone", label: "Phone Call", icon: Phone },
    { value: "in-person", label: "In-Person (Kigali)", icon: MapPin },
  ];

  // Email sending simulation
  const sendEmailNotification = async (appointmentDetails) => {
    try {
      const emailData = {
        to: "vkubwimana@gmail.com",
        cc: appointmentDetails.clientEmail,
        subject: `New Appointment Scheduled - ${appointmentDetails.date} at ${appointmentDetails.time}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #05555c;">New Appointment Scheduled</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Appointment Details:</h3>
              <p><strong>Date:</strong> ${appointmentDetails.date}</p>
              <p><strong>Time:</strong> ${appointmentDetails.time} (Kigali Time)</p>
              <p><strong>Duration:</strong> ${appointmentDetails.duration} minutes</p>
              <p><strong>Type:</strong> ${appointmentDetails.meetingType}</p>
              <p><strong>Purpose:</strong> ${appointmentDetails.purpose}</p>
            </div>

            <div style="background: #e8f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Client Information:</h3>
              <p><strong>Name:</strong> ${appointmentDetails.clientName}</p>
              <p><strong>Email:</strong> ${appointmentDetails.clientEmail}</p>
              <p><strong>Phone:</strong> ${appointmentDetails.clientPhone}</p>
              ${appointmentDetails.clientCompany ? `<p><strong>Company:</strong> ${appointmentDetails.clientCompany}</p>` : ''}
            </div>
          </div>
        `,
      };

      console.log("Email notification sent:", emailData);
      return { success: true, message: "Email notification sent successfully" };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, message: "Failed to send email notification" };
    }
  };

  // Calendar helper functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const isDateAvailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
    checkDate.setHours(0, 0, 0, 0);
    
    if (checkDate < today) return false;
    
    const dayOfWeek = checkDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;
    
    return true;
  };

  const isTimeSlotAvailable = (time) => {
    if (!selectedDate) return true;
    
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    
    return !bookedAppointments.some(appointment => 
      appointment.date === dateStr && appointment.time === time
    );
  };

  const handleAppointmentBooking = async () => {
    if (!selectedDate || !selectedTime || !clientDetails.name || !clientDetails.email) {
      alert("Please fill in all required fields");
      return;
    }

    const appointmentData = {
      date: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`,
      time: selectedTime,
      duration: parseInt(meetingDuration),
      meetingType: meetingTypes.find(type => type.value === meetingType)?.label,
      purpose: appointmentPurpose,
      clientName: clientDetails.name,
      clientEmail: clientDetails.email,
      clientPhone: clientDetails.phone,
      clientCompany: clientDetails.company,
    };

    setBookedAppointments(prev => [...prev, {
      ...appointmentData,
      client: clientDetails.name,
      type: "scheduled"
    }]);

    const emailResult = await sendEmailNotification(appointmentData);
    
    const confirmationMessage = {
      id: messages.length + 1,
      text: `✅ **Appointment Successfully Scheduled!**\n\n📅 **Date:** ${appointmentData.date}\n🕐 **Time:** ${appointmentData.time} (Kigali Time)\n⏱️ **Duration:** ${appointmentData.duration} minutes\n💼 **Type:** ${appointmentData.meetingType}\n\n📧 **Confirmation emails sent to:**\n• Vincent: vkubwimana@gmail.com\n• You: ${appointmentData.clientEmail}\n\nVincent will contact you 15 minutes before the scheduled time. Thank you for scheduling with Vincent's portfolio services!`,
      isBot: true,
      timestamp: new Date(),
      type: "confirmation",
    };

    setMessages(prev => [...prev, confirmationMessage]);

    setIsCalendarOpen(false);
    setSelectedDate(null);
    setSelectedTime("");
    setClientDetails({ name: "", email: "", phone: "", company: "" });
    setAppointmentPurpose("");
    setCurrentMode("chat");
  };

  const getSecretaryResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("schedule") ||
      message.includes("appointment") ||
      message.includes("meeting") ||
      message.includes("book")
    ) {
      setCurrentMode("calendar");
      setIsCalendarOpen(true);
      
      return {
        text: "I'll help you schedule an appointment with Vincent. I'm opening the calendar booking system for you.\n\n📋 **Vincent's Availability:**\n• Monday-Friday, 9:00 AM - 6:00 PM (Kigali Time)\n• Meeting types: Google Meet, Zoom, Phone, In-person\n• Duration: 15, 30, or 60 minutes\n\nPlease select your preferred date and time from the calendar below.",
        type: "appointment",
        suggestedQuestions: [
          "Check this week availability",
          "Book urgent consultation",
          "Schedule project discussion",
        ],
      };
    }

    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work") ||
      message.includes("experience")
    ) {
      return {
        text: "**Vincent's Professional Experience:**\n\n**Current Work:**\n• Frontend Developer at Jackal Tech Ltd (March-May 2025)\n• Previously: Frontend Developer at FeliTechnology (Oct 2024-Jan 2025)\n• Software Developer at Klab Rwanda (Oct 2023-Jan 2024)\n\n**Key Projects:**\n• Boostify YouTube (Klab team project)\n• Feli Express Dashboard (FeliTechnology)\n• Event Management System (Afritec 2025)\n• Various ReactJS applications\n\n**Technical Skills:** ReactJS, JavaScript, HTML/CSS, UI/UX Design, System Analysis\n\nWould you like to schedule a consultation to discuss your project needs?",
        type: "portfolio",
        suggestedQuestions: [
          "Schedule project consultation",
          "Request detailed portfolio",
          "Discuss development timeline",
        ],
      };
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech") ||
      message.includes("qualification")
    ) {
      return {
        text: "**Vincent's Technical Qualifications:**\n\n**Education:**\n• Information Systems Student - University of Rwanda (2021-2025)\n• Software Development Training - Klab Rwanda (2023-2024)\n• Web Development Training - Afritec (Feb-Mar 2025)\n• Data Analysis Training - Co-harvester Ministry (2023)\n\n**Technical Skills:**\n• Frontend: HTML, CSS, JavaScript, ReactJS\n• Design: UI/UX, Figma\n• Analysis: System Analysis & Design, Data Analysis\n• Tools: Excel, Database Management\n\n**Languages:** English & Kinyarwanda (Fluent)\n\nContact: kubwimanavincent2020@gmail.com | 0789466837",
        type: "skills",
        suggestedQuestions: [
          "Schedule technical interview",
          "View references",
          "Discuss project requirements",
        ],
      };
    }

    if (
      message.includes("contact") ||
      message.includes("available") ||
      message.includes("reach") ||
      message.includes("hire")
    ) {
      return {
        text: "**Contact Vincent:**\n\n📧 **Email:** kubwimanavincent2020@gmail.com\n📱 **Phone:** 0789466837\n📍 **Location:** Kigali, Rwanda\n⏰ **Availability:** Mon-Fri, 9:00 AM - 6:00 PM\n\n**Professional References:**\n• Eric Tuyizere (FeliTechnology): +250 785283007\n• Robert Niyitanga (Klab): +250787491277\n• Jean Baptiste Niyonzima: +250788995896\n\n**Current Status:** Available for new projects\n**Response Time:** Within 24 hours\n\nWould you like to schedule a consultation?",
        type: "contact",
        suggestedQuestions: [
          "Schedule consultation now",
          "Request project quote",
          "Check immediate availability",
        ],
      };
    }

    return getDefaultResponse(message);
  };

  const getDefaultResponse = (message) => {
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return {
        text: "Hello! Welcome to Vincent Turikubwimana's professional portfolio. I'm his AI Secretary.\n\n**Quick Info:**\n• Frontend Developer & UI/UX Designer\n• Information Systems Student at University of Rwanda\n• Currently available for new projects\n• Located in Kigali, Rwanda\n\nHow can I assist you with Vincent's services today?",
        type: "greeting",
        suggestedQuestions: [
          "Schedule a meeting",
          "View his experience",
          "Get contact details",
        ],
      };
    }

    return {
      text: "I'm Vincent's professional secretary. I can help you with:\n\n• **Schedule appointments** using our calendar system\n• **Project inquiries** and technical discussions\n• **Contact information** and references\n• **Professional background** and experience details\n\nWhat would you like to know about Vincent's services?",
      type: "general",
      suggestedQuestions: [
        "Book appointment",
        "View experience",
        "Get contact info",
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

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

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

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handlemadal = () => {
    setOpenModel(!openModel);
  };

  const onsubmit = (data) => {
    console.log("Contact form submitted:", data);
    alert("Thank you for your message! Vincent will respond within 24 hours.");
    reset();
  };

  // Calendar navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const Calendar = () => {
    const days = getDaysInMonth(currentDate);
    const monthYear = formatDate(currentDate);
    const today = new Date();

    return (
      <div className="calendar-container" style={{
        background: 'white',
        borderRadius: '15px',
        padding: '20px',
        margin: '15px 0',
        border: '2px solid var(--primary-clr)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        {/* Calendar Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <button onClick={goToPreviousMonth} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            color: 'var(--primary-clr)'
          }}>
            <ChevronLeft size={20} />
          </button>
          
          <h3 style={{
            margin: 0,
            color: 'var(--primary-clr)',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            {monthYear}
          </h3>
          
          <button onClick={goToNextMonth} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            color: 'var(--primary-clr)'
          }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Days of week header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px',
          marginBottom: '10px'
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} style={{
              padding: '8px 4px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#666'
            }}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px'
        }}>
          {days.map((day, index) => {
            const isToday = day && 
              currentDate.getFullYear() === today.getFullYear() &&
              currentDate.getMonth() === today.getMonth() &&
              day === today.getDate();
            
            const isSelected = day === selectedDate;
            const isAvailable = day && isDateAvailable(day);

            return (
              <button
                key={index}
                onClick={() => isAvailable ? setSelectedDate(day) : null}
                disabled={!isAvailable}
                style={{
                  padding: '12px 4px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isAvailable ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  fontWeight: isSelected || isToday ? '600' : '400',
                  background: isSelected 
                    ? 'var(--primary-clr)' 
                    : isToday 
                      ? 'rgba(5, 85, 92, 0.1)' 
                      : isAvailable 
                        ? 'transparent' 
                        : '#f5f5f5',
                  color: isSelected 
                    ? 'white' 
                    : isAvailable 
                      ? 'var(--text-clr)' 
                      : '#ccc',
                  transition: 'all 0.2s ease',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {day || ''}
              </button>
            );
          })}
        </div>

        {/* Selected date info */}
        {selectedDate && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(5, 85, 92, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(5, 85, 92, 0.2)'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--primary-clr)' }}>
              Selected: {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric' 
              })}
            </h4>
            
            {/* Time slots */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                Available Times:
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
                gap: '8px'
              }}>
                {timeSlots.map(time => {
                  const available = isTimeSlotAvailable(time);
                  return (
                    <button
                      key={time}
                      onClick={() => available ? setSelectedTime(time) : null}
                      disabled={!available}
                      style={{
                        padding: '8px 4px',
                        border: selectedTime === time ? '2px solid var(--primary-clr)' : '1px solid #ddd',
                        borderRadius: '6px',
                        background: selectedTime === time 
                          ? 'var(--primary-clr)' 
                          : available 
                            ? 'white' 
                            : '#f5f5f5',
                        color: selectedTime === time 
                          ? 'white' 
                          : available 
                            ? 'var(--text-clr)' 
                            : '#999',
                        cursor: available ? 'pointer' : 'not-allowed',
                        fontSize: '12px',
                        fontWeight: selectedTime === time ? '600' : '400'
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Meeting details form */}
            {selectedTime && (
              <div style={{ marginTop: '20px' }}>
                {/* Meeting type */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    Meeting Type:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px' }}>
                    {meetingTypes.map(type => (
                      <button
                        key={type.value}
                        onClick={() => setMeetingType(type.value)}
                        style={{
                          padding: '10px 8px',
                          border: meetingType === type.value ? '2px solid var(--primary-clr)' : '1px solid #ddd',
                          borderRadius: '8px',
                          background: meetingType === type.value ? 'rgba(5, 85, 92, 0.1)' : 'white',
                          color: 'var(--text-clr)',
                          cursor: 'pointer',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <type.icon size={14} />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    Duration:
                  </label>
                  <select
                    value={meetingDuration}
                    onChange={(e) => setMeetingDuration(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>

                {/* Client details */}
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    Your Details:
                  </label>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={clientDetails.name}
                      onChange={(e) => setClientDetails(prev => ({ ...prev, name: e.target.value }))}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      value={clientDetails.email}
                      onChange={(e) => setClientDetails(prev => ({ ...prev, email: e.target.value }))}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      value={clientDetails.phone}
                      onChange={(e) => setClientDetails(prev => ({ ...prev, phone: e.target.value }))}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      value={clientDetails.company}
                      onChange={(e) => setClientDetails(prev => ({ ...prev, company: e.target.value }))}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                </div>

                {/* Meeting purpose */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                    Meeting Purpose:
                  </label>
                  <textarea
                    placeholder="Brief description of what you'd like to discuss..."
                    value={appointmentPurpose}
                    onChange={(e) => setAppointmentPurpose(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '14px',
                      minHeight: '80px',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Book appointment button */}
                <button
                  onClick={handleAppointmentBooking}
                  disabled={!clientDetails.name || !clientDetails.email}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: clientDetails.name && clientDetails.email 
                      ? 'linear-gradient(135deg, var(--primary-clr) 0%, var(--links-clr) 100%)'
                      : '#ccc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: clientDetails.name && clientDetails.email ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease'
                  }}
                >
                  📅 Schedule Appointment & Send Email
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
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
   