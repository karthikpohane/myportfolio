export const navItems = [
  { name: "Profile", link: "#home" },
  { name: "Experience & Education", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Recommendations", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const summary = `
I am a dedicated Software Engineer and Full-Stack Developer with a passion for transforming innovative ideas into high-performance, scalable applications. Proficient in both frontend and backend technologies, I excel at crafting intuitive user experiences and designing robust, reliable solutions. Based in Bangalore, India, I am driven by a commitment to technical excellence, creative problem-solving, and delivering impactful results.
`;

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize collaboration and open communication to ensure a thorough understanding of project requirements and deliver successful outcomes.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech enthusiast with a deep passion for development and creating innovative solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-0.5",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b5.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-0.5",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const educationItems = [
  {
    id: 1,
    title: "Master's in Computer Application",
    description: "Christ University - Bangalore, 2022 - 2024",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/christlogo.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science",
    description: "Bajaj College of Science - Wardha, 2019 - 2022",
    className: "lg:col-span-2 md:col-span-9 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/bajajlogo.jpg",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "Technical Skills and Learning",
  //   description: "Ongoing learning in JavaScript, React, Node.js, and more.",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "/tech_stack.svg",
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "Forify - Content Integrity Tracker",
    des: "Developed a web-based platform to track content integrity using Meltwater’s API, improving validation accuracy by 25%. Integrated SSO login with Google Cloud and JIRA for ticketing.",
    img: "/forify.jpg",
    iconLists: [
      // "/js.svg",
      "/mongodb.svg",
      "/express.svg",
      "/re.svg",
      "/node.svg",
      // "/graphql.svg",
      "/aws.svg",
      "/jira.svg",
      "/git.svg",
      "/dock.svg",
    ],
    link: "https://github.com/karthikpohane/Forify",
  },
  {
    id: 2,
    title: "ONEpurity - Pollution Detection System",
    des: "Designed a deep learning system to detect and localize pollutants in real time using TensorFlow and CNNs, achieving 90% accuracy in pollutant identification.",
    img: "/onepurity.jpg",
    iconLists: ["/python.svg","/pandas.svg", "/opencv.svg", "/tensorflow.svg", "/oneAPI.png"],
    link: "https://github.com/karthikpohane/ONEpurity",
  },
  {
    id: 3,
    title: "CastClimate - E-commerce for Farmers",
    des: "Built an e-commerce platform enabling farmers to sell products directly, reducing middleman costs by 15%. Integrated a crop suggestion system for region-specific recommendations.",
    img: "/castclimate.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg","/php.svg", "mysql.svg","/mgsql.svg"],
    link: "https://github.com/karthikpohane/CastClimate",
  },
  {
    id: 4,
    title: "Salt & Pepper - Music Streaming App",
    des: "Developed a music streaming app with features like audio recording, playlist creation, and song uploads using Java and Firebase.",
    img: "/saltpapper.jpg",
    iconLists: ["/java.svg", "/firebase.svg", "/android.svg"],
    link: "https://github.com/karthikpohane/SaltNPepper",
  },
];

export const testimonials = [
  {
    quote:
      "I worked closely with Karthik Pohane during his internship at Meltwater, where he excelled in Product Support engineering and custom solutions development. Karthik quickly grasped complex technologies, contributing significantly to projects. His expertise in the MERN stack, API configuration, crawling functionalities, and CI/CD pipelines using GitHub Actions was exceptional. He also showcased proficiency in AWS services like EC2, EBS, and Route 53. As a Product Support Engineer, Karthik resolved issues effectively while collaborating with Sales and clients. I highly recommend him for roles in custom solutions, MERN stack, AWS, and Product Support engineering.",
    name: "Pritesh Shetty",
    title: "Manager, Product Support Engineering  @ Meltwater",
    image:"/pritesh.jpg",
  },
  {
    quote:
      "Karthik is a avid learner and adapts to all kinda situations, in my privileged time to work with him i have learnt to so much about team building and efficiency over effectiveness. \nI recommend him as a guy you can hire and will adapt and evolve in the space to provide great results.",
    name: "Aditya Kumar Gope",
    title: "Software Engineer II @ Bryckel",
    image:"/aditya.jpg",
  },
  {
    quote:
      "Karthik Pohane has been an exceptional intern at Meltwater, consistently demonstrating problem-solving skills and professionalism. He excelled in debugging complex issues and led his project team with innovative solutions. Karthik’s contributions exceeded expectations, making him a valuable asset. I highly recommend him for future endeavors.",
    name: "Sylvia Navachudar",
    title: "Senior Product Support Engineer & Team Lead @ Meltwater",
    image:"/sylvia.jpg",
  },
  {
    quote:
      "Karthik is a quick learner with exceptional technical skills, including full-stack development using React, TypeScript, Redux, MongoDB, Flask, and Python. His front-end work is awe-inspiring, showcasing precision and user-focused design.\n" +
      "He is innovative, resourceful, and collaborates effectively with his teammates, fostering a positive work environment. Karthik consistently meets deadlines and provides creative solutions that enhance the development process.\n" +
      "I am confident that Karthik will excel in any endeavour, and I highly recommend him as a valuable asset to any team.",
    name: "Akash Warma",
    title: "Co-Founder @ Sellermate.ai",
    image:"/akash.jpg",
  },

  {
    quote:
      "I had the pleasure of working with Karthik Pohane for six months and can confidently attest to his remarkable skills. As an intern, Karthik consistently demonstrated a strong work ethic and excellent communication abilities. His adaptability and dedication stood out, especially during project work, where his expertise and passion significantly impacted the team.\n" +
      "One of Karthik's greatest strengths is his ability to be adaptive and hardworking. I've witnessed them during the project work. His dedication, expertise, and passion for work have made a significant impact on the team and during his internship. \n" +
      "I highly recommend Karthik to anyone seeking a talented, reliable, and collaborative professional.",
    name: "Livin Varghese",
    title: "Senior Product Support Engineer & Team Lead @ Meltwater",
    image:"/livin.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
{
    id: 1,
    title: "Software Engineering Intern",
    desc: "Developed dynamic web applications using React.js and TypeScript, reducing page load times by 20%. Optimized API response times by 15% through efficient GraphQL queries and mutations, improving frontend-backend communication.",
    className: "md:col-span-2",
    thumbnail: "/sellermatelogo.png",
},
{
    id: 2,
    title: "Product Support Engineer Intern",
    desc: "Resolved 50+ customer support tickets weekly with JIRA, reducing resolution time by 25%. Led a content tracking and crawling project using APIs deployed on AWS Beanstalk, improving content delivery speeds by 15%.",
    className: "md:col-span-2",
    thumbnail: "/meltwaterlogo.png",
},
{
    id: 3,
    title: "Tableau Trainer",
    desc: "Delivered comprehensive Tableau training workshops to 30+ data analysts, focusing on advanced techniques like interactive dashboards and data integration. Improved reporting timelines by 20% and increased team efficiency by 35%.",
    className: "md:col-span-2",
    thumbnail: "hendryharvinlogo.png",
},
{
    id: 4,
    title: "Freelance Developer (Various Projects)",
    desc: "Designed and developed software solutions including an e-commerce platform, pollution detection system, and music streaming app using modern web and mobile technologies to meet client needs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
},

];

export const socialMedia = [
  {
    id: 1,
    img: "/mail.svg",
    link: "/mailto:kartikpohane0612@gmail.com",
    name: "Email",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/karthikpohane",
    name: "Git",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/karthik-pohane-15580a220/",
    name: "LinkedIn",
  },
  {
    id: 5,
    img: "/whatsapp.svg",
    link: "https://wa.me/7558790280",
    name: "Whatsapp",
  },
];

export const technologyLogos = [
  // Programming Languages
  {
    id: 1,
    name: "C",
    logo: "/clag.svg", // Add logo path for C/C++ if available
  },
  {
    id: 1,
    name: "C++",
    logo: "/cpp.svg", // Add logo path for C/C++ if available
  },
  {
    id: 2,
    name: "Java",
    logo: "/java.svg",
  },
  {
    id: 3,
    name: "Python",
    logo: "/python.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    logo: "/js.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    logo: "/ts.svg", // Add logo path for TypeScript if available
  },

  // Frontend
  {
    id: 6,
    name: "React.js",
    logo: "/re.svg",
  },
  {
    id: 7,
    name: "HTML",
    logo: "/html.svg",
  },
  {
    id: 8,
    name: "CSS",
    logo: "/css.svg",
  },
  {
    id: 9,
    name: "Bootstrap",
    logo: "/bootstrap.svg", // Add logo path for Bootstrap if available
  },
  {
    id: 10,
    name: "Next.js",
    logo: "/next.svg", // Add logo path for Next.js if available
  },
  {
    id: 11,
    name: "MUI",
    logo: "/mui.svg", // Add logo path for MUI if available
  },
  {
    id: 12,
    name: "Formik",
    logo: "/formick.png", // Add logo path for Formik if available
  },
  {
    id: 13,
    name: "Redux",
    logo: "/redux.svg", // Add logo path for Redux if available
  },

  // Backend
  {
    id: 14,
    name: "Node.js",
    logo: "/node.svg",
  },
  {
    id: 15,
    name: "Express.js",
    logo: "/express.svg",
  },
  {
    id: 16,
    name: "RESTful APIs",
    logo: "/restAPI.jpg", // Add logo path for REST APIs if available
  },
  {
    id: 17,
    name: "GraphQL",
    logo: "/graphql.svg", // Add logo path for GraphQL if available
  },

  // Databases
  {
    id: 18,
    name: "MongoDB",
    logo: "/mongodb.svg",
  },
  {
    id: 19,
    name: "MySQL",
    logo: "/mysql.svg",
  },
  {
    id: 20,
    name: "Firebase",
    logo: "/firebase.svg",
  },

  // Cloud Platforms
  {
    id: 21,
    name: "AWS",
    logo: "/aws.svg",
  },
  {
    id: 22,
    name: "Google Cloud Platform",
    logo: "/google_cloud.svg", // Add logo path for GCP if available
  },

  // DevOps Tools
  {
    id: 23,
    name: "Docker",
    logo: "/dock.svg",
  },
  {
    id: 24,
    name: "Git",
    logo: "/git.svg",
  },
  {
    id: 25,
    name: "JIRA",
    logo: "/jira.svg",
  },
  {
    id: 26,
    name: "Postman",
    logo: "/postman.svg", // Add logo path for Postman if available
  },

  // Development Tools
  {
    id: 27,
    name: "VS Code",
    logo: "/vscode.svg", // Add logo path for VS Code if available
  },
  {
    id: 28,
    name: "IntelliJ",
    logo: "/intellij.svg", // Add logo path for IntelliJ if available
  },
  {
    id: 29,
    name: "Eclipse",
    logo: "/eclipse.svg", // Add logo path for Eclipse if available
  },
  {
    id: 30,
    name: "Colab",
    logo: "/colab.png", // Add logo path for Colab if available
  },
  {
    id: 31,
    name: "Jupyter",
    logo: "/jupyter.svg", // Add logo path for Jupyter if available
  },
  {
    id: 32,
    name: "Android Studio",
    logo: "/androidstudios.png", // Add logo path for Android Studio if available
  },

  // Operating Systems
  {
    id: 33,
    name: "Windows",
    logo: "/windows.png", // Add logo path for Windows if available
  },
  {
    id: 34,
    name: "Linux",
    logo: "/linux.svg", // Add logo path for Linux if available
  },
  
  // Additional technologies
  {
    id: 35,
    name: "OneAPI",
    logo: "/oneAPI.png",
  },
  {
    id: 36,
    name: "PHP",
    logo: "/php.svg",
  },
  {
    id: 37,
    name: "MSSQL",
    logo: "/mgsql.svg",
  },
  {
    id: 38,
    name: "Android",
    logo: "/android.svg",
  },
];


