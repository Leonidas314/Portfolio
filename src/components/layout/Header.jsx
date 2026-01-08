import '../style/Header.css'
export default function Header({ index, setIndex }) {
  
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
        
      </nav>
    </header>
  )
}


