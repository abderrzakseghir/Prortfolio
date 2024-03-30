/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abderrazak's Portfolio",
  description:
    "Hey👋, I'm SEGHIR Abderrazak. A passionate Mobile and Web Developer based in France 📍.",
  og: {
    title: "Abderrazak seghir's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Abderrazak seghir",
  logo_name: "Abderrazak Seghir",
  nickname: "Dako",
  subTitle:
    "Hey👋, I'm SEGHIR Abderrazak. A passionate Mobile and Web Developer based in France 📍.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/abderrzakseghir/Prortfolio",
  githubProfile: "https://github.com/abderrzakseghir/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/abderrzakseghir/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/seghir-abderrazak-248520229/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:abderrazakseghir1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*{
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },*/
  {
    name: "Facebook",
    link: "https://www.facebook.com/seghirabderrazak33/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abderrazak_se212/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Currently in the learning phase, I am passionate about developing scalable AI models for various applications.",
        "⚡ Currently exploring natural language processing projects as part of my AI learning journey.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Django & Symfony",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I am currently enrolled in an AWS Certified Solutions Architect Associate course, aiming to enhance my skills in cloud computing.",
        "⚡ I have a keen interest in cloud technologies, aspiring to broaden my knowledge as a full-stack developer and apply my background expertise.",
        "⚡ I have developed multiple web and mobile projects utilizing Firebase as well as SQL and PostgreSQL databases.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ I am familiar with Adobe services.",
        "⚡ I primarily use Figma in most of my projects.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "AWS",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#F79F1B",
      },
      profileLink:
        "https://aws.amazon.com/fr/certification/certified-solutions-architect-associate/?ch=tile&tile=getstarted",
    },
    /*{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Digital Sciences, Management & Cognition",
      subtitle:
        "Bachelor's Degree in Mathematics and Computer Science with a specialization in MIAGE",
      logo_path: "lorraine.png",
      alt_name: "Loraine University",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://idmc.univ-lorraine.fr/",
    },
    {
      title: "Higher School of Computer Science 08-MAI-1945 Sidi Bel Abbes",
      subtitle: "State Engineer Diploma",
      logo_path: "esilogo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.esi-sba.dz/fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Mobile and Web Developer, Designer and Software Architect. I love organizing events, which is why I am actively involved in numerous scientific clubs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Versatile team member",
          company: "McDonald's",
          company_url:
            "https://www.mcdonalds-recrute.fr/nos-metiers/equipier-equipiere",
          logo_path: "mc do.png",
          duration: "Feb 2024 - Present",
          location: "Nancy, France",
          description:
            "I am adept at adapting to various situations and thrive in dynamic environments. Actively participating in the restaurant's daily operations, my primary mission is to ensure customer satisfaction. My responsibilities vary depending on the time of day, but I can always rely on my teammates to support me in learning and successfully completing tasks.",
          color: "#9b1578",
        },
        {
          title: "Inventorist",
          company: "RGIS.",
          company_url: "http://www.rgis-job.fr/",
          logo_path: "rgis.png",
          duration: "Feb 2024 - Present",
          location: "Nancy, France ",
          description:
            "My role as an inventory clerk involves conducting inventories in various store settings. This entails counting and scanning items using barcode technology in establishments such as supermarkets. I document any missing items and identify products.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full stack developer",
          company: "Solutions Développement Informatique",
          company_url: "https://soludevi.fr/",
          logo_path: "solulogo.png",
          duration: "April 2024 - Jun 2024",
          location: "La Rochelle, France",
          description:
            "During my internship, I engaged in a diverse range of tasks that broadened my skillset and deepened my understanding of various aspects of web development. This included receiving training in SEO content optimization and actively contributing to the creation of SEO-optimized content. Additionally, I participated in both front-end and back-end development of a web application, utilizing technologies such as UI/HTML/CSS/PHP/JAVASCRIPT. Moreover, I conducted research on integrating web applications into mobile platforms and successfully integrated the website https://lebondebarrasseur.fr into an Android mobile application. Furthermore, I gained insights into the responsibilities of an independent developer, including managing invoices, quotes, and specifications, while also familiarizing myself with ongoing developments using tools such as Visual Studio Code and other environments.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Finance member",
          company: "Google Developer Group",
          company_url: "https://www.gdg-sba.club/",
          logo_path: "google_logo.png",
          duration: "Sep 2022 - Present",
          location: "SBA, Algeria",
          description:
            "Active member since November 2022, I have been a vital contributor to event organization and negotiations as part of the Finance Department..",
          color: "#4285F4",
        },
        {
          title: "Content creation member",
          company: "Alphabit",
          company_url: "https://www.alphabit.club/",
          logo_path: "alpha.png",
          duration: "Sep 2021 - Present",
          location: "SBA, Algeria",
          description:
            "Our club organized a plethora of events to inform students about the latest technological advancements and give them opportunities to learn and grow from soft to hard skills. We believe in creating a vibrant community that fosters teamwork, communication, and personal development . At Alphabit, We are not just a club, we are a family ! we strive to raise the bar higher  for everyone. .",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web, Android, IOS, Cloud, Databases, Conception and Opensource Development.",
  },
  blogSection: {
    title: "Abderrazak SEGHIR",
    subtitle: "",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "28 rue Aristide Birand Laxou 54520, France",
    locality: "Kanodar",
    country: "France",
    region: "Grand Est",
    postalCode: "54520",
    streetAddress: "28 rue Aristide Birand",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/R%C3%A9sidence+U'+M%C3%A9dreville/@48.683878,6.1562494,17z/data=!3m1!4b1!4m6!3m5!1s0x4794a284eb389df9:0x593ab3d96d250175!8m2!3d48.6838745!4d6.1588243!16s%2Fg%2F11dd_mgnlp?entry=ttu",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+33 7 66  72 99 78",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
