import { useState } from 'react'

import './App.css';
import Ola from './components/Ola';
import SeuNome from './components/SeuNome';


function App() {
  const [name, setName] = useState()
 
  return (

    <div className="App">
      
      <h1> State lift </h1>
      <SeuNome setName={setName}/>
      <Ola name={name}/>
    </div>
  );
  
}

export default App;
