import React from 'react'
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    const sbme=()=>{
        navigate('/student/auth/register')
    }
    const sbme1=()=>{
        navigate('/student/auth/login')
    }
    const sbme2=()=>{
        navigate('/faculty/auth/register')
    }
    const sbme3=()=>{
        navigate('/faculty/auth/login')
    }

  return (
    <div className='main'>

        <h1>VIT HOSTEL MANAGMENT SYSTEM</h1>
        <div className='buts'>
        <button className='but1' onClick={sbme}> Student Register</button>
        <button className='but2' onClick={sbme1}> Student Login</button>
        <button className='but1' onClick={sbme2}> Faculty Register</button>
        <button className='but2' onClick={sbme3}> Faculty Login</button>
        </div>

    </div>
  )
}

export default Homepage