import ProjectCard from "./ProjectCard"
import '../style/Projects.css'
export default function Projects(){
    
    return(
        <div className="projects-main-container">
            <div className="project-card-container">
                <ProjectCard title="Galaxy Classifier" description="Convolutional Neural Network to galaxy classification by the Hubble Secuence Protocol. Project for final university course." image ="../assets/landingpagedummy.png" badgets={["python","flask","react","sqlite","docker"]}/>
                <ProjectCard title="Virtual Wallet" description="Basic virtual wallet with login and signin, QR pay method, real time dollar cotizations. Project for System Design university course." badgets={["python","flask","react","sqlite","docker"]}/>
                <ProjectCard title="Relational Data Base"  description="tal" badgets={["react"]}/>
                <ProjectCard title="Project01" description="tal" badgets={["react"]}/>

            </div>
        </div>
    )
}