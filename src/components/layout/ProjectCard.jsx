import landingpageimg from '../../assets/landingpagedummy.png'
import '../style/ProjectCard.css'
export default function ProjectCard({title,description}){
    return(
        <article className="project-card">
            <h3 className="title">{title}</h3>
            <div className='project-card-body'>
                <p className="project-description">{description} </p>
            </div>
        </article>
    )
}