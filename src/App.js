import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import DeviceAlert from './components/modalconfirm/DeviceAlert';
import {useEffect, useState} from 'react'

function App() {
  const[deviceWidth,setDeviceWidth]=useState();
  useEffect(()=>{
    setDeviceWidth(window.innerWidth);
  },[])
  return (
    
    <div className="App">
        {deviceWidth>800?<Navbar></Navbar>:<DeviceAlert></DeviceAlert>}
        
    </div>
  );
}

export default App;


