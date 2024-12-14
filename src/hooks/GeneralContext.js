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
    executiveTeam: [
      {
        image:"https://i.postimg.cc/prLGNbnY/yohanan-bio-image.jpg",
        name:"Yohanan Yokamo Yotona (LLB, BSc, LLM, PhD Cand)",
        position:"Founder and Executive Director | Human Rights Advocate | Ph.D. in Community Development Fellow | Law Lecturer, Community Development and Governance Specialist",
        description:[
          {
            type:"paragraph",
            content:"Mr. Yohanan Yokamo Yotona is a visionary leader and an inspiring advocate for human rights, peacebuilding, and community development. As a Founder and Executive Director of KEABI Africa Community Development and Human Rights Organization (KACDHRO), he brings a wealth of academic expertise, professional experience, and a deep commitment to advancing community development, social justice and inclusion."
          },
          {
            type:"paragraph",
            content:"Mr. Yohanan is currently a Ph.D. Fellow in Community Development at Hawassa University, where his research focuses on sustainable solutions to enhance community development, resilience and inclusion. He holds multiple academic honors, including a Bachelor of Science in Civil Engineering with distinction from US College, Ethiopia and a Bachelor of Laws (LLB) and Master of Laws (LLM) with great distinction from Hawassa University."
          },
          {
            type:"title",
            content:"Professional Experience"
          },
          {
            type:"paragraph",
            content:"Mr. Yohanan’s career spans diverse leadership roles, including:"
          },
          {
            type:"list",
            content:"Former Director of International Relations and Alumni Affairs Directorate, Hawassa University: Strengthened institutional partnerships and fostered alumni engagement."
          },
          {
            type:"list",
            content:"Former Coordinator of the Public Diplomacy Center, Hawassa University: Promoted dialogue and collaboration to address pressing global and local issues."
          },
          {
            type:"list",
            content:"Intern Prosecutor, Counselor, and Officer at the Southern Nations, Nationalities, and Peoples’ Ethics and Anti-Corruption Commission: Advocated for transparency, accountability, and ethical governance."
          },
          {
            type:"title",
            content:"Global Fellowships and Recognitions"
          },
          {
            type:"paragraph",
            content:"Mr. Yohanan has represented Ethiopia on the international stage, completing prestigious programs such as:"
          },
          {
            type:"list",
            content:"International Visitor Leadership Program (IVLP) Fellowship by the U.S. Department of State, USA."
          },
          {
            type:"list",
            content:"Visiting Canada Global Affairs Scholarship at the University of Saskatchewan."
          },
          {
            type:"list",
            content:"Certified for attending International Staff Week, University of Giessen, Germany, 2022"
          }
        ]
      }
    ],
    technologyTeam: [

    ],
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
