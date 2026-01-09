import '../style/Header.css'
import Underglow from './Underglow'
export default function Header({ index, setIndex , scrollProgress}) {
  
  const items = ["About", "Projects", "Formation"]
  
  return (
    <header className="header">
      <nav className="nav">
      
        {items.map((label, i) => (
          <button
            key={label}
            className={`nav-item ${index === i ? "active" : ""}`}
            onClick={(e) => setIndex(i)}
          >
            {label}
          </button>
        ))}
        <Underglow scrollProgress={scrollProgress} />
        
      </nav>

    </header>
  )
}


