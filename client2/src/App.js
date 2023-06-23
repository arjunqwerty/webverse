import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Register from './Components/Register';


function App() {
  const [data, setData] = useState([]);


  return (
    <div className="App">
    <Register/>

    </div>
  );
}

export default App;
