
import './components/style/reset.css'
import './components/style/App.css'
import { useState, useRef } from 'react'
import { useScroll } from 'framer-motion'
import Header from './components/layout/Header'
import Body from './components/layout/Body'
import Underglow from './components/layout/Underglow'
function App() {

  const [index, setIndex] = useState(0)
  const carouselRef = useRef(null)

  const { scrollXProgress } = useScroll({
    container: carouselRef
  })
    
  return (
    <div className='app'>
      <Header setIndex={setIndex} scrollProgress={scrollXProgress}/>
      <Underglow scrollProgress={scrollXProgress}/>
      <Body index={index} carouselRef={carouselRef}/>
    </div>
  );
}

export default App
