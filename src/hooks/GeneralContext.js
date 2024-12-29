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
    "https://i.postimg.cc/yNyPpjYH/keab-logo-2.jpg",
  ];
  const team = [
    {
      name: "Yohanan Yokamo Yotona (LLB, BSc, LLM, PhD Cand)",
      position:
        "Founder and Executive Director | Human Rights Advocate | Ph.D. in Community Development Fellow | Law Lecturer, Community Development and Governance Specialist",
      image: "https://i.postimg.cc/prLGNbnY/yohanan-bio-image.jpg",
      team: "executive",
      description: [
        "Mr. Yohanan Yokamo Yotona is a visionary leader and an inspiring advocate for human rights, peacebuilding, and community development. As the Founder and Executive Director of KEAB Africa Community Development and Human Rights Organization (KACDHRO), he brings a wealth of academic expertise, professional experience, and a deep commitment to advancing community development, social justice, and inclusion.",
        "Mr. Yohanan is currently a Ph.D. Fellow in Community Development at Hawassa University, where his research focuses on sustainable solutions to enhance community development, resilience, and inclusion. He holds multiple academic honors, including a Bachelor of Science in Civil Engineering with distinction from US College, Ethiopia, as well as a Bachelor of Laws (LLB) and Master of Laws (LLM) with great distinction from Hawassa University.",
        "Throughout his career, Mr. Yohanan has held diverse leadership roles that demonstrate his dedication to fostering positive change. As the former Director of the International Relations and Alumni Affairs Directorate at Hawassa University, he strengthened institutional partnerships and fostered alumni engagement. In his role as the Coordinator of the Public Diplomacy Center at Hawassa University, he facilitated dialogue and collaboration to address pressing global and local issues. Earlier in his career, he served as an intern prosecutor, counselor, and officer at the Southern Nations, Nationalities, and Peoples’ Ethics and Anti-Corruption Commission, where he championed transparency, accountability, and ethical governance.",
        "Mr. Yohanan has represented Ethiopia on the international stage through numerous prestigious fellowships and programs. He completed the International Visitor Leadership Program (IVLP) Fellowship sponsored by the U.S. Department of State and participated in the Visiting Canada Global Affairs Scholarship at the University of Saskatchewan. Additionally, he earned certifications for attending International Staff Week at the University of Giessen in Germany in 2022, Academic Staff Mobility at Valladolid University in South Spain in 2021, and International Staff Week at the Public University of Navarra in North Spain in 2022. He also attended a training organized by the African Union to empower youth to combat corruption in Botswana in 2017. These global experiences have enriched his understanding of governance, diplomacy, and the importance of fostering partnerships to advance human rights and sustainable development.",
        "As an expert in human rights advocacy, Mr. Yohanan is deeply passionate about protecting vulnerable communities and promoting inclusion. His extensive work in peacebuilding focuses on developing strategies to address conflicts and promote social cohesion. He is an advocate for the rule of law and good governance, consistently promoting transparency, justice, and ethical leadership. His community development initiatives are designed to empower local communities through sustainable programs. His proficiency in international relations and diplomacy has enabled him to forge collaborations that address complex global challenges effectively.",
        "Mr. Yohanan also contributes to various pro bono activities and affiliations, further demonstrating his commitment to service. He has volunteered with UNICEF at the University of Saskatchewan in Canada and actively participates in the academic committee at Hawassa University’s College of Law and Governance. He is a member of the Southern Youth Professional Association in Hawassa, a research fellow with the Young African Leaders Initiative Network (YALINET), and an active participant in the HU Free Legal Aid Center and the Law Student Association at Hawassa University. Additionally, he is a member of the Ethics and Anti-Corruption Association in Hawassa.",
        "Guided by a vision to create a society where every individual, regardless of their background or circumstances, enjoys equal rights and opportunities, Mr. Yohanan leads transformative initiatives through KEAB Africa Community Development and Human Rights Organization. These initiatives encompass community-centered development programs, free legal aid services, human rights education, and advocacy efforts aimed at addressing systemic inequalities and empowering vulnerable groups. His unwavering commitment to sustainable development, democracy, justice, and inclusion continues to inspire transformative change in Ethiopia and beyond.",
      ],
    },
    {
      name: "Woyesa Woka Worana",
      position:
        "Country Director of HALE-Human Rights & Inclusion Network (H-HRIN) | Human Rights Lawyer | Co-Founder of KEAB Africa Community Development and Human Rights Organization",
      image: "https://i.postimg.cc/9X6Z5Bhv/woyessa-bio-photo.jpg",
      team: "executive",
      description: [
        "Woyesa is a dedicated human rights lawyer and advocate for climate justice, peace, gender equality, and inclusion. As the Country Director of HALE-Human Rights & Inclusion Network (H-HRIN), he leads initiatives promoting social justice, sustainability, and human rights across Ethiopia and beyond.",
        "As Co-Founder of  KEAB Africa Community Development and Human Rights Organization, Woyesa is committed to advancing sustainable development and protecting the rights of marginalized communities, working tirelessly to create a more just, inclusive, and sustainable world.",
      ],
    },
    {
      name: "Bereket Yoseph Sunkura (BA, MBA)",
      position: "Founder| BA, MBA, | Management Specialist",
      image: "https://i.postimg.cc/DZmLFjmK/bereket-bio-image.jpg",
      team: "executive",
      description: [
        "Bereket Yosef Sunkura (BA, MBA) is a visionary leader and an inspiring advocate for peacebuilding, women empowerment, humanitarian initiatives, and community development. As the Founder of KEAB Africa Community Development and Human Rights Organization (KACDHRO), she brings a wealth of expertise and dedication to advancing social justice and collective progress.",
        "Mrs. Bereket has achieved multiple academic milestones, including a Bachelor of Arts in Accounting and Finance and a Master of Business Administration. In addition, she earned a diploma in computer skills from Ethiopia, showcasing her commitment to both academic excellence and practical proficiency.",
        "Her professional journey encompasses diverse leadership roles that demonstrate her dedication to service and development. She served as the Head of the Women’s League in the Hayik Dar Sub City of the Hawassa City Administration and as Vice CEO of the Hawassa Bread and Flour Enterprise. She also coordinated the Public Library in Hawassa City and worked in the Youth Sport and Local Development Office. In addition, Mrs. Bereket actively participates as a member of the Hawassa City Women for Development Association.",
        "Her achievements are further complemented by certifications and recognitions that underline her contributions to community development. She has received a Certificate of Participation from the Hawassa Women, Children, and Youth Affairs Bureau and the Hawassa City Administration. Furthermore, she has completed courses on business entrepreneurship, reflecting her ongoing commitment to skill enhancement and leadership development.",
        "Mrs. Bereket’s expertise lies in several key areas, including community development, where she designs sustainable programs to empower local communities. Her leadership abilities are central to her efforts in protecting vulnerable communities and promoting inclusion. She is deeply engaged in peacebuilding, focusing on strategies to address conflicts and foster social cohesion. Additionally, she advocates for the rule of law and good governance, emphasizing transparency and justice.",
        "Her vision and commitment reflect her strong foundation in community engagement and leadership. With a good command of essential software programs and a relentless drive to work with organizations dedicated to community development and human rights, she seeks to create impactful advocacy programs that address systemic inequalities and empower vulnerable groups.",
        "Mrs. Bereket is dedicated to fulfilling her duties and responsibilities with honesty and passion, aligning her work with the mission of advancing social justice and development. She expresses her gratitude to those who take the time to review her profile, highlighting her enthusiasm and readiness to contribute meaningfully to the cause of community development and human rights.",
      ],
    },
    {
      name:"Betelhem Mekonen (BA, BSc, Social Anthropologist)",
      position:"Co-founder",
      image:"https://i.postimg.cc/P5SDBL2V/betty-bio.jpg",
      team:"executive",
      description:[
        "Mrs. Betelhem who is an Advisory Team of KEAB Africa Community Development and Human Rights Organization works as a co-funder of the organization plays a Gender Equality & Human Rights Advocate and Researcher and a Community Impact Leader.",
        "The Educational Background of Mrs. Betelhem is that she holds a bachelor’s degree in social Anthropology from Wollo University in Ethiopia in 2017 and additional she holds Bachelor of Art in Finance too. Her academic background provides a strong foundation for her work in advocating for community development, women and Childs education, and social empowerments.",
        "In her professional career, Mr. Betelhem has served in different positions that she worked as a Social Worker in Compassion Ethiopia. Also, she worked as customer service officer in Vision Fund F. Institutes, S.C. Her main role was achieving the Company’s main target that is supporting mothers and children in the lower stratum of the society, she has passionately and devotedly served to support such people. Additionally, she is a member of Pastoral Leadership Committee, Teaching and Moulding Children as well as participating in the Charity activities in the society. Mrs. Betelhem’s previous roles further highlight her commitment to social change and community empowerment.",
        "As the co-founder of KEAB Africa Community Development and Human Rights Organization, Mrs. Betelhem with unwavering commitment plays a pivotal role in steering the organization’s mission to promote community development, human rights, social inclusion, and gender equality across Ethiopia."
      ]
    },
    {
      name:"Dr. Mulualem Tesfaye (Doctor in Dental Medicine, Speciality Fellow in Oral and Maxillofacial Surgery)",
      position:"Co-founder",
      team:"executive",
      image:'https://i.postimg.cc/43MWbDbx/mule-bio.jpg',
      description:[
        "Dr. Mulualem Tesfaye who is a Co-founder of KEAB AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. Dr. Mulualem lives and works in Hawassa City in Ethiopia offering dental medicine services with his deep-rooted experience in both academic expertise and diverse international experience. Dr. Mulualem has received a Doctorate degree from Jimma University in Ethiopia and currently he is also a Speciality Fellow in Oral and Maxillofacial Surgery Program at Hawassa University, College of Medicine and Health Science.",
        "In addition, Dr. Mulualem has involved in variety of voluntary activities including in helping women and children through charity programs in Sidama National Regional States in Ethiopia. His academic background provides a strong foundation for her work in advocating for community development, women and Childs education, and social empowerments. Currently, he has worked as a Senior Dental Medical Doctor in Hawassa University Comprehensive Specialized Referral Hospital. He has served as the Dental OPD Case Team Coordinator at Hawassa University Compressive Specialized Referral Hospital. As part of founder of KEAB Africa Community Development and Human Rights Organization, Dr. Mulualem is committed to offering strategic advice on organizational wellness and global aspects.",
        "As the co-founder of KEAB Africa Community Development and Human Rights Organization, Dr. Mulualem with unwavering commitment plays a pivotal role in steering the organization’s mission to promote community development, human rights, social inclusion, and gender equality across Ethiopia. His unique expertise in both local and international organization, combined with his dedication to empowering clients, makes him an invaluable resource for those looking to optimize the organizational activities for KEAB Africa Community Development and Human Rights Organization."
      ]
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
      name:"Bisrat Borsamo Borago (BSc in Mechanical Engineering, BSc in Electromechanics)",
      image:"https://i.postimg.cc/T1ZxzN6d/bisrat-image.jpg",
      team:"technology",
      position:"Technology Team",
      description:[
        "With a bachelor’s degrees in mechanical engineering, BSc in Electromechanics from Mekelle University, Tigray Region, Ethiopia, Mr. Bisrat combines his solid technology background with deep understanding of digital dynamics. Mr. Bisrat Borsamo as a Technology Team member of KEAB Africa Community Development and Human Rights Organization, he has sufficing knowledge related to computer and technology works.",
        "He is experienced with different software’s like Microsoft, Adobe, Programing, the internet online apps and others. So far, his related experience, he has an experience of computer maintenance at industries in Mekelle city in Ethiopia. He is surfing the internet for up-to-date information, news and new technology.",
        "Mr. Bisrat who is a Technology Team member of KEAB Africa Community Development and Human Rights Organization, is committed to offering clients informed and strategic technology advice on organizational wellness and global aspects and works with great commitment and passion for technology and engineering."
      ]
    },
    {
      name:"Beteselam Yokamo (BSc)",
      position:"Editor & Event Organizer",
      team:"technology",
      image:"https://i.postimg.cc/sDNgQ0yK/beteselam-bio.jpg",
      description:[
        "Ms. Beteselam as a Technology Team member/Camera Edition/Event Organizer of KEAB Africa Community Development and Human Rights Organization, she has sufficing knowledge related to computer and technology works.",
        "She is experienced with different softwares like Microsoft word, Microsoft excel, Microsoft PowerPoint, Adobe, Camera, Editor the internet online apps and others.  So far her related experience, she has an experience of computer software and Camera Edition at Hawassa City in Ethiopia. She is surfing the photo and video editor with up-to-date information and new technology.",
        "Ms. Beteselam who is a Technology Team member of KEABI Africa Community Development and Human Rights Organization, works with great commitment and passion for technology and edition."
      ]
    },
    
    {
      name:"Mihiretu Samuel Gabara (BSc)",
      team:"technology",
      position:"Technology Team",
      image:"https://i.postimg.cc/Y9Mh0MnL/mihretu-bio.jpg",
      description:[
        "Mr. Mihiretu as a Technology Team member of KEAB Africa Community Development and Human Rights Organization, he has sufficing knowledge related to computer and technology works.",
        "He is experienced with different softwares like Microsoft word, Microsoft excel, Microsoft PowerPoint, Adobe, the internet online apps and others.  So far his related experience, he has an experience of computer maintenance at Wonji St. Mary Catholic Church in Ethiopia. He is surfing the internet for up-to-date information, news and new technology.",
        "Mr. Mihiretu who is a Technology Team member of KEAB Africa Community Development and Human Rights Organization, works with great commitment and passion for technology ."
      ]
    },
    { 
      name:"Dr. Sivakumar Somasundaram",
      image:"https://i.postimg.cc/5yty5pMx/dr-sivar.jpg",
      team:"advisory",
      position:"Advisory Team",
      description:[
        "He pursued his master's (M.A. in Development Administration) and Doctoral program (Public Administration) at Gandhigram Rural University, Dindigul, Tamil Nadu. He has been coordinating the activities of six Master Programs as a coordinator of PG programs at the school. He specializes in Development Management, Human Resource Management, Project Planning and Management, Policy Making and Analysis, and Governance and Development Management. He has sixteen years of experience in teaching, research, and outreach programs. He has been at Hawassa University since 2008. He is solid in all three aspects of higher education: teaching, research, and extension/ community service activities. He has designed and introduced two innovative Master's programs, one in Development Management and the other in Governance and Development, and both programs are supported by the Ministry of Education, Ethiopia. He has been serving as a member of the Board of Studies and as an External examiner for the following Ethiopian Universities: Jimma University, Ambo University, Wolaita Sodo University, Arba Minch University, Dilla University, and Civil Service University.",
        "He has also been Serving as a Board of Examiner (as an External Examiner) for the adjudication of Ph.D. thesis of the following universities of India, namely, the University of Madras, Chennai, Tamil Nadu, The Gandhigram Rural Institute- Deemed University, Annamalai University, Bharathidasan University, Bharathiyar University, Azhagappa University and Periyar University. He also serves as a secretary of the School Graduate Committee and a standing member of the School Staff Promotion Committee.",
        "He has published seven books and thirty-nine articles in referred journals. He has presented at Twenty-five International Conferences, fifteen National Programmes, twenty Regional Seminars and Conferences, and thirty-five invited talks in India and abroad. He acted as a resource person for forty-one national and International Conferences in India.",
        "Mercy Corps, Oxfam, and World Vision Ethiopia and collaborated with them to prepare Project Proposals and monitoring and Evaluation activities, including the preparation of log frames",
        "He has been conducting various training programs as a part of community services from Hawassa University for the cabinet ministers of the Regional State and other sectoral bureaus of the South Nation Nationalities and Regional State and Sidaama Regional State of Ethiopia. He has been serving as the editor-in-chief for the International Journal known as 'The Ethiopian Journal of Governance and Development' (EJGD). Furthermore, he has been serving as the convenor from Hawassa University for the Indian Education Forum of the Embassy of India in Ethiopia. He has organized various programs of the Embassy in and around the university."
      ]
    },
    {
      name:"Sebsibe Sasamo (LLB, LLM in Criminal Justice)",
      image:'https://i.postimg.cc/bvsZfWXb/sebsibe-bio.png',
      position:"Advisory Team",
      team:"advisory",
      description:[
        "The Advisory Team of KEAB Africa Community Development and Human Rights Organization, Mr. Sebsibe who is a Public Prosecutor & Human Rights Advocate and Researcher and also a Social Justice Leader.",
        "The Educational Background of Mr. Sebsibe is that he holds an LLM/Master of Laws in Criminal Justice from the School of Law, College of Law and Governance at Hawassa University, where he also earned his Bachelor of Laws (LLB) degree from Adama University, Oromia Region, Ethiopia. His academic background provides a strong foundation for his work in advocating for legal reforms, human rights education, and social justice.",
        "Mr. Sebsibe experience as a senior public prosecutor in different offices in Ethiopia, and as a Human Rights Volunteer at the Legal Aid Centers, reflects his dedication to education and capacity building in the legal and development field. Mr. Sebsibe’s work in volunteer organizations and his volunteer efforts have contributed to the development of future legal professionals and the provision of essential legal services to marginalized communities.",
        " Mr. Sebsibe’s unwavering commitment to justice, human rights, gender equality, and sustainable development continues to inspire his work at KEAB Africa Community Development and Human Rights Organization, where he strives to create a developed community and inclusion of human rights. As the advisory Team of KEAB Africa Community Development and Human Rights Organization, Mr. Sebsibe plays a pivotal role in steering the organization’s mission to promote human rights, social inclusion, and gender equality across Ethiopia."
      ]
    },
    {
      name:"Ruth Seifu Mola (LLB, LLM, MA)",
      position:"Advisory Team",
      image:"https://i.postimg.cc/mrRbNVQ0/rutu-bio.jpg",
      team:"advisory",
      description:[
        "The Educational Background of Ruti Seifu is that she holds a master’s in international human Rights Law, where she also earned her Bachelor of Laws (LLB) degree and also another master’s in political science and international Relations and also holds an Advanced certificate in Leadership and Administration",
        "In her professional career, she has been serving as head of filed unit of United Nations High Commissioner for Refugees (UNHCR). She monitors and reports on the implementation of refugee conventional responsibilities and international obligations of the local authorities vis-à-vis the population of concern to UNHCR within the AOR. And she advocates and promote UNHCR standards concerning the treatment of persons of concern. Further she ensures that the basic needs of the concerned population are properly assessed with the participation of the beneficiaries themselves, the host governments and/or the competent Implementing partners and/or UNHCR itself. Subject to the needs, ensure that the planning, formulation and budgeting of identified assistance projects are done as per UNHCR programme cycle; upon approval of assistance project, she ensures the timely implementation and monitoring of identified assistance activities.",
        "Rutu has unwavering commitment to human rights, gender equality, and sustainable development continues to inspire her work at KEAB Africa Community Development and Human Rights Organization, where she strives to create a developed community and inclusion of human rights",
        "Ruti has represented Ethiopia on the international stage, completing prestigious programs such as: International Visitor Leadership Program (IVLP) Fellowship by the U.S. Department of State, USA.",
        "As the advisory Team of KEAB Africa Community Development and Human Rights Organization, Ruti plays a pivotal role in steering the organization’s mission to promote human rights, social inclusion, and gender equality across Ethiopia."
      ]
    },
    {
      name:"Dansita Asefa Adela (LLB, MA)",
      position:"Advisory Team",
      image:"https://i.postimg.cc/zGyWYz6J/dansita-bio.jpg",
      team:"advisory",
      description:[
        "The Advisory Team of KEAB Africa Community Development and Human Rights Organization, Mr. Dansita who is a Gender Equality & Human Rights Advocate and Researcher and also a Social Impact Leader.",
        "Mrs. Dansita Asefa experience as a former Lecturer at Hawassa University, School of Law, and as a Human Rights Volunteer at the Hawassa University Legal Aid Center, reflects her dedication to education and capacity building in the legal and development field. Mrs. Dansita’s work in academia and her volunteer efforts have contributed to the development of future legal professionals and the provision of essential legal services to marginalized communities. Mrs. Dansita is a distinguished researcher and advocate with extensive experience in the fields of human rights, gender equality, and sustainable development.",
        "As the advisory Team of KEAB Africa Community Development and Human Rights Organization, Dansita plays a pivotal role in steering the organization’s mission to promote human rights, social inclusion, and gender equality across Ethiopia.",
        "The Educational Background of Mrs. Dansita is that she holds a Master of Arts in International Relations and Foreign Diplomacy from the College of Law and Governance at Hawassa University, where she also earned her Bachelor of Laws (LLB) degree. Her academic background provides a strong foundation for her work in advocating for legal reforms, human rights education, and social justice.",
        "In her professional career, Dansita has served as the Regional Director at the Ethiopian Women Lawyers Association (EWLA), where she led initiatives aimed at empowering women and advancing their legal rights. Her leadership in this role has been instrumental in driving gender-sensitive legal practices and supporting vulnerable women through legal aid and advocacy.",
        "Mrs. Dansita’s previous roles further highlight her commitment to social change and legal empowerment. As a Project Officer at the Resource Centre for Sustainable Change (RCSC), she coordinated projects focused on sustainable development and community empowerment. Additionally, she served as the Focal Person for Gender Mainstreaming at the Sidama Industrial Parks Development Corporation, where she worked to integrate gender perspectives into development projects and policies.",
        "Mrs. Dansita’s unwavering commitment to human rights, gender equality, and sustainable development continues to inspire her work at KEAB Africa Community Development and Human Rights Organization, where she strives to create a developed community and inclusion of human rights."
      ]
    },
    {
      name:"Essey Petros",
      team:"advisory",
      image:"https://i.postimg.cc/SRX2FV1g/essey-bio.jpg",
      position:"Advisory Team",
      description:[
        "Essey Petros is an LLB candidate at Hawassa University, dedicated to advancing human rights and social justice. As an Advisory Team of KEABI AFRICA Community Development and Human Rights Organization, he works to promote a just and inclusive society.",
        "He serves as President of the Hawassa University Student Union, leading initiatives that empower students, and as Vice President of the Ethiopian Higher Education Institutions Student Union, advocating for student rights nationally. Additionally, Essey founded the Tesfa Counseling Association to provide essential support to those in need, demonstrating his commitment to community impact. His leadership and dedication make him a vital asset to the organizations he represents."
      ]
    },
    {
      name: "Nebere Elias",
      image: "https://i.postimg.cc/k5BFJC7T/nebere-elias-bio.jpg",
      position: "Advisory Team",
      team: "advisory",
      description: [
        "Nebere Elias is a 30 year-old health professional with an MSc in Advanced Cardiovascular Nurse Practitioner . He is an active member of the Young African Leadership Initiative (YALI) RLC East Africa Alumni and serves as an Ambassador for the 6th edition of the International Youth Conference. Nebere works as a government/Public/NGO/private institutions -employed and held different leadership Positions at Healthcare Facilities started from providing care,  holds the position of  Clinical Governance and Quality Improvements Officer of the hospital, Currently CEO of Dr Solomon Memorial Primary Hospital,  and  also volunteer at community , American Corners .",
        "He is the co-founder of the Serve Human In need of Medical access and Board Secretary, where he leads establishment as well strategic guidance.",
        "Nebere is founding member US Exchange Alumni Association Ethiopian ,member of  Ethiopian Cardiac Professional Society, Regional Coordinator For Ethiopian Nurse Association (Sidama Region) Country Director For Association of Mental Health Reform Organisations in Africa AMHROA Network and the Global Youth Network",
        "Nebere is passionate about youth empowerment and plans to establish a local youth initiative in the near future, committed to community development, advocating for youth empowerment, human rights, inclusivity, and youth participation. As a goal-oriented and analytical individual, Nebere is always eager to contribute to improving communities and driving positive change.",
      ],
    },
    {
      name:"Dr. Dagim Dawit Gonsamo (PhD in Applied Social Science and Social Work)",
      position:"Advisory Team",
      image:"https://i.postimg.cc/FKZ9Yxjp/Dr-Dagim-image.png",
      team:"advisory",
      description:[
        "Dr. Dagim who is an Advisory Team of KEAB AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. Dr. Dagim lives and works in Hawassa City in Ethiopia offering academic and social services with his deep-rooted experience in both academic expertise and diverse international experience in social works. Dr. Dagim has received a Doctorate degree from Hong Kong Poly Technic University in Hong Kong and currently he is also a Post Doctoral Fellow in Hong Kong Poly Technic University in Hong Kong.",
        "In addition, Dr. Dagim has involved in variety of voluntary activities including in helping women, youth and children through charity programs in Sidama National Regional States in Ethiopia. His academic background provides a strong foundation for her work in advocating for social work, community development, women and Childs education, and social empowerments. Currently, he has worked as a head for Department of Sociology at Hawassa University.  As part of Advisory Team of KEAB Africa Community Development and Human Rights Organization, Dr. Dagim is committed to offering strategic advice on organizational wellness and global aspects. His unique expertise in both local and international organization, combined with his dedication to empowering clients, makes him an invaluable resource for those looking to optimize the organizational activities for KEAB Africa Community Development and Human Rights Organization.",
        "As an advisory team of KEAB Africa Community Development and Human Rights Organization, Dr. Dagim with unwavering commitment plays a pivotal role in steering the organization’s mission to promote community development, human rights, social inclusion, and gender equality across Ethiopia. "
      ]
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
      name:"Mulugeta Woldetsadik",
      image:"https://i.postimg.cc/4d0kM194/mulugeta-bio.jpg",
      position:"Advisory team",
      team:"advisory",
      description:[
        "Mulugeta Woldetsadik, a seasoned Librarian and Information Professional from Ethiopia, brings over three decades of experience in Library and Information Science, spanning educational institutions from schools to universities.",
        "Currently, he serves as the coordinator of partnership projects at Hawassa University, collaborating with organizations like Books For Africa (BFA) and Book Aid International (BAI) to enhance access to educational resources for underserved communities in Ethiopia's Sidama region. He also works with the International Law Book Facility (ILBF), contributing to the development of exemplary libraries in higher education institutions across Ethiopia.",
        "In addition, Mulugeta is a team member of Librarian Spotlight Africa (LSA), where he participates and contributes in his role as Coordinator for Partnership and Community Engagement.",
        "Honored as the Librarian of the Month for August 2024 by the African Librarian Spotlight Program, Mulugeta is a dedicated advocate for community-centered initiatives, Open Access, and Open Educational Resources (OER). Through international collaborations and his blog, 21st Century INFOLIBNET, he champions the role of libraries as essential hubs of knowledge and development in the digital age, driven by his commitment to bridging the gap between information accessibility and community needs."
      ]
    },
    {
      name:"Tizitaw Ebiso Daemo (BA, MA in Development Economics)",
      team:"advisory",
      position:"Advisory Board Member",
      image:"https://i.postimg.cc/KYnGWGTs/tizita-bio.jpg",
      description:[
        "The Consultant Mr. Tizitaw Ebiso Daemo is an experienced Financial Wellness Consultant at KeyBank in Denver, Colorado, offering clients strategic financial advice rooted in both academic expertise and diverse international experience.",
        "With a master’s degree in Developmental Economics, Tizitaw combines his solid financial background with a deep understanding of global trade, economic development, and financial systems. Tizitaw’s career includes significant experience as an International Trade Service Expert at the Hawassa Industrial Park in Ethiopia. In this role, he provided expert guidance to investors on import and export procedures, ensuring alignment with international trade standards, the International Chamber of Commerce, and regulations from Ethiopia’s National Bank and Commercial Bank. He also helped navigate the country’s customs rules, streamlining trade operations for companies engaged in cross-border commerce. Before joining KeyBank, Tizitaw served as a Senior Customer Relationship Manager at CBE Hawassa District, where he developed and nurtured client relationships, providing tailored financial solutions for businesses and individuals seeking growth and stability.",
        "As part of our advisory team of KEAB Africa Community Development and Human Rights Organization, Mr. Tizitaw is committed to offering clients informed and strategic advice on organizational wellness and global aspects. His unique expertise in both local and international organization, combined with his dedication to empowering clients, makes him an invaluable resource for those looking to optimize the organizational decisions."
      ]
    },
    {
      name:"Admasu Abebe (Development Expert)",
      team:"advisory",
      position:"Advisory Team",
      image:"https://i.postimg.cc/qMbMLwY5/ado-bio.jpg",
      description:[
        "Mr. Admasu lives and works in Las Vegas, Colorado, USA offering volunteer and client services with his deep-rooted experience in both academic expertise and diverse international experience.",
        "With a Bachelor of Science degree, Ethiopia and before going to USA, Mr. Admasu served as a Senior Development Agent Officer, Sidama Region Agricultural Office, Ethiopia where he developed and nurtured development activates, providing tailored agricultural development solutions for local government offices seeking rural growth and development. In addition, Mr. Admasu has involved in variety of voluntary activities including in helping women and children in Sidama National Regional States in Ethiopia.",
        "As part of the advisory team of KEAB Africa Community Development and Human Rights Organization, Mr. Admasu is committed to offering strategic advice on organizational wellness and global aspects. His unique expertise in both local and international organization, combined with his dedication to empowering clients, makes him an invaluable resource for those looking to optimize the organizational decisions for KEAB Africa Community Development and Human Rights Organization."
      ]
    },
    {
      name:"Yilma Nigusse Nune (BA)",
      image:"https://i.postimg.cc/1553w2WF/yilma-bio.jpg",
      position:"Advisory Team",
      team:"advisory",
      description:[
        "Mr. Yilma Nigusse lives and works in Denver, Colorado, USA offering clients services with his deep-rooted experience in both academic expertise and diverse international experience.",
        "With a Bachelor of Art degree from Jimma University, Ethiopia and before going to USA, Mr. Yilma served as a Senior Customer Relationship Office at CBE Hawassa District, Ethiopia where he developed and nurtured client relationships, providing tailored institutional solutions for businesses corporate responsibilities and individuals seeking growth and stability. In addition, Mr. Yilma has involved in variety of voluntary activities including in provision of free books for children in Sidama National Regional States in Ethiopia.",
        "As part of our advisory team of KEAB Africa Community Development and Human Rights Organization, Mr. Yilma is committed to offering clients informed and strategic advice on organizational wellness and global aspects. His unique expertise in both local and international organization, combined with his dedication to empowering clients, makes him an invaluable resource for those looking to optimize the organizational decisions."
      ]
    },
    {
      name: "Dr. Tsion Assefa Desalegn (PhD)",
      team: "board",
      position: "Board Chairperson",
      image: "https://i.postimg.cc/K8crsJDF/dr-tsion-bio.jpg",
      description: [
        "Dr. Tsion Assefa who is a Board Chairperson of KEAB AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. She has served as the OPD Case Team Coordinator at Abela Health Center for over three years. Additionally, she worked as a Nutrition Specialist and Public Health Emergency Management (PHEM) focal point at Wotera Hospital for four years. After completing my PhD, she joined Hawassa University as an Assistant Professor in the Department of Human Nutrition for six months, where she taught students and advised them on their research work.",
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
        "Mr. Yosef who is a Vice Board Chairperson of KEAB AFRICA Community Development and Human Rights Organization has extensive experience working in government organizations at various levels. He has served as the Chairperson of Ethiopian Council of Gospel Believers Churches of Sidama National Regional State’s Branch Office.",
        "Mr. Yosef experience at national level in Ethiopia as an Ethiopian Evangelical Church of Fellowship Chairperson and as an Ethiopian Evangelical Church of Rift Vally Mission Chairperson of Advisory Board and the Ethiopia Evangelical Robot Church Chairperson.",
        "The Educational Background of Mr. Yosef is that he holds a Master of Arts in Management, where he also earned his Advanced Diploma and Bachelor of Management degree from Hawassa University. He also participated in an international course related to Leadership and Theology.",
        "As the Vice Board Chairperson of KEAB Africa Community Development and Human Rights Organization, Mr. Yosef plays a pivotal role in steering the organization’s mission to promote community development, human rights, and sustainable development.",
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
        "Petros Gobaro is a distinguished legal professional and jurist with a profound commitment to justice, ethics, and human rights in Ethiopia. As the Board Member of KEAB AFRICA Community Development and Human Rights Organization promote community-oriented development, human rights and social inclusion is achieved.",
        "Petros Gobaro holds a bachelor’s degree in laws, where he graduated with Great Distinction, earning an Excellent grade for his thesis.'  His academic achievements reflect his deep expertise and dedication to the field of law.",
        "Currently, Petros Gobaro serves as the President of the Central Sidaama Zone High Court. In this prominent role, he leads the judiciary with integrity and a steadfast commitment to delivering justice. His leadership is characterized by a strong adherence to ethical principles and a relentless pursuit of fair legal outcomes.",
        "In addition to his judicial roles, Petros Gobaro has been a strong advocate for ethical governance. He previously worked as the senior judge in different courts in Sidama Region.",
        "As the Board Member of KEAB AFRICA Community Development and Human Rights Organization, Mr. Petros Gobara brings a wealth of experience, a passion for justice, and a commitment to ethical leadership. His guidance is vital to the organization’s efforts to advance human rights, foster social inclusion, and uphold the rule of law in Ethiopia.",
      ],
    },
    {
      name: "Addisu Petros Busha (BA, MBA)",
      image: "https://i.postimg.cc/HLq6KbL2/addisu-petros-bio.jpg",
      position: "Board Member",
      team: "board",
      description: [
        "The Educational Background of Mr. Addisu includes is that he holds a Master of Business Administration from Paradise Valley University, Ethiopia where he also earned her bachelor’s degree in management form Samara University, Afar, Ethiopia and Certificate of IT-Computer Diploma, Keylink Technologies Plc, Ethiopia. His academic background provides a strong foundation for his work in advocating for legal reforms, human rights education, and social justice.",
        "Mr. Addisu Petros Busha is a visionary young leader and has been working at Sidama National Regional State’s Hawassa City’s surround woreda in Ethiopia. He is known to me from the day he was hired in Sidama National Regional State Hawassa surrounding woreda. Besides, his works ethics, diligence and discipline are so worthy as he works hard to excel in his performance as per the norms of the organization",
        "He is an active participant in Sidama National Regional State Hawassa surrounding woreda’s various department and office responsibilities at various capacities in Ethiopia. Also, he has received good compliments from his fellow staff and community because he has shown his ability to coordinate and give leadership.",
        "As a Board Member of KEAB Africa Community Development and Human Rights Organization, he will be devoted to facilitating, mentoring, monitoring, leading, supervising, and motivating coworkers within multicultural settings.",
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
        "As the Board Member of KEAB AFRICA Community Development and Human Rights Organization, Mr. Petros Gobara brings a wealth of experience, a passion for health education and community development in Ethiopia",
      ],
    },
    {
      name:"Amanuel Yosef Sankura",
      team:"support",
      position:"Accountant and Finance Team Lead"
    },
    {
      name:"Betelehem Borisama Gareno",
      team:"support",
      position:"Auditor"
    },
    {
      name:"Habitamu Haile",
      team:"support",
      position:"Auditor"
    },
    {
      name:"Yeneneh Tamir",
      team:"support",
      position:"Driver"
    }
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

const projects = [
  {
    name:"Strengthening Democracy and Promotion of Good Governance Bootcamp for selected Young Leaders in Hawassa City Administration, Ethiopia",
    images:[
      "https://i.postimg.cc/FsvmTSs3/project2-img1.jpg",
      "https://i.postimg.cc/CMkSC7Yw/project2-img2.jpg",
      "https://i.postimg.cc/mDFR5NHN/project2-img4.jpg",
      "https://i.postimg.cc/kG3936Nr/project2-img5.jpg",
      "https://i.postimg.cc/CxFhxq3S/project2-img6.jpg",
      "https://i.postimg.cc/x1t0JdQH/project2-img7.jpg",
      "https://i.postimg.cc/5tyfwM9r/project2-img8.jpg"
    ],
    description:[
      "The goal of this project is to create a platform for young leaders to learn and engage with fundamental concepts of democracy and good governance. It aims to strengthen democracy and promote positive governance practices among selected young leaders in Hawassa City through targeted capacity-building training. By focusing on these young individuals, the project endeavors to prepare them to contribute meaningfully to accountable state institutions and processes, fostering a generation of responsible and informed leaders.",
      "Specifically, the project seeks to build young leaders’ skills in several critical areas, including interpersonal relationships, conflict management, solidarity, and tolerance. It emphasizes transparency, responsibility, accountability, participation, and responsiveness to community needs, equipping participants with the tools to address real-world challenges effectively. The training also highlights the importance of human rights and the rule of law, helping young leaders to envision a better future for themselves and their communities. Through fostering a positive self-concept, goal-setting, and vision development, the project motivates and inspires young leaders to aspire for meaningful change and overcome obstacles with resilience and optimism."
    ]
  },
  {
    name:"KEAB Community Library And Information Center in Sidama National Regional State, Ethiopia",
    images:[
      "https://i.postimg.cc/65vbSbqm/project1-img1.jpg",
      "https://i.postimg.cc/QNPnfZ87/project1-img2.jpg"
    ],
    description:[
      "KEAB Community Library Project is a project aimed to delivery library service of different type to the community members (Women, Men, Youth, Children and Students as well). The community library which has powerful tools and activity that can transform community members including the students to become more innovative, productive and joyful at school and at home or any developmental activities. The Center will be programmed to energize community members including students, create opportunity for community with different type of books, current global information and introduce students to ICT technology to fulfill their dreams with hope and passion.",
      "KEAB Community Library and Information Center as Reading and Practicing Periodical Centers encourages community members including students and show the power within them to be creative and successful. Creativity and innovative thinking are defining characteristics of successful entrepreneurs. Now more than ever, the Reading and Practicing Periodical Center become a driving force for successful community to find and achieve their vision and purpose.",
      "The pilot project was held in two locations within the Sidama Region of Ethiopia. The first site was Finchawa Primary School, located in Hawassa Tulla Sub City, while the second site was Kege Primary School in Dale Woreda."
    ]
  }
]

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
        projects,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
