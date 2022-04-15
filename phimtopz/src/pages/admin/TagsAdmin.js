import React, { useEffect, useState } from 'react'
import {DataGrid} from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import tagApi from '../../api/tagApi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const TagsAdmin = () => {
  // fetch API
  const [tagList, setTagList] = useState([]);
 
  useEffect(() => {
  const fetchProductList = async () => {
    try {
      // const params = { _page: 1, _limit: 10 };
      const responseTag = await tagApi.getAll();
      console.log('Fetch products successfully: ', responseTag);
      setTagList(responseTag)
      
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }
  fetchProductList();
  }, []);
  const [text, setText] = useState("");
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: 'id', headerName: 'ID',type:'number', width: 60 },
    { field: 'tag', headerName: 'TAG'},

  ];
  return (
    <>
      <div className='admin__dashboard__table__handleData'>
        <div className="admin__dashboard__table__handleData__search">
          <div className="admin__dashboard__table__handleData__search__input">
              <input type="text" 
              name="true"
              className="form-control" 
              aria-describedby="helpId" 
              placeholder="Keywords..." />
              <button>Search</button>
          </div>
          <Button onClick={handleOpen} variant="contained">ADD TAG</Button>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form"
              noValidate
              autoComplete="off"
              >
              <TextField id="outlined-basic" label="ID" variant="outlined" />
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Director" variant="outlined" />
              <TextField id="outlined-basic" label="View" variant="outlined" />
              <TextField id="outlined-basic" label="Year" variant="outlined" />
              <TextField id="outlined-basic" label="Nation" variant="outlined" />
              <div className="editor">
                  <CKEditor
                  editor={ClassicEditor}
                  id="header"
                  data="<p></p>"
                  onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                      const data = editor.getData();
                      setText(data);
                  }}
                  />
                </div>
            <div>
                <p>{text}</p>
            </div>
            </Box>
        </Modal>
    </div>
      <DataGrid
        rows={tagList}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> 
    </>
  )
}

export default TagsAdmin