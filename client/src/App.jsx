import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import RegStud from './components/Student/RegStud';
import LogStud from './components/Student/LogStud';
import RegFac from './components/Faculty/RegFac';
import LogFac from './components/Faculty/LogFac';
import LogWarden from './components/warden/LogWarden';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Studentinfo from './components/Student/Studentinfo';
import Stuwarden from './components/Student/Stuwarden'
import Homepage from './components/Homepage';
import Studentevent from './components/Student/Studentevent';

function App() {

  return (
    <Routes>
        {/* <Route path="/" element={<RegForm />}/>/ */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/student/auth/register" element={<RegStud />}/>
        <Route path="/student/auth/login" element={<LogStud />}/>
        <Route path="/faculty/auth/register" element={<RegFac />}/>
        <Route path="/faculty/auth/login" element={<LogFac />}/>
        <Route path="/student/info" element={<Studentinfo/>}/> 
        <Route path="/warden/auth/login" element={<LogWarden />}/>
        <Route path="/student/info/warden" element={<Stuwarden/>}/>
        <Route path="/student/info/event" element={<Studentevent/>}/>

    </Routes>
  )
}

export default App
