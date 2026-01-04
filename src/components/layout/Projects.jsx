import ProjectCard from "./ProjectCard"
import '../style/Projects.css'
export default function Projects(){
    return(
        <div className="projects-main-container">
            <h2>Projects</h2>
            <div className="project-card-container">
                <ProjectCard title="Galaxy Classifier" description="Convolutional Neural Network to galaxy classification by the Hubble Secuence Protocol. Project for final university course."/>
                <ProjectCard title="Virtual Wallet" description="Basic virtual wallet with login and signin, QR pay method, real time dollar cotizations. Project for System Design university course."/>
                <ProjectCard title="Relational Data Base"  description="tal"/>
                <ProjectCard title="Project01" description="tal"/>

            </div>
        </div>
    )
}