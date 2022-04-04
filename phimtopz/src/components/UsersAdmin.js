import React from 'react'


const UsersAdmin = ({data,currentItems}) => {
  // console.log(data);
  // console.log(currentItems);
  return (
    <>
      {currentItems  && currentItems.map((item)=> (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>
              <div className="btn__group">
                  <button className="edit">Sửa</button>
                  <button className="delete">Xóa</button>
              </div>
          </td>
        </tr>
        ))}
    </>  
  )
}

export default UsersAdmin