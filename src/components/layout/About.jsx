import ProfileImage from "./ProfileImage"
import '../style/About.css'
export default function About() {
    return(
        <div className="about-main-container">
            <div id="about-aux-container">            
                <div id="about-content-div">
                    <p>Hi! I'm León.</p><br />
                    <p> Advanced student on computer science,
                    currently on the last instances of my universitary grade.</p><br />
                    <p>My academic formation is solid based on data structures, algorithms, relational data bases and software desing patterns. </p><br />
                    <p>Besides of my academic formation i'm constantly learning about web development technologies like front-end frameworks and clouding services.</p><br/>
                    <p>I like to focus not only on learning the know how of the technologies, but why to take a particular technical choice.</p>
                </div>  
                <div id="about-img-container">  
                    <ProfileImage/> 
                </div>
            </div>
        </div>
    )
}