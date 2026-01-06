import '../style/Body.css'
import Carousel from './Carousel';
export default function Body({index}){
    return(
        <div className="body-container">
            <Carousel index={index}/>
        </div>
    );
}