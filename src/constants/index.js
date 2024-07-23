import { CEC, DICE } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "DICE, Chitkara",
        icon: DICE,
        iconBg: "#fbc3bc",
        date: "Jun 2023 - Dec 2023",
        points: [
            "Led a team in developing a web portal using React.js, Three.js, Node.js, and Express.js.",
            "Automated tasks, increasing efficiency by 200%. Reduced manual work and enable faster data processing",
            "Collaborated with stakeholders to define project scope, requirements, and deliverables.",
            "Conducted code reviews and provided technical guidance to team members.",
        ],
    },
    {
        title: "Vice President",
        company_name: "Chitkara Esports Club",
        icon: CEC,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Oversaw operations and strategic planning for a 70+ member esports club.",
            "Organized events with over 400 participants, fostering community engagement.",
            "Established partnerships and managed relations with companies such as SKOAR, Jio Games, and Games Live Studios",
            "Managed social media handles and promotions all across the university campus.",
        ],
    },
    {
        title: "Content Team Member",
        company_name: "Chitkara Esports Club",
        icon: CEC,
        iconBg: "#a2d2ff",
        date: "Nov 2021 - Dec 2022",
        points: [
            "Contributed to the content strategy and creation for esports club.",
            "Developed and posted engaging content across various social media platforms, increasing community interaction.",
            "Generated and implemented innovative content ideas, enhancing the club's online presence.",
            "Created and maintained official documents and correspondence, ensuring efficient communication and record-keeping.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sagar-333',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sagar-khanna-abc03/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-commerce Website',
        description: 'Developed a Full Stack E-commerce webiste with features like Cart, Payement gateway, Order Management',
        link: 'https://github.com/Sagar-333/Ecom_proj',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Video Calling App',
        description: 'Developed a video calling app using WebRTC for real-time video streaming and Socket.io for bidirectional communication. Utilized React.js for a responsive front-end interface and Node.js for the back-end server',
        link: 'https://github.com/Sagar-333/Gmeet-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Financial Calucaltor',
        description: 'Developed a retirement calculator using the MERN stack. Calculates the corpus needed for post-retirement life.Implemented a user-friendly interface for input and results display.',
        link: 'https://github.com/Sagar-333/Financial_Calculator',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'AI-image Generating App',
    //     description: 'Explored the field of artificial intelligence, developing custom tools capable of generating diverse outputs including memes, artwork, and UI/UX designs.',
    //     link: '',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: '',
    // },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Sagar-333/Article_sumz',
    }
];
// export default [projects,skills,experiences,socialLinks]