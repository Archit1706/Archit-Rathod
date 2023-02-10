// project images
import Edusys from '/public/assets/projects/edusys.png'
import Powerup from '/public/assets/projects/powerup.png'
import FirstPaper from '/public/assets/projects/firstpaper.jpg'
import Moviescape from '/public/assets/projects/moviescape.jpg'
import Emoji from '/public/assets/projects/emoji.jpg'
import Proctor from '/public/assets/projects/proctor.png'
import Quotes from '/public/assets/projects/quotes.jpg'
import Weather from '/public/assets/projects/weather.jpg'
import Healthy from '/public/assets/projects/healthy.jpg'

// skills images
import Cpp from "/public/assets/skills/cpp.png";
import Html from "/public/assets/skills/html.png";
import Css from "/public/assets/skills/css.png";
import Js from "/public/assets/skills/js.png";
import Python from "/public/assets/skills/python.png";
import Postman from "/public/assets/skills/postman.png";
import Git from "/public/assets/skills/git.png";
import Github from "/public/assets/skills/github.png";
import Tailwind from "/public/assets/skills/tailwind.png";
import Jquery from "/public/assets/skills/jquery.png";
import Mongo from "/public/assets/skills/mongo.png";
import Sql from "/public/assets/skills/sql.png";
import Node from "/public/assets/skills/node.png";
import ReactImg from "/public/assets/skills/react.png";
import Netlify from "/public/assets/skills/netlify.png";

const firstname = "Archit";
const lastname = "Rathod";
// const tags = ["Full-Stack", "Web Developer"]
const tagline = "I have 1 year of experience in working in Web Domain. Currently I am building projects using MERN Stack."

const about = ["I am a Third Year Information Technology Student at Thadomal Shahani Engineering College, Bandra. I am a Full Stack Developer and a DSA Problem Solving Enthusiast. I am a self-taught programmer and I am always looking for new opportunities to learn and grow.", "I have one year of experience in Web Development majorly in MERN Stack. I am currently working on my skills in the field of Data Science and Machine Learning. I also participate in many hackathons.", "In my leisure time I like reading stuff revolving around finance and investments. I also like watching tennis and Scifi movies."];

const projects = [
    {
        title: "Power Up",
        img: Powerup,
        alt: "Power Up",
        url: "/power-up",
        desc: "Power Up is a health monitoring and diet tracking app that is compatible with a vast range of smart watches and wearable devices that run Wear OS. Data is easily collected with Google Fitness Intergation for a seamless user experience. Users can keep a track of their weight, steps, calories and also set goals, dietary preference and/or health condition. Based on the details, users can chat with differnt AI based chatbots.",
        tech: ["React JS", "Tailwind", "Node JS", "Express", "MongoDB", "APIs"],
        link: "https://powerup.sidd065.repl.co/",
        github: "https://github.com/Archit1706/PowerUp",
    },
    {
        title: "Edu Sys",
        img: Edusys,
        alt: "Edu Sys",
        url: "/edusys",
        desc: "A web application that maps COs, POs and PSOs of a course to the corresponding course outcomes. It automates the entire flow of Outcome Based Education(OBE) System of a college. And reduces the manual work of the faculty.",
        tech: ["React JS", "Tailwind", "Node JS", "Express", "MongoDB"],
        link: "https://edusys-tsec.netlify.app/",
        github: "https://github.com/Archit1706/EduSys-Frontend",
    },
    {
        title: "First Paper",
        img: FirstPaper,
        alt: "First Paper",
        url: "/first-paper",
        desc: "First Paper is a place where students, professors, researchers, learners or anyone who aims to write a research paper and is unsure about the domain, subject or topic to choose or wants to gather existing research work and can get suggestions based on their search queries run through our ML model.",
        tech: ["Next JS", "Tailwind", "MongoDB", "Python", "ArXiv Dataset"],
        link: "https://first-paper.vercel.app/",
        github: "https://github.com/Archit1706/First-Paper",
    },
    {
        title: "Moviescape",
        img: Moviescape,
        alt: "Moviescape",
        url: "/mmoviescape",
        desc: "A web application that displays the latest movies and tv shows. It also displays the details of the movie or tv show when clicked on. Details include IMDB Rating, Release Date, Genres, Overview, etc.",
        tech: ["React JS", "Tailwind", "TMDB API"],
        link: "https://moviescape.netlify.app/",
        github: "https://github.com/Archit1706/Movie-App",
    },
    {
        title: "Emoji Nation",
        img: Emoji,
        alt: "Emoji Nation",
        url: "/emoji-nation",
        desc: "A place for Emoji meanings. It is an emoji search engine. It fetches all the emojis till date from the emoji api and displays them in a grid. It also displays the meaning of the emoji when hovered over.",
        tech: ["React JS", "CSS", "API"],
        link: "https://emoji-nation.netlify.app/",
        github: "https://github.com/Archit1706/Emoji-Nation",
    },
    {
        title: "Healthy Me!",
        img: Healthy,
        alt: "Healthy Me!",
        url: "/healthy-me",
        desc: "A web application that keeps track of your daily calorie intake by taking inputs about your food and water intake during breakfast, lunch and dinner. It also displays the total calories consumed and the total water intake.",
        tech: ["React JS", "Tailwind CSS", "Node JS", "Mongo DB", "Food API"],
        link: "",
        github: "https://github.com/Archit1706/Codeissance_22_Keyboard-Interrupt",
    },
    {
        title: "Proctor It!",
        img: Proctor,
        alt: "Proctor It!",
        url: "/proctor-it",
        desc: "An Application that detects face before start of the exam and keeps track of eye movement during the exam.",
        tech: ["Python", "OpenCV", "Tkinter"],
        link: "/",
        github: "https://github.com/Archit1706/PROCTOR_IT-A-Virtual-Invigilator",
    },
    {
        title: "Weather Today",
        img: Weather,
        alt: "Weather Today",
        url: "/weather-today",
        desc: "A web application that displays the weather of a particular city name provided by the user. It uses the OpenWeather API to fetch the weather data. ",
        tech: ["HTML", "CSS", "Node JS", "API"],
        link: "https://weather-today.architrathod1.repl.co/",
        github: "https://github.com/Archit1706/Weather-Today",
    },
    {
        title: "Random Quote Generator",
        img: Quotes,
        alt: "Random Quote Generator",
        url: "/random-quote-generator",
        desc: "A simple web application that generates random quotes. It fetches quotes from the API and displays them in a card. The New Quote Button generates a new quote with a random colour scheme. The Tweet Quote Button tweets the quote.",
        tech: ["HTML", "CSS", "JS", "API"],
        link: "https://archit1706.github.io/Random-Quote-Generator/",
        github: "https://github.com/Archit1706/Random-Quote-Generator",
    },
];

