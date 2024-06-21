import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Letícia")

  return <div>
    <h1>Isso será exibido?</h1>
    {x && <p>Se x fro true, sim!</p>}
    {!x && <p>Agora x é falso</p>}
    <h1>If ternário</h1>
    {name === "Bruno" ? (
        <div>
            <p>O nome é Bruno</p>
        </div>
    ) : (
        <div>
            <p>Nome não encotrado!</p>
        </div>    
    )}
    <button onClick={() => setName("Bruno")}>Clica aqui!</button>
    </div>;
  
}

export default ConditionalRender