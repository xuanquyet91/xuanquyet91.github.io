import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Users } from '../data'
import { Link, useOutletContext } from 'react-router-dom';
import UsersAdmin from "../components/UsersAdmin";
import {GiReturnArrow} from 'react-icons/gi'


const Admin = ( ) => {
    const itemsPerPage= useOutletContext()

    const [query, setQuery]= useState('');
    const keys = ['first_name','email']

   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);
 
   useEffect(() => {
     // Fetch items from another resources.
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     setCurrentItems(Users.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(Users.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);
 
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % Users.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };

   const search = (Users) => {
       return Users.filter(item=>
       keys.some((key)=> 
           item[key].toLowerCase().includes(query)
               )
           );
       }
  console.log(query);
    

  return (
    <div className="admin">
            <div className="admin__title">
                <Link to='/' className='link-item'>
                    <GiReturnArrow/>
                </Link>
                <h2 className="display-3">Administrator</h2>
            </div> 
            <div className="admin__searchForm">
                <div className="admin__searchForm__input">
                    <input type="text" 
                    onChange= {e=> setQuery(e.target.value)}
                    name="true"
                    className="form-control" 
                    aria-describedby="helpId" 
                    placeholder="Keywords..." />
                    <button>Search</button>
                </div>
                <div className="admin__searchForm__group">
                    <table className="admin__searchForm__group__title">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>GENDER</th>
                                <th>ACTIVE</th>
                            </tr>
                        </thead>
                        <tbody>
                        <>
                            <UsersAdmin 
                            data={search(Users)} 
                            currentItems={currentItems} />
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                            />
                        </>
                        </tbody>
                    </table>    
                    {/* end table */}
                    <div className="admin__searchForm__group__content">
                        <div className="admin__searchForm__group__content__header">ADD USER</div>
                        <div className="admin__searchForm__group__content__body">
                            <div className="admin__searchForm__group__content__body__add">
                                <p>Account</p>
                                <input type="text" 
                                name="true"
                                className="form-control" 
                                placeholder="Add User" />
                            </div>
                            <div className="admin__searchForm__group__content__body__add">
                                <p>Email</p>
                                <input type="text" 
                                name="true"
                                className="form-control" 
                                placeholder="Add Email" />
                            </div>
                            <div className="admin__searchForm__group__content__body__add">
                                <p>GENDER</p>
                                <select className="custom-select" required>
                                    <option value>Option</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                   </select>
                            </div>
                            <div className="admin__searchForm__group__content__body__add">
                                <button>SAVE</button>
                            </div>
                        </div>
                    </div>
                    {/* end set user */}
                </div>
            </div>
         </div>
  )
}

export default Admin