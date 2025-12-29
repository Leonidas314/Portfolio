import ProfileImage from "./ProfileImage"
import '../style/About.css'
export default function About() {
    return(
        <div className="about-main-container">
            
            <div className="about-img-container">
                <ProfileImage/> 

                <h2>León Dellafiore</h2>
                <ul>
                    <p>Computer Science</p>
                    <p>Software Development</p>
                </ul>
            </div>          
        </div>
    )
}