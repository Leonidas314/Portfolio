import '../style/Header.css'
import ProfileImage from './ProfileImage'
export default function Header(){
    return(
    <div className="Header">
        <div className='header-text'>
            <h1>
                 León Dellafiore
            </h1>
            <h2>
                Analista en Computación
            </h2>
        </div> 
        <ProfileImage/>
    </div>
    );
}
