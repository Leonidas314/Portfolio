import landingpageimg from '../../assets/landingpagedummy.png'
import '../style/ProjectCard.css'
export default function ProjectCard(){
    return(
        <div className="project-card">
            <h3 className="title">Project Machine Learning</h3>
            <img src={landingpageimg} className="project-card-img"/>
            <p className="project-description"> Some text here</p>
        </div>
    )
}