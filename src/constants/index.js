import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  django,
  nodejs,
  git,
  figma,
  task,
  vis,
  tripguide,
  threejs,
  flatirons,
  aws,
  microsoft,
  udemy,
  ibm,
  python,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company_name: "Flatirons Solutions",
    icon: flatirons,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Airflow Automation: Developed and managed ETL workflows using Apache Airflow for seamless data pipeline automation.",
      "Data Integration: Implemented solutions to integrate data from diverse sources into structured formats for analysis.",
      "Visualization: Created interactive dashboards and data visualizations to support decision-making processes.",

    ],
  },
  {
    title: "Automation Testing Engineer",
    company_name: "Flatirons Solutions",
    icon: flatirons,
    iconBg: "#E6DEDD",
    date: "May 2024 - Jun 2024",
    points: [
      "Test Automation Frameworks: Designed and implemented robust automation testing frameworks to streamline testing processes.",
      "Script Development: Authored and maintained automated test scripts for web applications and APIs, ensuring high coverage.",
      "Defect Identification: Detected, documented, and tracked bugs, ensuring timely resolution and improved product quality.",
      "Continuous Integration: Integrated automated tests into CI/CD pipelines for faster and reliable software releases.",
    ],
  },
];

const certifications = [
  {
    title: "Introduction to Information Technology and AWS Cloud",
    issuer: "AWS",
    logo: aws,
    driveLink: "https://drive.google.com/file/d/1U5f0asD2ZYygooRKuPnBtlbaJKKmcKYK/view?usp=drive_link", // Replace with actual link
  },
  
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "AWS",
    logo: aws,
    driveLink: "https://drive.google.com/file/d/1U5f0asD2ZYygooRKuPnBtlbaJKKmcKYK/view?usp=drive_link", // Replace with actual link
  },
  
  {
    title: "Create Serverless Applications",
    issuer: "Microsoft",
    logo: microsoft,
    driveLink: "https://drive.google.com/file/d/1THAUeqrhaS0znO6OnUIkWdMrZcqv9-ya/view?usp=drive_link", // Replace with actual link
  },
  {
    title: "Explore Core Data Concepts in Microsoft Azure",
    issuer: "Microsoft",
    logo: microsoft,
    driveLink: "https://drive.google.com/file/d/1cg0GjCNAuLcUyqwIVIXU95HfP1FKehS7/view?usp=drive_link", // Replace with actual link
  },
  {
    title: "Introduction to Microsoft Azure Cloud Services",
    issuer: "Microsoft",
    logo: microsoft,
    driveLink: "https://drive.google.com/file/d/1Hi5e8dMpUrKZTc4fu8fkQXI-ct3RxddN/view?usp=drive_link", // Replace with actual link
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    logo: udemy,
    driveLink: "https://drive.google.com/file/d/1umwTbzRwC1vCkpEpkAQoQ-0gX0bysi0b/view?usp=drive_link", // Replace with actual link
  },
  {
    title: "Microsoft Excel- Excel from Beginner to Advanced",
    issuer: "Udemy",
    logo: udemy,
    driveLink: "https://drive.google.com/file/d/1fx6jOTMg7y88wHSpALrilVfXVTFI8A8K/view?usp=drive_link", // Replace with actual link
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    logo: ibm,
    driveLink: "https://drive.google.com/file/d/1LNsTfV02mJHNAwUAyunCK6tyf1SR2eJJ/view?usp=drive_link", // Replace with actual link
  },
];

const projects = [
  {
    name: "E-Learning App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/harinivelraj/e-learning-platform.git",
  },
  {
    name: "Streamlined Data Visualization with Airflow and Django",
    description:
      "Leveraging Airflow for seamless data pipelines and Django for dynamic data visualization.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
      {
        name: "Postresql",
        color: "orange-text-gradient",
      },
    ],
    image: vis,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certifications, projects };
