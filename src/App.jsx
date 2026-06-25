import "./components/style/App.css"
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects"
function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;