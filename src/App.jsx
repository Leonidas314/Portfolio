import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/style/reset.css'
import './components/style/App.css'

import Header from './components/layout/Header'
import Body from './components/layout/Body'
function App() {

  return (
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  );
}

export default App
