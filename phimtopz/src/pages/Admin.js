import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import UsersAdmin from "../components/UsersAdmin";
import {GiReturnArrow} from 'react-icons/gi'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useForm } from "react-hook-form";
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import {movie} from '../dataBackup'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // const {  Table, Tag, Space  } = antd;
const Admin = ( ) => {
    const { register, handleSubmit } = useForm();
    const [dataForm, setDataForm] = useState("");
    //
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //
    // const columns = [
    //     { field: 'id', headerName: 'ID',type:'number', width: 60 },
    //     { field: 'name', headerName: 'Name', width: 200 },
    //     { field: 'type', headerName: 'Type', width: 110 },
    //     { field: 'nation', headerName: 'Nation',width: 110,},
    //     { field: 'directors', headerName: 'Director', width: 130 },
    //     { field: 'view', headerName: 'View',type:'number', width: 90 },
    //     { field: 'year', headerName: 'Year',type:'number', width: 90 },
    //     { field: 'edit', headerName: 'Edit', width: 30 },
    //     { field: 'delete', headerName: 'Delete', width: 30 },
    //   ];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
  return (
    <div className="admin">
        <div className="admin__title">
            <Link to='/' className='link-item'>
                <img src='https://phimtopz.com/Theme/images/logo_ptz.png?v=1649311521'/>
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
                <Box sx={style}>
                <form className='admin__addData__form' onSubmit={handleSubmit((dataForm) => setDataForm(JSON.stringify(dataForm)))}>
                    {/* <Header /> */}
                    <label>type</label>
                    <input {...register("type")} placeholder="Type" />
                    <label>nation</label>
                    <input {...register("nation")} placeholder="Nation" />
                    <label>directors</label>
                    <input {...register("directors")} placeholder="Director" />
                    <label>view</label>
                    <input {...register("view")} placeholder="View" />
                    <label>year</label>
                    <input {...register("year")} placeholder="Year" />
                    <p>{dataForm}</p>
                    <input type="submit" value='SEND' />
                </form>
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
                        <Typography>Horror</Typography>
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
                        <Typography>Horror</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='admin__dashboard__table' >
                <Table columns={columns} dataSource={data}/>
            </div>
        </div>
        
    </div>
  )
}

export default Admin