// Skills - languages, databases, tools

const languages = [
    {
        name: "C++",
        img: Cpp,
        alt: "C++ Logo",
        color: "blue-900",
    },
    {
        name: "Python",
        img: Python,
        alt: "Python Logo",
        color: "cyan-300",
    },
    {
        name: "HTML",
        img: Html,
        alt: "HTML Logo",
        color: "orange-400",
    },
    {
        name: "CSS",
        img: Css,
        alt: "CSS Logo",
        color: "blue-400",
    },
    {
        name: "JavaScript",
        img: Js,
        alt: "JavaScript Logo",
        color: "yellow-300",
    },
];

const tools = [
    {
        name: "React JS",
        img: ReactImg,
        alt: "React Logo",
        color: "cyan-600",
    },
    {
        name: "Node JS",
        img: Node,
        alt: "Node Logo",
        color: "lime-400",
    },
    {
        name: "Postman",
        img: Postman,
        alt: "Postman Logo",
        color: "amber-400",
    },
    {
        name: "jQuery",
        img: Jquery,
        alt: "jQuery Logo",
        color: "sky-400",
    },
    {
        name: "Tailwind CSS",
        img: Tailwind,
        alt: "Tailwind Logo",
        color: "emerald-400",
    },
    {
        name: "Git",
        img: Git,
        alt: "Git Logo",
        color: "amber-600",
    },
    {
        name: "Github",
        img: Github,
        alt: "Github Logo",
        color: "pink-400",
    },
    {
        name: "Netlify",
        img: Netlify,
        alt: "Netlify Logo",
        color: "purple-400",
    },
];

const databases = [
    {
        name: "MongoDB",
        img: Mongo,
        alt: "MongoDB Logo",
        color: "emerald-600",
    },
    {
        name: "SQL",
        img: Sql,
        alt: "SQL Logo",
        color: "blue-900",
    },
];

const SocialLinks = {
    linkedIn: "https://www.linkedin.com/in/archit-rathod/",
    twitter: "https://twitter.com/ArchitRathod_17",
    github: "https://github.com/Archit1706",
    mail: "architrathod77@gmail.com",
    leetcode: "https://leetcode.com/Archit176/",
    medium: "https://medium.com/@architrathod77",
}

export { firstname, lastname, tagline, about, projects, languages, databases, tools, SocialLinks };