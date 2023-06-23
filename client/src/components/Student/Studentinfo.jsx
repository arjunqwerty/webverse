import {useState,useEffect} from 'react'

function Studentinfo({id}) {
    const token = localStorage.getItem("token")

    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      fetch('http://localhost:8000/api/v1/student/me/', {
        headers: {
          'Authorization': `Bearer ${token} `,
        }
      })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    };
    console.log(data['data'])
  return (
    <div >HILJ
    </div>
  )
}

export default Studentinfo