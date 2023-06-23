import React, { useState, useEffect } from 'react';

function FacultyUA({ id }) {
  const token = localStorage.getItem('token');
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('http://localhost:8000/api/v1/faculty/event/get-all-unapproved', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        }
        setName(data?.data?.name || '');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className='buus'>
        <button className='button3'>Approved</button>
        <button className='button3'>Rejected</button>
      </div>
      <div className='stinfo'>
        <h1>{name}</h1>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <input key={index} type='text' value={item} onChange={(e) => console.log(e.target.value)} />
          ))}
      </div>
    </div>
  );
}

export default FacultyUA;
