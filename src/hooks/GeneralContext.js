import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const apiURL = "https://keab-api.onrender.com";
  const [navOpen, setNavOpen] = useState(false);
  const [teamNavOpen, setTeamNavOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingEvent, setLoadingEvent] = useState(false);
  const [messageSending, setMessageSending] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    content: "",
  });

  const heroImages = [
    "https://i.postimg.cc/qgVp1QtT/new-keab-hero.jpg",
    "https://i.postimg.cc/rsFMMHT9/hero-image-2.jpg",
    "https://i.postimg.cc/T2WZWG7W/hero-image-3.jpg",
  ];
  const team = [
    {
      name: "Yohanan Yokamo Yotona (LLB, BSc, LLM, PhD Cand)",
      position:
        "Founder and Executive Director | Human Rights Advocate | Ph.D. in Community Development Fellow | Law Lecturer, Community Development and Governance Specialist",
      image: "https://i.postimg.cc/prLGNbnY/yohanan-bio-image.jpg",
      team: "executive",
      description: [
        "Mr. Yohanan Yokamo Yotona is a visionary leader and an inspiring advocate for human rights, peacebuilding, and community development. As the Founder and Executive Director of KEABI Africa Community Development and Human Rights Organization (KACDHRO), he brings a wealth of academic expertise, professional experience, and a deep commitment to advancing community development, social justice, and inclusion.",
        "Mr. Yohanan is currently a Ph.D. Fellow in Community Development at Hawassa University, where his research focuses on sustainable solutions to enhance community development, resilience, and inclusion. He holds multiple academic honors, including a Bachelor of Science in Civil Engineering with distinction from US College, Ethiopia, as well as a Bachelor of Laws (LLB) and Master of Laws (LLM) with great distinction from Hawassa University.",
        "Throughout his career, Mr. Yohanan has held diverse leadership roles that demonstrate his dedication to fostering positive change. As the former Director of the International Relations and Alumni Affairs Directorate at Hawassa University, he strengthened institutional partnerships and fostered alumni engagement. In his role as the Coordinator of the Public Diplomacy Center at Hawassa University, he facilitated dialogue and collaboration to address pressing global and local issues. Earlier in his career, he served as an intern prosecutor, counselor, and officer at the Southern Nations, Nationalities, and Peoples’ Ethics and Anti-Corruption Commission, where he championed transparency, accountability, and ethical governance.",
        "Mr. Yohanan has represented Ethiopia on the international stage through numerous prestigious fellowships and programs. He completed the International Visitor Leadership Program (IVLP) Fellowship sponsored by the U.S. Department of State and participated in the Visiting Canada Global Affairs Scholarship at the University of Saskatchewan. Additionally, he earned certifications for attending International Staff Week at the University of Giessen in Germany in 2022, Academic Staff Mobility at Valladolid University in South Spain in 2021, and International Staff Week at the Public University of Navarra in North Spain in 2022. He also attended a training organized by the African Union to empower youth to combat corruption in Botswana in 2017. These global experiences have enriched his understanding of governance, diplomacy, and the importance of fostering partnerships to advance human rights and sustainable development.",
        "As an expert in human rights advocacy, Mr. Yohanan is deeply passionate about protecting vulnerable communities and promoting inclusion. His extensive work in peacebuilding focuses on developing strategies to address conflicts and promote social cohesion. He is an advocate for the rule of law and good governance, consistently promoting transparency, justice, and ethical leadership. His community development initiatives are designed to empower local communities through sustainable programs. His proficiency in international relations and diplomacy has enabled him to forge collaborations that address complex global challenges effectively.",
        "Mr. Yohanan also contributes to various pro bono activities and affiliations, further demonstrating his commitment to service. He has volunteered with UNICEF at the University of Saskatchewan in Canada and actively participates in the academic committee at Hawassa University’s College of Law and Governance. He is a member of the Southern Youth Professional Association in Hawassa, a research fellow with the Young African Leaders Initiative Network (YALINET), and an active participant in the HU Free Legal Aid Center and the Law Student Association at Hawassa University. Additionally, he is a member of the Ethics and Anti-Corruption Association in Hawassa.",
        "Guided by a vision to create a society where every individual, regardless of their background or circumstances, enjoys equal rights and opportunities, Mr. Yohanan leads transformative initiatives through KEABI Africa Community Development and Human Rights Organization. These initiatives encompass community-centered development programs, free legal aid services, human rights education, and advocacy efforts aimed at addressing systemic inequalities and empowering vulnerable groups. His unwavering commitment to sustainable development, democracy, justice, and inclusion continues to inspire transformative change in Ethiopia and beyond.",
      ],
    },
    {
      name: "Woyesa Woka Worana",
      position:
        "Country Director of HALE-Human Rights & Inclusion Network (H-HRIN) | Human Rights Lawyer | Co-Founder of KEABI Africa Community Development and Human Rights Organization",
      image: "https://i.postimg.cc/9X6Z5Bhv/woyessa-bio-photo.jpg",
      team: "executive",
      description: [
        "Woyesa is a dedicated human rights lawyer and advocate for climate justice, peace, gender equality, and inclusion. As the Country Director of HALE-Human Rights & Inclusion Network (H-HRIN), he leads initiatives promoting social justice, sustainability, and human rights across Ethiopia and beyond.",
        "As Co-Founder of  KEABI Africa Community Development and Human Rights Organization, Woyesa is committed to advancing sustainable development and protecting the rights of marginalized communities, working tirelessly to create a more just, inclusive, and sustainable world.",
      ],
    },
    {
      name: "Bereket Yoseph Sunkura (BA, MBA)",
      position: "Founder| BA, MBA, | Management Specialist",
      image: "https://i.postimg.cc/DZmLFjmK/bereket-bio-image.jpg",
      team: "executive",
      description: [
        "Bereket Yosef Sunkura (BA, MBA) is a visionary leader and an inspiring advocate for peacebuilding, women empowerment, humanitarian initiatives, and community development. As the Founder of KEABI Africa Community Development and Human Rights Organization (KACDHRO), she brings a wealth of expertise and dedication to advancing social justice and collective progress.",
        "Mrs. Bereket has achieved multiple academic milestones, including a Bachelor of Arts in Accounting and Finance and a Master of Business Administration. In addition, she earned a diploma in computer skills from Ethiopia, showcasing her commitment to both academic excellence and practical proficiency.",
        "Her professional journey encompasses diverse leadership roles that demonstrate her dedication to service and development. She served as the Head of the Women’s League in the Hayik Dar Sub City of the Hawassa City Administration and as Vice CEO of the Hawassa Bread and Flour Enterprise. She also coordinated the Public Library in Hawassa City and worked in the Youth Sport and Local Development Office. In addition, Mrs. Bereket actively participates as a member of the Hawassa City Women for Development Association.",
        "Her achievements are further complemented by certifications and recognitions that underline her contributions to community development. She has received a Certificate of Participation from the Hawassa Women, Children, and Youth Affairs Bureau and the Hawassa City Administration. Furthermore, she has completed courses on business entrepreneurship, reflecting her ongoing commitment to skill enhancement and leadership development.",
        "Mrs. Bereket’s expertise lies in several key areas, including community development, where she designs sustainable programs to empower local communities. Her leadership abilities are central to her efforts in protecting vulnerable communities and promoting inclusion. She is deeply engaged in peacebuilding, focusing on strategies to address conflicts and foster social cohesion. Additionally, she advocates for the rule of law and good governance, emphasizing transparency and justice.",
        "Her vision and commitment reflect her strong foundation in community engagement and leadership. With a good command of essential software programs and a relentless drive to work with organizations dedicated to community development and human rights, she seeks to create impactful advocacy programs that address systemic inequalities and empower vulnerable groups.",
        "Mrs. Bereket is dedicated to fulfilling her duties and responsibilities with honesty and passion, aligning her work with the mission of advancing social justice and development. She expresses her gratitude to those who take the time to review her profile, highlighting her enthusiasm and readiness to contribute meaningfully to the cause of community development and human rights.",
      ],
    },
    {
      name: "Natnael Ashenafi Getahun (Bsc,Msc)",
      position: "Technology Team",
      image: "https://i.postimg.cc/s2vXWD1W/natnael-ashenafi-bio.jpg",
      team: "technology",
      description: [
        "Natnael Ashenafi Getahun (BSc, MSc) is an accomplished engineer, educator, and lifelong learner dedicated to making a meaningful impact through his work. His academic journey began with a Bachelor’s degree in Mechanical Engineering, followed by a Master’s degree in Mechanical Design Engineering, and he is currently pursuing a Ph.D. in the same field. These milestones reflect his unwavering commitment to innovation and advancing engineering knowledge.",
        "As a Lecturer and Researcher at Hawassa University Institute of Technology, Natnael is privileged to teach and mentor aspiring engineers, guiding them toward excellence in their fields. His research focuses on mechanical design and its practical applications, aiming to develop sustainable solutions to address real-world challenges. His academic role complements his drive to explore the intersection of engineering innovation and societal benefit.",
        "Before transitioning to academia, Natnael gained valuable professional experience as a Production Engineer at MOHA Soft Drink Company. This role honed his technical expertise and leadership skills, equipping him with practical insights that inform his teaching and research today. Beyond his professional endeavors, Natnael is an active member of the Mechanical Engineers Association, reflecting his commitment to professional development and collaboration within his field.",
        "Natnael’s dedication extends beyond engineering, as he actively gives back to his community through various initiatives. He has held youth leadership roles at the Mekane Yesus Congregation Church in Hawassa and has participated in numerous social programs aimed at uplifting those around him. His community engagement underscores his belief in the transformative power of engineering and education to drive social progress.",
        "His commitment to continuous learning is evident in the international certifications he has earned. These include Programming with Python from the University of Michigan, Engineering Mechanics and Material Science from the Georgia Institute of Technology, Computer Programming from the University of Leeds, and Nano Fabrication Technologies from ITEC in Bangalore, India. These certifications reflect his determination to stay at the forefront of engineering and technology.",
        "Natnael’s strong communication, leadership, and management skills have enabled him to inspire and collaborate with others effectively. He envisions a future where technology is harnessed to address pressing societal challenges. With a focus on bridging the gap between technical expertise and community needs, Natnael aims to ensure his work contributes to meaningful and transformative change in people’s lives.",
      ],
    },
    {
      name: "Nebere Elias",
      image: "https://i.postimg.cc/k5BFJC7T/nebere-elias-bio.jpg",
      position: "Advisory Team member",
      team: "advisory",
      description: [
        "Nebere Elias is a 30 year-old health professional with an MSc in Advanced Cardiovascular Nurse Practitioner . He is an active member of the Young African Leadership Initiative (YALI) RLC East Africa Alumni and serves as an Ambassador for the 6th edition of the International Youth Conference. Nebere works as a government/Public/NGO/private institutions -employed and held different leadership Positions at Healthcare Facilities started from providing care,  holds the position of  Clinical Governance and Quality Improvements Officer of the hospital, Currently CEO of Dr Solomon Memorial Primary Hospital,  and  also volunteer at community , American Corners .",
        "He is the co-founder of the Serve Human In need of Medical access and Board Secretary, where he leads establishment as well strategic guidance.",
        "Nebere is founding member US Exchange Alumni Association Ethiopian ,member of  Ethiopian Cardiac Professional Society, Regional Coordinator For Ethiopian Nurse Association (Sidama Region) Country Director For Association of Mental Health Reform Organisations in Africa AMHROA Network and the Global Youth Network",
        "Nebere is passionate about youth empowerment and plans to establish a local youth initiative in the near future, committed to community development, advocating for youth empowerment, human rights, inclusivity, and youth participation. As a goal-oriented and analytical individual, Nebere is always eager to contribute to improving communities and driving positive change.",
      ],
    },
    {
      name: "Siyanne Mekonnen",
      position: "Advisory Team",
      team: "advisory",
      image: "https://i.postimg.cc/2y9zsgjp/siyanne-mekonnen-bio.jpg",
      description: [
        "Siyanne Mekonnen Abebe is a freelance journalist and social work graduate reporting for local and international media, including The Washington Post. As former Editor-in-Chief of Addis Standard, Ethiopia’s leading English magazine, she led multilingual reporting and investigative stories.",
        "Siyanne monitors humanitarian updates in Ethiopia and the Horn of Africa, with a focus on human rights and community development. She is also an alum of the U.S. State Department’s International Visitor Leadership Program (IVLP).",
      ],
    },
    {
      name: "Dr. Tsion Assefa Desalegn (PhD)",
      team: "board",
      position: "Board Chairperson",
      image: "https://i.postimg.cc/K8crsJDF/dr-tsion-bio.jpg",
      description: [
        "Dr. Tsion Assefa who is a Board Chairperson of KEABI AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. She has served as the OPD Case Team Coordinator at Abela Health Center for over three years. Additionally, she worked as a Nutrition Specialist and Public Health Emergency Management (PHEM) focal point at Wotera Hospital for four years. After completing my PhD, she joined Hawassa University as an Assistant Professor in the Department of Human Nutrition for six months, where she taught students and advised them on their research work.",
        "Internationally, she interned with UNICEF’s Addis Ababa Office in the Nutrition Section, focusing on the Community-Based Nutrition Program. During this time, she contributed to the compilation and analysis of data for the published paper titled ‘Vitamin A Supplementation and Estimated Number of Averted Child Deaths in Ethiopia: 15 Years in Practice (2005–2019).’ She also participated in an international course on Epidemiology, Biostatistics, and Qualitative Research Methods at the University of Antwerp, Belgium.",
        "Currently, she has worked as a Senior Technical Assistant in the Response and Recovery Directorate at the Public Health Emergency Management Center (PHEMc), Ethiopian Public Health Institute.",
      ],
    },
    {
      name: "Yosef Yotona Bode (BA, MA)",
      image: "https://i.postimg.cc/N0SncWdR/yosef-yotona-bio.jpg",
      position: "Vice Board Chairperson",
      team: "board",
      description: [
        "Mr. Yosef who is a Vice Board Chairperson of KEABI AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. He has served as the Chairperson of Ethiopian Council of Gospel Believers Churches of Sidama National Regional State’s Branch Office.",
        "Mr. Yosef experience at national level in Ethiopia as an Ethiopian Evangelical Church of Fellowship Chairperson and as an Ethiopian Evangelical Church of Rift Vally Mission Chairperson of Advisory Board and the Ethiopia Evangelical Robot Church Chairperson.",
        "The Educational Background of Mr. Yosef is that she holds a Master of Arts in Management, where he also earned his Advanced Diploma and Bachelor of Management degree from Hawassa University. He also participated in an international course related to Leadership and Theology.",
        "As the Vice Board Chairperson of KEABI Africa Community Development and Human Rights Organization, Mr. Yosef plays a pivotal role in steering the organization’s mission to promote community development, human rights, and sustainable development.",
        "Previously, he has worked as worked in Hawassa City Administrations Municipality’s, head of the two departments (Land and Human Resources Departments).",
        "His work experience and academic background provides a strong foundation for his work in advocating for peacebuilding’s, community development, and social justice",
      ],
    },
    {
      name: "Petros Gobaro Barrasa (LLB, MA)",
      team: "board",
      image: "https://i.postimg.cc/Mpvr4PdV/petros-gobaro-bio.jpg",
      position: "Board Member",
      description: [
        "Petros Gobaro is a distinguished legal professional and jurist with a profound commitment to justice, ethics, and human rights in Ethiopia. As the Board Member of KEABI AFRICA Community Development and Human Rights Organization promote community-oriented development, human rights and social inclusion is achieved.",
        "Petros Gobaro holds a bachelor’s degree in laws, where he graduated with Great Distinction, earning an Excellent grade for his thesis.'  His academic achievements reflect his deep expertise and dedication to the field of law.",
        "Currently, Petros Gobaro serves as the President of the Central Sidaama Zone High Court. In this prominent role, he leads the judiciary with integrity and a steadfast commitment to delivering justice. His leadership is characterized by a strong adherence to ethical principles and a relentless pursuit of fair legal outcomes.",
        "In addition to his judicial roles, Petros Gobaro has been a strong advocate for ethical governance. He previously worked as the senior judge in different courts in Sidama Region.",
        "As the Board Member of KEABI AFRICA Community Development and Human Rights Organization, Mr. Petros Gobara brings a wealth of experience, a passion for justice, and a commitment to ethical leadership. His guidance is vital to the organization’s efforts to advance human rights, foster social inclusion, and uphold the rule of law in Ethiopia.",
      ],
    },
    {
      name: "Addisu Petros Busha (BA, MBA)",
      image: "https://i.postimg.cc/HLq6KbL2/addisu-petros-bio.jpg",
      position: "Board Member",
      team: "board",
      description: [
        "The Educational Background of Mr. Addisu includes is that she holds a Master of Business Administration from Paradise Valley University, Ethiopia where he also earned her bachelor’s degree in management form Samara University, Afar, Ethiopia and Certificate of IT-Computer Diploma, Keylink Technologies Plc, Ethiopia. His academic background provides a strong foundation for his work in advocating for legal reforms, human rights education, and social justice.",
        "Mr. Addisu Petros Busha is a visionary young leader and has been working at Sidama National Regional State’s Hawassa City’s surround woreda in Ethiopia. He is known to me from the day he was hired in Sidama National Regional State Hawassa surrounding woreda. Besides, his works ethics, diligence and discipline are so worthy as he works hard to excel in his performance as per the norms of the organization",
        "He is an active participant in Sidama National Regional State Hawassa surrounding woreda’s various department and office responsibilities at various capacities in Ethiopia. Also, he has received good compliments from his fellow staff and community because he has shown his ability to coordinate and give leadership.",
        "As a Board Member of KEABI Africa Community Development and Human Rights Organization, he will be devoted to facilitating, mentoring, monitoring, leading, supervising, and motivating coworkers within multicultural settings.",
      ],
    },
    {
      name: "Yonas Yoseph",
      image: "https://i.postimg.cc/PJY49nQJ/yonas-yoseph-bio.jpg",
      position: "Board Member",
      team: "board",
      description: [
        "Yonas Yoseph holds a Bachelor of Science in Public Health and a Master’s degree in Public Health. He has dedicated his career to improving healthcare services within the public sector, currently working at Motite Furra Primary Hospital, which began operations as a COVID-19 treatment center on December 17, 2012 E.C. Yonas joined the hospital shortly after its inception and played a crucial role in expanding its services beyond COVID-19, contributing to the hospital receiving its official license on October 24, 2014 E.C.",
        "Throughout his professional journey, Yonas has taken on various leadership roles. He served as the Director of Nursing and Midwifery for two years, from which he developed strong leadership skills and gained invaluable experience. In February 2016, he transitioned to the hospital's quality unit as a Quality Officer, where he continues to ensure that high standards of care are maintained.",
        "As the Board Member of KEABI AFRICA Community Development and Human Rights Organization, Mr. Petros Gobara brings a wealth of experience, a passion for health education and community development in Ethiopia",
      ],
    },
  ];

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

  useEffect(function () {
    async function getEvents() {
      setLoadingEvent(true);
      const res = await fetch(`${apiURL}/events`);
      const data = await res.json();
      if (data.status === "success") {
        setEvents(data.data.events);
      }
      setLoadingEvent(false);
    }
    getEvents();
  }, []);

  async function sendMessage() {
    setMessageSending(true);
    const { name, email, content } = message;
    if (!email || !name || !message) {
      console.log("Fill out all fields");
      setMessageSending(false);
      alert("Please fill out all the required fields");
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
      setMessageSending(false);
      alert(data.message);
      return;
    }
    console.log("Message Sent");
    setMessage({
      name: "",
      email: "",
      content: "",
    });
    alert("Message Sent");
    setMessageSending(false);
  }

  return (
    <GeneralContext.Provider
      value={{
        apiURL,
        heroImages,
        coreValues,
        navOpen,
        setNavOpen,
        message,
        setMessage,
        sendMessage,
        messageSending,
        events,
        loadingEvent,
        team,
        teamNavOpen,
        setTeamNavOpen,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
