import React from 'react'
import {DataGrid} from '@mui/x-data-grid';
import {movie} from "../../dataBackup"

const CategoryAdmin = () => {
  const columns = [
    { field: 'id', headerName: 'ID',type:'number', width: 60 },
    { field: 'name', headerName: 'Name'},
    { field: 'type', headerName: 'Type', width: 110 },
    { field: 'nation', headerName: 'Nation',width: 110,},
    { field: 'directors', headerName: 'Director'},
    { field: 'view', headerName: 'View',type:'number', width: 90 },
    { field: 'year', headerName: 'Year',type:'number', width: 90 },
  ];
  return (
    <DataGrid
      rows={movie}
      columns={columns}
      pageSize={6}
      rowsPerPageOptions={[5]}
      checkboxSelection
  /> 
  )
}

export default CategoryAdmin