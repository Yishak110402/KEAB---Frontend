import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const apiURL = "https://keab-api.onrender.com";
  const [navOpen, setNavOpen] = useState(false);
  const [events, setEvents] = useState([])
  const [loadingEvent, setLoadingEvent] = useState(false)
  const [messageSending, setMessageSending] = useState(false)
  const [message, setMessage] = useState({
    name: "",
    email: "",
    content: "",
  });

  const team = {
    executiveTeam: [],
    technologyTeam: [],
  };

  const coreValues = [
    {
      title: "Justice and Equality",
      description:
        "Promoting fairness and equal oppurtunity in all aspects of community development",
    },
    {
      title: "Empowerment",
      description:
        "Strengthening the capabilities of individuals, especially marginalized groups, to drive positive change",
    },
    {
      title: "Sustainability",
      description:
        "Committing to environmentally responsible practices that ensure long-term community well-being",
    },
    {
      title: "Integrity",
      description:
        "Upholding the highest standards of accountability, transparency, and ethical conduct.",
    },
    {
      title: "Collaboration",
      description:
        "Building partnerships and fostering inclusive participation in all our initiatives.",
    },
  ];

  useEffect(function(){
    async function getEvents(){
      setLoadingEvent(true)
      const res = await fetch(`${apiURL}/events`)
      const data = await res.json()
      if (data.status === 'success'){
        setEvents(data.data.events)        
      }
      setLoadingEvent(false)
    }
    getEvents()
  },[])

  async function sendMessage() {
    setMessageSending(true)
    const { name, email, content } = message;
    if (!email || !name || !message) {
      console.log("Fill out all fields");
      setMessageSending(false)
      alert("Please fill out all the required fields")
      return;
    }
    const res = await fetch(`${apiURL}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message: content }),
    });
    const data = await res.json();
    if (data.status === "fail") {
      console.log(data.message);
      setMessageSending(false)
      alert(data.message)
      return
    }
    console.log("Message Sent");
    setMessage({
      name: "",
      email: "",
      content: "",
    })
    alert("Message Sent");
    setMessageSending(false)
  }

  return (
    <GeneralContext.Provider
      value={{
        apiURL,
        coreValues,
        navOpen,
        setNavOpen,
        message,
        setMessage,
        team,
        sendMessage,
        messageSending,
        events,
        loadingEvent
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
