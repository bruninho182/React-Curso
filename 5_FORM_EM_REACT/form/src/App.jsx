import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
      <div className='App'>
        <h2>Forms</h2>
        <MyForm 
        user={{
          name: "Bruno", email: "bruno@gmail.com", bio: "Sou um DEV", role: "admin"}}/>  

      </div>
  );
}

export default App
