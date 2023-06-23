import {useState,useEffect} from 'react'

function FacultyUA({id}) {
    const token = localStorage.getItem("token")

    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      await fetch('http://localhost:8000/api/v1/faculty/event/get-all-unapproved', {
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

export default FacultyUA