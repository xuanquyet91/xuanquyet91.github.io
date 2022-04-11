import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import UsersAdmin from "../admin/UsersAdmin";
import {GiReturnArrow} from 'react-icons/gi'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// import {DataGrid} from '@mui/x-data-grid';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CategoryAdmin from './CategoryAdmin';

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
const Admin = ( ) => {
 
    const [text, setText] = useState("");
    //
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const columns = [
    //     { field: 'id', headerName: 'ID',type:'number', width: 60 },
    //     { field: 'name', headerName: 'Name'},
    //     { field: 'type', headerName: 'Type', width: 110 },
    //     { field: 'nation', headerName: 'Nation',width: 110,},
    //     { field: 'directors', headerName: 'Director'},
    //     { field: 'view', headerName: 'View',type:'number', width: 90 },
    //     { field: 'year', headerName: 'Year',type:'number', width: 90 },
    //   ];

  return (
    <div className="admin">
        <div className="admin__title">
            <Link to='/' className='link-item'>
                <img alt='true' src='https://phimtopz.com/Theme/images/logo_ptz.png?v=1649311521'/>
            </Link>
            <h2 className="display-3">Administrator</h2>
            <Link to='/' className='link-item'>
                <GiReturnArrow/>
            </Link>
        </div> 
        <div className="admin__searchForm">
            <div className="admin__searchForm__input">
                <input type="text" 
                name="true"
                className="form-control" 
                aria-describedby="helpId" 
                placeholder="Keywords..." />
                <button>Search</button>
            </div>
        </div>
        <div className='admin__addData'>
            <Button onClick={handleOpen} variant="contained">ADD CATEGORY</Button>
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
        <div className='admin__dashboard'>
            <div className='admin__dashboard__nav'>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Horror</Typography>
                        <Typography>Action</Typography>
                        <Typography>Fantasy</Typography>
                    </AccordionDetails>
                </Accordion>  
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Users</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Account</Typography>
                    </AccordionDetails>
                </Accordion>  
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Tags name</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Tags</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='admin__dashboard__table' >
                <CategoryAdmin />
                {/* <DataGrid
                    rows={movie}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                /> */}

            </div>
        </div>
    </div>
  )
}

export default Admin