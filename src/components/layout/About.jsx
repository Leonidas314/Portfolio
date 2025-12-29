import ProfileImage from "./ProfileImage"
import '../style/About.css'
export default function About() {
    return(
        <div className="about-main-container">
            <h1>About Me</h1>
            <div className="about-img-container">
                <ProfileImage/> 

                <h2>León Dellafiore</h2>
                <ul>
                    <p>Computer Science</p>
                    <p>Software Development</p>
                </ul>
            </div>          
            <div className="description">
                <p>Hi! I'm León.</p><br />
                <p> Advanced student on computer science,
                currently on the last instaces of my universitary grade.</p><br />
                <p>I invite to you to take a look of my portfolio. Greetings! </p>
            </div>
        </div>
    )
}