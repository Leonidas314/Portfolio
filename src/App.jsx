
import './components/style/reset.css'
import './components/style/App.css'
import { useState, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Header from './components/layout/Header'
import Body from './components/layout/Body'
function App() {

  const [index, setIndex] = useState(0)
  const carouselRef = useRef(null)

  const { scrollXProgress } = useScroll({
    container: carouselRef
  })
    
  return (
    <div className='app'>
      <Header index={index} setIndex={setIndex} scrollProgress={scrollXProgress}/>
      <Body index={index} carouselRef={carouselRef}/>
    </div>
  );
}

export default App
