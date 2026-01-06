import '../style/Header.css'
export default function Header({setIndex}){
    return(
    <div className="header">
            <button onClick={() => { setIndex(0)}}>ABOUT ME</button>
            <button onClick={() => { setIndex(1)}}>MY PROJECTS</button>
            <button onClick={() => { setIndex(2)}}>SKILLS & KNWOLEDGES</button>
        
    </div>
    );
}
