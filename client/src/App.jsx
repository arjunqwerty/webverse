import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import RegStud from './components/Student/RegStud';
import LogStud from './components/Student/LogStud';
import Studentinfo from './components/Student/Studentinfo';
import LeavePost from './components/Student/LeavePost';
import LeaveGet from './components/Student/LeaveGet';

import RegFac from './components/Faculty/RegFac';
import LogFac from './components/Faculty/LogFac';

import LogWarden from './components/warden/LogWarden';
import FacultyUA from './components/Faculty/FacultyUA';
import StudComplain from './components/Student/StudComplain';
import Faceappeve from './components/Faculty/facappeve';
import { Route, Routes } from "react-router-dom";
import './App.css'
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
        <Route path="/student/auth/studcomplain" element={<StudComplain />}/>
        <Route path="/student/auth/info" element={<Studentinfo/>}/> 
        <Route path="/student/auth/leave" element={<LeavePost/>}/> 
        <Route path="/student/auth/leave/see" element={<LeaveGet/>}/> 
        <Route path="/faculty/auth/register" element={<RegFac />}/>
        <Route path="/faculty/auth/login" element={<LogFac />}/>
        <Route path="/faculty/auth/facultyua" element={<FacultyUA />}/>
        <Route path="/faculty/auth/faceappeve" element={<Faceappeve />}/>
        <Route path="/warden/auth/login" element={<LogWarden />}/>
        <Route path="/student/info/warden" element={<Stuwarden/>}/>
        <Route path="/student/info/event" element={<Studentevent/>}/>

    </Routes>
  )
}

export default App
