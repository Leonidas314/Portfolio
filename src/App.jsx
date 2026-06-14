import "./components/style/App.css"
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Skills from "./components/layout/Skills";
function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;