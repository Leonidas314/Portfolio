import '../style/Body.css'
import About from './About';
import Projects from './Projects';
export default function Body(){
    return(
        <div className="Body">
            
            <About/>
            <Projects/>
        </div>
    );
}