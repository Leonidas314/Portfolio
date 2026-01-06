import '../style/Header.css'
export default function Header({ index, setIndex }) {
  const items = ["About", "Projects", "Formation"]

  return (
    <header className="header">
      <nav className="nav">
        <span
          className="nav-glow"
          style={{ transform: `translateX(${index * 100}%)` }}
        />

        {items.map((label, i) => (
          <button
            key={label}
            className={`nav-item ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}


