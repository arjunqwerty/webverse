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

  return (
    <div className='main'>

        <h1>VIT HOSTEL MANAGMENT SYSTEM</h1>
        <div className='buts'>
        <button className='but1' onClick={sbme}> Register</button>
        <button className='but2' onClick={sbme1}> Login</button>
        </div>

    </div>
  )
}

export default Homepage