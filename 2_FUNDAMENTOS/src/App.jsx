import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


//components

import FirstComponents from './components/Firstcomponents';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import challenge from './components/challenge';




// styles //css
import './App.css'
import Challenge from './components/challenge';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
    <FirstComponents />
    <TemplateExpressions />
    <MyComponent />
    <Events />
    <Challenge />
 
    </div>
  )
    
  
}

export default App
