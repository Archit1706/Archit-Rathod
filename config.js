// project images
import RealEstate360 from "./public/assets/projects/realestate360.jpg";
import AscendAI from "./public/assets/projects/ascendai.jpg";
import FitSphere from "./public/assets/projects/fitsphere.jpg";
import PhishFence from "./public/assets/projects/phishfence.jpg";
import SwarBhaav from "./public/assets/projects/swarbhaav.jpg";
import Edusys from "./public/assets/projects/edusys.png";
import AttireAI from "./public/assets/projects/attireai.jpg";
import BidBazaar from "./public/assets/projects/bidbazaar.jpg";
import PowerUp from "./public/assets/projects/powerup.jpg";
import CouponVault from "./public/assets/projects/couponvault.jpg";
import Reflections from "./public/assets/projects/reflections.png";
import FirstPaper from "./public/assets/projects/firstpaper.jpg";
import TheOneFinder from "./public/assets/projects/theonefinder.jpg";
import HomeGinie from "./public/assets/projects/homeginie.jpg";
import SocialVision from "./public/assets/projects/socialvision.jpg";
import Moviescape from "./public/assets/projects/moviescape.jpg";
import Emoji from "./public/assets/projects/emoji.jpg";
import Proctor from "./public/assets/projects/proctor.jpg";
import Quotes from "./public/assets/projects/quotes.jpg";
import Weather from "./public/assets/projects/weather.jpg";
import Healthy from "./public/assets/projects/healthy.jpg";

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
import Flask from "/public/assets/skills/flask.png";
import Jquery from "/public/assets/skills/jquery.png";
import Mongo from "/public/assets/skills/mongo.png";
import Sql from "/public/assets/skills/sql.png";
import Node from "/public/assets/skills/node.png";
import BigQuery from "/public/assets/skills/bigquery.png";
import Neo4j from "/public/assets/skills/neo4j.png";
import ReactImg from "/public/assets/skills/react.png";
import NextImg from "/public/assets/skills/nextjs.png";
import Ts from "/public/assets/skills/typescript.png";
import Vercel from "/public/assets/skills/vercel.png";
import Netlify from "/public/assets/skills/netlify.png";
import Aws from "/public/assets/skills/aws.png";
import Gcp from "/public/assets/skills/gcp.png";
import Vscode from "/public/assets/skills/vscode.png";
import Powerbi from "/public/assets/skills/powerbi.png";
import FastApi from "/public/assets/skills/fastapi.png";
import Numpy from "/public/assets/skills/numpy.png";
import Pandas from "/public/assets/skills/pandas.png";
import OpenCV from "/public/assets/skills/opencv.png";
import Plotly from "/public/assets/skills/plotly.png";
import Sklearn from "/public/assets/skills/sklearn.png";
import Matplotlib from "/public/assets/skills/matplotlib.png";

const firstname = "Archit";
const lastname = "Rathod";
const tags = ["Frontend", "Backend", "Python"];
const tagline =
    "I have a year of experience in creating websites. Currently I am building Web using Next.js and exploring Machine Learning and AI.";
const about = [
    "I am a Final Year Information Technology Student at Thadomal Shahani Engineering College, Bandra. I am a Full Stack Developer and Problem Solving Enthusiast. I am a self-taught programmer and I am always looking for new opportunities to learn and grow.",
    "I have one year of experience in Web Development majorly in MERN Stack. I am currently working on my skills in the field of Data Science, Machine Learning and AI. I also participate in many hackathons.",
    "In my leisure time I like reading stuff revolving around finance and investments. I also like watching tennis and Scifi movies.",
];

