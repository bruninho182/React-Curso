
import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';


function App() {
  const n = 15;
  const [name] = useState("Bruno"); 

  const redTitle = false

  return (
  <div className='App'>
    {/* CSS global */}
    <h1>React com CSS</h1>
    {/* CSS de componente */}
    <MyComponent/>
    <p>Este parágrafo é do App.jsx</p>
    {/* INLINE CSS*/}
    <p style={{color: "greenyellow" , padding: "25px", borderTop: "2px solid red"}}>
      Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmco */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color:"pink"})}>CSS dinâmico</h2>
      <h2 
      style={
        name === "Bruno"
         ? { color:"green", backgroundColor: "#000"} 
         : null 
         }
         >Teste Nome
         </h2>
         {/* Classe Dinâmica */}
         <h2 className={redTitle ? "red-title" : "title"}>
          Este texto vai ter uma classe dinâmica
          </h2>
          {/* CSS Modules */}
          <Title />
  </div>
  )
}

export default App