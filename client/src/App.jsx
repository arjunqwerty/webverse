import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import RegStud from './components/Student/RegStud';
import LogStud from './components/Student/LogStud';
import RegFac from './components/Faculty/Regfac';
import LogFac from './components/Faculty/LogFac';
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/student/auth/register" element={<RegStud />}/>
        <Route path="/student/auth/login" element={<LogStud />}/>
        <Route path="/faculty/auth/register" element={<RegFac />}/>
        <Route path="/faculty/auth/login" element={<LogFac />}/>
    </Routes>
  )
}

export default App