const projects = [
    {
        title: "RealEstate 360",
        img: RealEstate360,
        alt: "RealEstate-360",
        url: "/real-estate-360",
        desc: "RealEstate360, the future of online house-hunting, is a platform that leverages Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to provide an immersive, interactive, and informative experience for both real estate agents and homebuyers. The platform allows users to explore houses virtually, getting a feel for the layout and atmosphere, and uses AI and ML to provide insights and suggestions. Real estate agents can showcase houses in a more realistic and immersive way, making customers happier and increasing sales.",
        tech: [
            "Next JS",
            "Tailwind",
            "FastAPI",
            "Node.js",
            "AR-VR",
            "Socket I/O",
            "ManziPango",
            "Panellum React",
            "MongoDB",
            "Three.js",
        ],
        link: "https://realestate360.vercel.app/",
        github: "https://github.com/Archit1706/RealEstate360",
    },
    {
        title: "Ascend AI",
        img: AscendAI,
        alt: "Ascend AI",
        url: "/ascend-ai",
        desc: "Ascend AI is a revolutionary interview preparation platform designed to elevate your communication skills and confidence. With its cutting-edge features, Ascend AI offers comprehensive AI analysis, real-time tone and pitch feedback, facial expression recognition, and precise video mock interview reviews. It's your personal interview coach, ensuring you present your best self in every interview.",
        tech: [
            "Next JS",
            "Tailwind",
            "LLama C++",
            "FastAPI",
            "Librosa",
            "Transformers",
            "OpenCV",
            "MongoDB",
            "Whisper",
        ],
        link: "https://ascend-ai-mpr.vercel.app/",
        github: "https://github.com/Archit1706/AscendAI",
    },
    {
        title: "FitSphere",
        img: FitSphere,
        alt: "FitSphere",
        url: "/fitsphere",
        desc: "FitSphere is a state-of-the-art pose estimation system that leverages Computer Vision and Machine Learning to enhance the field of sports and fitness. The system offers automated exercise recognition, accurate rep and set counting, progress tracking, exercise recommendations, and a warning system to improve the fitness journey for users.",
        tech: [
            "React JS",
            "Tailwind",
            "OpenCV",
            "FastAPI",
            "MongoDB",
            "PoseNet",
            "OpenPose",
        ],
        link: "https://fitsphere.vercel.app/",
        github: "https://github.com/Archit1706/FitSphere",
    },
    {
        title: "PhishFence",
        img: PhishFence,
        alt: "PhishFence",
        url: "/phisfence",
        desc: "PhishFence is an innovative AI and ML-powered solution designed to automatically detect and block phishing domains among newly registered websites. By integrating WHOIS data, real-time URL fetching, image comparison, and typosquatting checks, it swiftly identifies threats, enhancing user security. With a user-friendly interface and a chatbot for assistance, PhishFence offers comprehensive protection against phishing attacks and assists users in making informed decisions.",
        tech: [
            "Next JS",
            "Tailwind",
            "Selenium",
            "FastAPI",
            "WhoisDB",
            "LighGBM",
            "OpenCV",
            "OpenAI",
        ],
        link: "https://phishfence.vercel.app/",
        github: "https://github.com/Archit1706/PhishFence",
    },
    {
        title: "SwarBhaav",
        img: SwarBhaav,
        alt: "SwarBhaav",
        url: "/swarbhaav",
        desc: "SwarBhaav: A call centre solution featuring dual dashboards for rookies and managers, offering distinct access controls and insightful features: chat analysis for chat summaries, sentiment scores, and key words; audio sentiment analysis with seven emotion classification using librosa, and a robust reporting system with MongoDB integration for easy review of sentiment analysis results.",
        tech: [
            "Next JS",
            "Tailwind",
            "Node JS",
            "FastAPI",
            "Librosa",
            "Transformers",
            "OpenAI",
        ],
        link: "https://swarbhaav.vercel.app/",
        github: "https://github.com/Archit1706/SwarBhaav",
    },
    {
        title: "Attire AI",
        img: AttireAI,
        alt: "Attire AI",
        url: "/attire-ai",
        desc: "AttireAI: Your ultimate fashion companion powered by Gen AI. Discover and create personalized fashion outfits with ease through natural, conversational interactions. Revolutionizing the way you explore fashion, AttireAI analyzes your style preferences, past purchases, and social media trends to curate tailor-made outfit recommendations. Elevate your shopping experience on Flipkart with cohesive and trendy outfit ideas that reflect your unique fashion taste.",
        tech: ["Next JS", "Tailwind", "Flask", "LangChain", "LLama", "NLTK"],
        link: "https://attire-ai.vercel.app",
        github: "https://github.com/Archit1706/Attire-AI",
    },
    {
        title: "Bid Bazaar",
        img: BidBazaar,
        alt: "Bid Bazaar",
        url: "/bid-bazaar",
        desc: "Bid-Bazaar is an online auction platform that enables users to create and bid on auctions for a wide range of products and services like cars, bikes, laptops, mobiles, real estates and government contracts. The platform also has a chat feature where users can chat with each other. We also have live Bidding feature where users can bid on the product in real time. For Government Contracts we use the reverse auction method where the lowest bidder wins the contract.",
        tech: [
            "Next JS",
            "Tailwind",
            "Node JS",
            "Express",
            "MongoDB",
            "Socket.io",
            "Cloudinary",
        ],
        link: "https://bid-bazaar.vercel.app/",
        github: "https://github.com/Archit1706/TIAA-Hackathon",
    },
    {
        title: "Coupon Vault",
        img: CouponVault,
        alt: "Coupon Vault",
        url: "/coupon-vault",
        desc: "A headless promotion engine that empowers merchants to generate both dynamic and static coupon codes while customizing all the attributes of the coupon code generation process. Our promotion engine is flexible, scalable, and easily integrated into any web/ app platform. Merchants can set specific rules and conditions for generating dynamic coupon codes and create bulk static coupon codes with the ability to set limits on usage, expiration dates, and customer eligibility.",
        tech: ["Next JS", "Tailwind", "Node JS", "Express", "MongoDB"],
        link: "https://coupon-vault.vercel.app/",
        github: "https://github.com/Archit1706/Coupon-Vault",
    },
    {
        title: "Reflections Blogs",
        img: Reflections,
        alt: "Reflections Blogs",
        url: "/reflections",
        desc: "Reflections, a blogging platform designed to empower individuals to share their unique stories and experiences. Whether you're a seasoned writer or just starting out, Reflections provides the tools you need to craft engaging, thought-provoking content and share it with the world.",
        tech: [
            "Next JS",
            "Tailwind",
            "ML Models",
            "Python",
            "MongoDB",
            "Open AI",
        ],
        link: "https://reflections-blog.vercel.app/",
        github: "https://github.com/Archit1706/Reflections-Blogs",
    },
    {
        title: "Power Up",
        img: PowerUp,
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
        title: "Social Vision",
        img: SocialVision,
        alt: "Social Vision",
        url: "/social-vision",
        desc: "Social Vision is a system that connects people who have posted similar articles in the past within a certain time limit and refers to this as 'coordinated inauthentic behavior' The system also attempts to detect the agenda of these networks using keyword extraction, the propaganda behind them with multi-class classification, and identifies fake news using sentiment analysis. A recommendation system and a word cloud of the most important keywords in the articles were also implemented.",
        tech: [
            "Next JS",
            "Tailwind",
            "MongoDB",
            "Python",
            "ML Models",
            "Fast API",
        ],
        link: "https://social-vision.vercel.app/",
        github: "https://github.com/Archit1706/SocialVision",
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
        title: "The One Finder",
        img: TheOneFinder,
        alt: "The One Finder",
        url: "/the-one-finder",
        desc: "The One Finder uses AI-ML technology to help users find their perfect match. Users can calculate their profile score based on the completion of their profile information, and a sentiment analysis feature helps them understand how their bio might be perceived by others. For added convenience and privacy, we have included an end-to-end encrypted chat feature, and a drag-and-drop left and right swipe feature for easy profile matching.To upgrade to the pro model, users can use the integrated Stripe payment system. Overall, our dating website offers a comprehensive solution for finding compatible matches and connecting with other users in a secure and efficient manner.",
        tech: [
            "Next JS",
            "Tailwind",
            "MongoDB",
            "Firebase",
            "Python",
            "Fast API",
        ],
        link: "https://the-one-finder.vercel.app/",
        github: "https://github.com/Archit1706/The-One-Finder",
    },
    {
        title: "Home Ginie",
        img: HomeGinie,
        alt: "Home Ginie",
        url: "/home-ginie",
        desc: "Home Ginie is a website designed to predict the price of houses in the United States based on various factors including average income, house age, number of rooms and bedrooms, and population. Our advanced algorithm uses these factors to predict the estimated price of a house. Additionally, our website features a gallery of different house images that are displayed when the user hovers over them.",
        tech: [
            "Next JS",
            "Tailwind",
            "Python",
            "ML Model (Linear Reression)",
            "Fast API",
        ],
        link: "https://home-ginie.vercel.app/",
        github: "https://github.com/Archit1706/Home-Ginie",
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
        link: "",
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
    {
        name: "TypeScript",
        img: Ts,
        alt: "Typescript Logo",
        color: "blue-500",
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
        name: "Next JS",
        img: NextImg,
        alt: "Next Logo",
        color: "gray-800",
    },
    {
        name: "Fast API",
        img: FastApi,
        alt: "Fast API Logo",
        color: "lime-400",
    },
    {
        name: "Flask",
        img: Flask,
        alt: "Fast API Logo",
        color: "sky-400",
    },
    {
        name: "NumPy",
        img: Numpy,
        alt: "NumPy Logo",
        color: "blue-500",
    },
    {
        name: "Pandas",
        img: Pandas,
        alt: "Pandas Logo",
        color: "blue-400",
    },
    {
        name: "OpenCV",
        img: OpenCV,
        alt: "OpenCV Logo",
        color: "gray-800",
    },
    {
        name: "Plotly",
        img: Plotly,
        alt: "Plotly Logo",
        color: "blue-600",
    },
    {
        name: "Scikit Learn",
        img: Sklearn,
        alt: "Scikit Learn Logo",
        color: "orange-400",
    },
    {
        name: "Matplotlib",
        img: Matplotlib,
        alt: "Matplotlib Logo",
        color: "blue-600",
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
        color: "orange-600",
    },
    {
        name: "Github",
        img: Github,
        alt: "Github Logo",
        color: "stone-400",
    },
    {
        name: "Vercel",
        img: Vercel,
        alt: "Vercel Logo",
        color: "zinc-800",
    },
    {
        name: "Netlify",
        img: Netlify,
        alt: "Netlify Logo",
        color: "teal-400",
    },
    {
        name: "AWS",
        img: Aws,
        alt: "AWS Logo",
        color: "orange-400",
    },
    {
        name: "GCP",
        img: Gcp,
        alt: "GCP Logo",
        color: "blue-600",
    },
    {
        name: "Power BI",
        img: Powerbi,
        alt: "Power BI Logo",
        color: "amber-400",
    },
    {
        name: "VS Code",
        img: Vscode,
        alt: "VS Code Logo",
        color: "blue-800",
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
    {
        name: "BigQuery",
        img: BigQuery,
        alt: "BigQuery Logo",
        color: "sky-500",
    },
    {
        name: "Neo4j",
        img: Neo4j,
        alt: "Neo4j Logo",
        color: "blue-200",
    },
];

const SocialLinks = {
    linkedIn: "https://www.linkedin.com/in/archit-rathod/",
    twitter: "https://twitter.com/ArchitRathod_17",
    github: "https://github.com/Archit1706",
    mail: "architrathod77@gmail.com",
    leetcode: "https://leetcode.com/Archit176/",
    medium: "/blogs",
    resume: "/resume",
};

const researchs = [
    {
        status: "accepted",
        img: "/assets/research/disasters/bg.png",
        alt: "Cover Image for Leveraging CNNs and Ensemble Learning for Automated Disaster Image Classification",
        url: "/Leveraging-CNNs-and-Ensemble-Learning-for-Automated-Disaster-Image-Classification",
        title: "Leveraging CNNs and Ensemble Learning for Automated Disaster Image Classification",
        authors: [
            "Archit Rathod",
            "Veer Pariawala",
            "Mokshit Surana",
            "Kumkum Saxena",
        ],
        affiliations: [
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
        ],
        links: {
            arxiv: "https://arxiv.org/abs/2311.13531",
            openreview: "",
            slides: "",
            video: "",
            poster: "",
            blog: "",
            code: "",
            pdf: "https://arxiv.org/ftp/arxiv/papers/2311/2311.13531.pdf",
        },
        desc: "",
        technology: ["", "", ""],
        abstract:
            "Natural disasters act as a serious threat globally, requiring effective and efficient disaster management and recovery. This paper focuses on classifying natural disaster images using Convolutional Neural Networks (CNNs). Multiple CNN architectures were built and trained on a dataset containing images of earthquakes, floods, wildfires, and volcanoes. A stacked CNN ensemble approach proved to be the most effective, achieving 95% accuracy and an F1 score going up to 0.96 for individual classes. Tuning hyperparameters of individual models for optimization was critical to maximize the models' performance. The stacking of CNNs with XGBoost acting as the meta-model utilizes the strengths of the CNN and ResNet models to improve the overall accuracy of the classification. Results obtained from the models illustrated the potency of CNN-based models for automated disaster image classification. This lays the foundation for expanding these techniques to build robust systems for disaster response, damage assessment, and recovery management.",
        conclusion:
            "By performing this research work we have demonstrated a novel approach for classifying disaster images using Convolutional Neural Networks (CNNs). The results generated by our CNN-based models including Resnet and stacked CNN ensembles, have achieved an accuracy of over 95% in classifying key disasters namely earthquakes, floods, volcanoes and wildfires. As per our analysis, the stacked CNN ensemble model was built using the basic CNN and a Resnet Architecture as base models and finally Ensembling using XGBoost Classifier has emerged as the top performer. We can state that combining and leveraging the strengths of individual base models to create a new hypermodel helps in producing better results. Other than that optimal model tuning and selecting the best hyperparameters like learning rate, number of epochs and batch size were also important to maximize accuracy. Our research is well-established on the concepts of deep learning and CNNs for disaster image classification. The techniques we propose can be further utilized in the development of automated systems for disaster response, damage assessment as well and recovery management. Additionally a scope of disaster classification can be road segmentation. This involves providing survivors with a precise road or exit path after a catastrophe has occurred, thereby improving post-disaster recovery efforts. Despite the usage of large disaster imagery dataset, there are certain limitations. The dataset may not represent the full diversity of disasters in real life. Additional tuning might further improve the model performance. Future research should concentrate on increasing the size and diversity of the dataset, combining disaster image segmentation with classification, and deploying these models in real-world disaster management systems. Model robustness and generalization testing will also be essential. More robust disaster management systems can be developed to mitigate risks and improve preparedness globally by addressing these limitations and building on current CNN advances. This study lays the groundwork for progress towards that goal.",
        workshop: "ICSISCET 2023",
        conference: "",
        dates: {
            presentation: "October 21-22, 2023",
            // publication: "October 21-22, 2023",
        },
        // date: "October 21-22, 2023",
        series: "Springer Book Series",
        publisher: "",
        volume: "",
        pages: "",
        year: "",
        doi: "",
        isbn: "",
        booktitle: "ALGORITHMS AND INTELLIGENT SYSTEMS",
        editor: "",
        organization: "Soft Computing Research Society (SCRS)",
        address: "",
        school: "",
        images: [],
        dataset: "MIT's Incidents 1M Dataset",
        sampleDataSetImages: [],
    },
    {
        status: "accepted",
        img: "/assets/research/multiagent/bg.png",
        alt: "Cover Image for Multiagent Simulators for Social Networks",
        url: "/Multiagent-Simulators-for-Social-Networks",
        title: "Multiagent Simulators for Social Networks",
        authors: [
            "Aditya Surve",
            "Archit Rathod",
            "Mokshit Surana",
            "Gautam Malpani",
            "Aneesh Shamraj",
            "Sainath Reddy Sankepally",
            "Raghav Jain",
            "Swapneel Mehta",
        ],
        affiliations: [
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
        ],
        links: {
            arxiv: "https://arxiv.org/abs/2311.14712",
            openreview: "https://openreview.net/forum?id=eL61LbI4uv",
            slides: "",
            video: "",
            poster: "",
            blog: "",
            code: "",
            pdf: "https://arxiv.org/pdf/2311.14712.pdf",
        },
        desc: "",
        technology: ["", "", ""],
        abstract:
            "Multiagent social network simulations are an avenue that can bridge the communication gap between the public and private platforms in order to develop solutions to a complex array of issues relating to online safety. While there are significant challenges relating to the scale of multiagent simulations, efficient learning from observational and interventional data to accurately model micro and macro-level emergent effects, there are equally promising opportunities not least with the advent of large language models that provide an expressive approximation of user behavior. In this position paper, we review prior art relating to social network simulation, highlighting challenges and opportunities for future work exploring multiagent security using agent-based models of social networks.",
        conclusion:
            "Multiagent simulators are expressive models of online interaction and have demonstrably yielded value in varied applications. While there are limitations from scale and complexity, there is significant value that is likely to be unlocked by advances in computational modeling and machine learning for this area.",
        workshop: "Multi-agent Security (MASec), 23",
        conference: "NeurIPS 2023",
        dates: {
            presentation: "December 16, 2023",
            // publication: "October 21-22, 2023",
        },
        // date: "October 21-22, 2023",
        series: "",
        publisher: "",
        volume: "",
        pages: "",
        year: "",
        doi: "",
        isbn: "",
        booktitle: "",
        editor: "",
        organization: "",
        address: "",
        school: "",
        images: [],
        dataset: "",
        sampleDataSetImages: [],
    },
    {
        status: "working",
        img: "/assets/research/sakhi/bg.png",
        alt: "Cover Image for Deploying Large Language Model-based Chatbots for Indic Languages in Low-Resource Regions",
        url: "/Deploying-Large-Language-Model-based-Chatbots-for-Indic-Languages-in-Low-Resource-Regions",
        title: "Deploying Large Language Model-based Chatbots for Indic Languages in Low-Resource Regions",
        authors: [
            "Mrunmayi Parker",
            "Nahush Patil",
            "Raghav Jain",
            "Aditya Surve",
            "Pratyay Banerjee",
            "Mokshit Surana",
            "Jhagrut Lalwani",
            "Archit Rathod",
            "Swapneel Mehta",
        ],
        affiliations: [
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
            "SimPPL",
        ],
        links: {
            arxiv: "",
            openreview: "",
            slides: "",
            video: "",
            poster: "",
            blog: "",
            code: "",
            pdf: "",
        },
        desc: "",
        technology: ["", "", ""],
        abstract:
            "There are many public health challenges in the so-called global south that are tackled through literacy-focused interventions by nonprofits and public health agencies. However, it is extremely challenging to scale such interventions to large populations in countries that speak multiple languages, and have complex sociocultural norms. We leverage large language models (LLMs) to demonstrate a scaling of successful literacy interventions to improve menstrual health and hygiene among adolescent females in Bangladesh. Our system is deployed as a WhatsApp chatbot that generates responses grounded in accurate, verified knowledge from international health agencies and domain-specific knowledge from local health organizations. We discuss the considerations for the development and deployment of consumer-facing LLM chatbots to be accessible in low-resource communities without a large English-speaking population.",
        conclusion: "",
        conference: "",
        dates: {
            working: "November 2023",
            presentation: "",
            // publication: "October 21-22, 2023",
        },
        // date: "October 21-22, 2023",
        series: "",
        publisher: "",
        volume: "",
        pages: "",
        year: "",
        doi: "",
        isbn: "",
        booktitle: "",
        editor: "",
        organization: "",
        address: "",
        school: "",
        images: [],
        dataset: "",
        sampleDataSetImages: [],
    },
    {
        status: "working",
        img: "/assets/research/textToVideo/bg.jpg",
        alt: "Cover Image for Cross Lingual Text-to-Video Synthesis of Press Information Releases",
        url: "/Cross-Lingual-Text-to-Video-Synthesis-of-Press-Information-Releases",
        title: "Cross Lingual Text-to-Video Synthesis of Press Information Releases",
        authors: [
            "Mokshit Surana",
            "Veer Pariawala",
            "Archit Rathod",
            "Jeevika Tiwari",
            "Sanober Shaikh",
        ],
        affiliations: [
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
            "Thadomal Shahani Engineering College",
        ],
        links: {
            arxiv: "",
            openreview: "",
            slides: "",
            video: "",
            poster: "",
            blog: "",
            code: "",
            pdf: "",
        },
        desc: "",
        technology: ["", "", ""],
        abstract: "",
        conclusion: "",
        conference: "",
        dates: {
            working: "November 2023",
            presentation: "",
            // publication: "October 21-22, 2023",
        },
        // date: "October 21-22, 2023",
        series: "",
        publisher: "",
        volume: "",
        pages: "",
        year: "",
        doi: "",
        isbn: "",
        booktitle: "",
        editor: "",
        organization: "",
        address: "",
        school: "",
        images: [],
        dataset: "",
        sampleDataSetImages: [],
    },
    {
        status: "working",
        img: "/assets/research/ai-interview/bg.jpg",
        alt: "Building Confidence Through Technology: A Technical Exploration of Facial Expression, Tone and Pitch Analysis with Chatbot Guidance",
        url: "/Building-Confidence-Through-Technology:-A-Technical-Exploration-of-Facial-Expression,-Tone-and-Pitch-Analysis-with-Chatbot-Guidance",
        title: "Building Confidence Through Technology: A Technical Exploration of Facial Expression, Tone and Pitch Analysis with Chatbot Guidance",
        authors: [
            "Siddh Shah",
            "Archit Rathod",
            "Mokshit Surana",
            "Gargi Sathe",
            "Kumkum Saxena",
        ],
        affiliations: [
            "Thadomal Shahani Engineering College",
            "University of Illinois at Chicago",
            "University of Illinois at Chicago",
            "University of Illinois at Chicago",
            "Thadomal Shahani Engineering College",
        ],
        links: {
            arxiv: "",
            openreview: "",
            slides: "",
            video: "",
            poster: "",
            blog: "",
            code: "",
            pdf: "",
        },
        desc: "",
        technology: ["", "", ""],
        abstract: "",
        conclusion: "",
        conference: "",
        dates: {
            working: "March 2024",
            presentation: "",
            // publication: "October 21-22, 2023",
        },
        // date: "October 21-22, 2023",
        series: "",
        publisher: "",
        volume: "",
        pages: "",
        year: "",
        doi: "",
        isbn: "",
        booktitle: "",
        editor: "",
        organization: "",
        address: "",
        school: "",
        images: [],
        dataset: "",
        sampleDataSetImages: [],
    },
];

export {
    firstname,
    lastname,
    tags,
    tagline,
    about,
    projects,
    languages,
    databases,
    tools,
    SocialLinks,
    researchs,
};
