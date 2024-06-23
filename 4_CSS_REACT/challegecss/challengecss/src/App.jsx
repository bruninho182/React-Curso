import './App.css'
import Car from './components/Car';

function App() {

    const myCars = [
     { name: "Eclipse", km: "57800", color: "Preta" },
     { name: "Lancer EVO", km: "12000", color: "Vermelho" },
     { name: "Skyline", km: "24800", color: "Branco" },
    ];


    return (<div className="App">
       <h1>Showroom de carros</h1>
       <div className="car-container">
          {myCars.map((car) => (
            <Car car={car} />
          ))}
       </div>

      </div>
    
  )
}

export default App
