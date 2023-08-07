import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
useEffect(()=>{
  alert("This app may take some seconds to fetch data from server.")
},[])

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
