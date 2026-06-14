import { motion } from "framer-motion";
import "../style/Navbar.css"
export default function Navbar() {
    return (
        <motion.header
            id="navbar"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div id="navbar-aux-container">
                <a href="#hero" id="navbar-logo">León</a>
                <nav id="navbar-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </motion.header>
    );
}