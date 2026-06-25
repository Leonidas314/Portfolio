import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion";
import '../style/Projects.css'

const projectsData = [
    {
        title: "Galaxy Classifier",
        description: "Convolutional Neural Network for galaxy classification by the Hubble Sequence Protocol. Final university course project.",
        image: "../assets/landingpagedummy.png",
        badgets: ["python", "flask", "react", "sqlite", "docker"]
    },
    {
        title: "Virtual Wallet",
        description: "Basic virtual wallet with login/signin, QR pay method and real time dollar cotizations. System Design university course project.",
        badgets: ["react", "sqlite", "docker"]
    },
    {
        title: "Relational Data Base",
        description: "tal",
        badgets: ["java", "postgresql"]
    },
    {
        title: "Project01",
        description: "tal",
        badgets: ["react"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="projects-main-container">
            <div id="projects-aux-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <div id="project-card-container">
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}