import React from 'react'

function Studentinfo({id}) {
    const token = localStorage.getItem("token")

    if(!token) {
        return <div>No Token Invalid Route</div>
    }
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = () => {
      fetch('https://api.example.com/data', {
        headers: {
          'Authorization': 'Bearer <TOKEN>',
        }
      })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    };
  return (
    <div>{token}</div>
  )
}

export default Studentinfo