
import React from 'react'

function Table ({data}) {


  return (
    <>
      <tbody className='list'>
        <tr >
          <th className="listItem">Name</th>
          <th className="listItem">SurName</th>
          <th className="listItem">email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="listItem">{item.first_name}</td>
            <td className="listItem">{item.last_name}</td>
            <td className="listItem">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default Table