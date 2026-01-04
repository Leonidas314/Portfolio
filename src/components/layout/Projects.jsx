import ProjectCard from "./ProjectCard"
import '../style/Projects.css'
export default function Projects(){
    return(
        <div className="projects-main-container">
            <h2>Projects</h2>
            <div className="project-card-container">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </div>
        </div>
    )
}