import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Img02 from './assets/img02.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import ChangeMessageState from './components/ChangeMessageState'
import Message from './components/Message'
import UserDetails from './components/UserDetails'

function App() {
  
  const name = "Letícia"
  const [userName] = useState("Bruno")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 1, brand: "Mitsubishi", color: "Preto", newCar: false, km: 33598 },
    {id: 1, brand: "Toyota", color: "Azul", newCar: false, km: 68550 },
  ];

  function showMessage () {

    console.log("Evento do componente pai!")

  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };  

  const users = [
    { id: 1, name: "Bruno", job:"Programador", age: 28 },
    { id: 2, name: "Letícia", job:"Advogada", age: 28 },
    { id: 3, name: "Patrick", job:"Desenvolvedor", age: 17 },
  ];

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
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand= "VW" km={10000} color="Azul" newCar={false} />
        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="vermelha" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
        {/* loop em array de objetos*/}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
          />
        ))}
        {/* fragment */}
        <Fragments propFragments="teste" />
        {/* children */}
        <Container myValue="testing">
          <p>Este é o conteúdo</p>
        </Container>
        <Container myValue="testing 2">
          <h5>Este é o conteúdo</h5>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage}/>
        {/* Desafio */}
        {users.map((user) => (
          <UserDetails 
          key={user.id} 
          name={user.name} 
          job={user.job} 
          age={user.age}
          />
        ))}
      </div>

  );
}

export default App
