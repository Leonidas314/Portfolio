import { motion } from "framer-motion";
import "../style/Skills.css"
const skillsData = [
    {
        category: "Languages",
        items: ["JavaScript", "Python", "Java", "SQL"]
    },
    {
        category: "Frontend",
        items: ["React", "HTML5", "CSS3"]
    },
    {
        category: "Backend & Tools",
        items: ["Node.js", "Git", "Docker"]
    },
    {
        category: "Cloud & Databases",
        items: ["AWS", "PostgreSQL", "MongoDB"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="skills-main-container">
            <div id="skills-aux-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Skills
                </motion.h2>

                <div id="skills-categories">
                    {skillsData.map((group, i) => (
                        <motion.div
                            key={group.category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <h3>{group.category}</h3>
                            <div className="skill-chips">
                                {group.items.map((skill) => (
                                    <span className="skill-chip" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}