
import './components/style/reset.css'
import './components/style/App.css'
import { useState } from 'react'

import Header from './components/layout/Header'
import Body from './components/layout/Body'
function App() {
  const [index, setIndex] = useState(0)

  console.log("App render, index =", index)

  return (
    <div className='app'>
      <Header setIndex={setIndex}/>
      <Body index={index}/>
    </div>
  );
}

export default App
