import {useState,useEffect} from 'react'

function FacultyAllCourse({id}) {
    const tokennew = localStorage.getItem("token")

    
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      await fetch('http://localhost:8000/api/v1/faculty/course/get-all-courses', {
        headers: {
          'Authorization': `Bearer ${tokennew} `,
        }
      })
        .then(response => response.json())
        .then(data => setData(data['message']))
        .catch(error => console.error(error));
    };
  return (
    <div >{data}
    </div>
  )
}

export default FacultyAllCourse