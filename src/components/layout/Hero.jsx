import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import "../style/Hero.css"
export default function Hero() {
    return (
        <div className="hero-main-container">
            <div id="hero-aux-container">
                <motion.div
                    id="hero-content-div"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <p>Hi! I'm León.</p><br />
                    <p>Advanced student on computer science,
                    currently on the last instances of my universitary grade.</p><br />
                    <p>My academic formation is solid based on data structures, algorithms, relational data bases and software design patterns.</p><br />
                    <p>Besides of my academic formation I'm constantly learning about web development technologies like front-end frameworks and cloud services.</p><br />
                    <p>I like to focus not only on learning the know-how of the technologies, but why to take a particular technical choice.</p>
                </motion.div>

                <motion.div
                    id="hero-img-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -12, 0]
                    }}
                    transition={{
                        opacity: { duration: 0.7, delay: 0.2 },
                        scale: { duration: 0.7, delay: 0.2 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                    }}
                >
                    <ProfileImage />
                </motion.div>
            </div>
        </div>
    );
}