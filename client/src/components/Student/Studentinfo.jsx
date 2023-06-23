import {useState,useEffect} from 'react'

function Studentinfo({id}) {
    const token = localStorage.getItem("token")
    const[name,setname]=useState("");
    const[regno,setregno]=useState("");
    const[block,setblock]=useState("");
    const[mess,setmess]=useState("");


    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();


    }, []);
    
  
    const fetchData = async() => {
      await fetch('http://localhost:8000/api/v1/student/me/', {
        headers: {
          'Authorization': `Bearer ${token} `,
        }
      })
        .then(response => response.json())
        .then(data =>
          { setData(data)
            setblock(data['data']['block'])
            setmess(data['data']['messType'])
            setname(data['data']['name'])
            setregno(data['data']['regNo'])
              }
        
        )
        .catch(error => console.error(error));
            };

    console.log(data)
  return (
    <div>
    <div className='buus'>
    <button className='button3'>Post Complaint</button>
    
    <button className='button3'>Get Warden</button>
    <button className='button3'>Leave Request</button>

    </div>
       <div className='stinfo'>
    <h1>{name}</h1>
    <h2>{regno}</h2>
    <h2>Hostel block {block}</h2>
    <h2>Mess type: {mess}</h2>



    </div>

    </div>

  )
}

export default Studentinfo