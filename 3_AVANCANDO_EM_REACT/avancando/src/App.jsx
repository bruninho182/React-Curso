import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Img02 from './assets/img02.jpg'

function App() {

  return (
      <div className='App'> 
        <h1>Avançando em React</h1>
        {/* Imagem em Public */}
        <div>
            <img src="/img01.jpg" alt="Caverna" />
        </div>
        {/* Imagem em assets */}
        <div>
            <img src={Img02} alt="Animal" />
        </div>
      </div>

  )
}

export default App
