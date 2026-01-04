import '../style/Body.css'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
export default function Body(){
    return(
        <div className="Body">
            
            <About/>
            <Projects/>
            <Skills/>
        </div>
    );
}