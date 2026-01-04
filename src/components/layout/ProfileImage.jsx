import '../style/imgContainer.css'
import '../style/ProfileImg.css'
import selfie from "../../assets/selfie.jpg"
export default function ProfileImage(){
    return(
        <div className="imgContainer">
            <img className="profile-image" src={selfie} />
        </div>
    )
}