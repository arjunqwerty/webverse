import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import RegForm from './components/RegForm';
import LogForm from './components/LogForm';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Studentinfo from './components/Studentinfo';

function App() {

  return (
    <Routes>
        {/* <Route path="/" element={<RegForm />}/>/ */}
        <Route path="/student/auth/register" element={<RegStud />}/>
        <Route path="/student/auth/login" element={<LogForm />}/>
        <Route path="/student/info" element={<Studentinfo/>}/> 
    </Routes>
  )
}

export default App
