import React from 'react'

function Studentinfo({id}) {
    const token = localStorage.getItem("token")

    if(!token) {
        return <div>No Token Invalid Route</div>
    }
  return (
    <div>{token}</div>
  )
}

export default Studentinfo