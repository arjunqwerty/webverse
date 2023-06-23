import React from 'react'
import {useState,useEffect} from 'react'

function Stuwarden() {
    const token = localStorage.getItem("token")
    const [block, setblock]=useState("");
    const [name,setname]=useState(""); 

    useEffect(() => {
        fetchData();
  
  
      }, []);
      
    
      const fetchData = async() => {
        await fetch('http://localhost:8000/api/v1/student/me/my-warden', {
          headers: {
            'Authorization': `Bearer ${token} `,
          }
        })
          .then(response => response.json())
          .then(data =>{
            setblock(data['data']['block'])
            setname(data['data']['name'])

          }
          
          )
          .catch(error => console.error(error));
              };
  return (
    <div className='stinfo'>
    <h1>Name: {name}</h1>
    <h1>Block :{block}</h1>
    </div>
  )
}

export default Stuwarden