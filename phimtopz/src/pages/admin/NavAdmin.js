import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
  return (
    <div className='admin__dashboard__nav'>
      <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Link to="/admin/category-admin" className='link-item'>
            <Typography>Category</Typography>
          </Link>
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
          <Link to="/admin/user-admin" className='link-item'>
            <Typography>Users</Typography>
          </Link>
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
          <Link to="/admin/tag-admin" className='link-item'>
            <Typography>Tags name</Typography>
          </Link>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>Tags</Typography>
          </AccordionDetails>
      </Accordion>
  </div>
  )
}

export default NavAdmin