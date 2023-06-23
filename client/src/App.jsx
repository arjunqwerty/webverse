import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import RegStud from './components/Student/RegStud';
import LogStud from './components/Student/LogStud';
import RegFac from './components/Faculty/RegFac';
import LogFac from './components/Faculty/LogFac';
import LeavePost from './components/Student/LeavePost';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Studentinfo from './components/Student/Studentinfo';

function App() {

  return (
    <Routes>
        {/* <Route path="/" element={<RegForm />}/>/ */}
        <Route path="/student/auth/register" element={<RegStud />}/>
        <Route path="/student/auth/login" element={<LogStud />}/>
        <Route path="/faculty/auth/register" element={<RegFac />}/>
        <Route path="/faculty/auth/login" element={<LogFac />}/>
        <Route path="/student/info" element={<Studentinfo/>}/> 
        <Route path="/student/leave" element={<LeavePost/>}/> 
    </Routes>
  )
}

export default App
