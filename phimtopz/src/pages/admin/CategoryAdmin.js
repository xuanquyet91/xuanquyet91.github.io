import React, { useEffect, useState } from "react";
import axios from "axios";
// import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import productApi from "../../api/productApi";

import TablePagination from "@mui/material/TablePagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const CategoryAdmin = () => {
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [productList, setProductList] = useState([]);
  const [text, setText] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const [editID, setEditID] = useState("");
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = (id) => {
    setDeleteID(id);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  //
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = (id) => {
    setEditID(id);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);
  //
  const keys = ["name"];
  //
  const [name, setName] = useState("");
  const [channel, setChannel] = useState("");
  const [nation, setNation] = useState("");
  const [time, setTime] = useState("");
  const [view, setView] = useState("");
  const [type, setType] = useState("");
  const [actor, setActor] = useState("");
  const [directors, setDirectors] = useState("");
  const [year, setYear] = useState("");
  const addMovie = {
    name: name,
    channel: channel,
    nation: nation,
    time: time,
    view: view,
    type: type,
    actor: actor,
    directors: directors,
    year: year,
  };
  // fetch API
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { page, limit: rowsPerPage };
        const response = await productApi.getAll(params);
        setProductList(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [page, rowsPerPage]);

  // console.log(query);
  // thêm phim trên mockup Api
  const handleAdd = () => {
    axios
      .post(`https://624bab2444505084bc54160d.mockapi.io/movie`, addMovie)
      .then((response) => {
        console.log("add succcess!", response);
      });
  };

  // Xóa phim trên mockup Api
  const handleDelete = (id) => {
    axios
      .delete(`https://624bab2444505084bc54160d.mockapi.io/movie/${id}`)
      .then(() => {
        console.log("delete succcess!", id);
      });
    const interval = setInterval(() => {
      window.location.reload();
    }, 1000);
    return () => clearInterval(interval);
  };
  // tìm kiếm danh sách phim theo tên
  const search = (productList) => {
    return productList.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  ///
  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  return (
    <>
      <div className="admin__dashboard__table__handleData">
        <div className="admin__dashboard__table__handleData__search">
          <div className="admin__dashboard__table__handleData__search__input">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              name="true"
              className="form-control"
              aria-describedby="helpId"
              placeholder="Keywords..."
            />
            <button
            // onClick={handleChange}
            >
              Search
            </button>
          </div>
          <Button key="submit" onClick={handleOpen} variant="contained">
            ADD MOVIE
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            component="form"
            noValidate
            autoComplete="off"
            className="admin__dashboard__table__handleData__search--submit"
          >
            <TextField
              id="outlined-basic"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setChannel(e.target.value)}
              label="Channel"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setDirectors(e.target.value)}
              label="Director"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setActor(e.target.value)}
              label="Actor"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setType(e.target.value)}
              label="Type"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setNation(e.target.value)}
              label="Nation"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setTime(e.target.value)}
              label="Time"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setView(e.target.value)}
              label="View"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setYear(e.target.value)}
              label="Year"
              variant="outlined"
            />
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
            <button onClick={handleAdd}>SUBMIT</button>
            <div>
              <p>{text}</p>
            </div>
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#dae0e5" }}>
              <TableCell align="left ">#</TableCell>
              <TableCell align="left">NAME</TableCell>
              <TableCell align="left">DIRECTOR</TableCell>
              <TableCell align="left">CHANNEL</TableCell>
              <TableCell align="left">TIME</TableCell>
              <TableCell align="center">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search(productList)?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  {index + 1 + (page - 1) * rowsPerPage}
                </TableCell>
                <TableCell align="left" sx={{ maxWidth: 150 }}>
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ maxWidth: 150 }}>
                  {row.directors}
                </TableCell>
                <TableCell align="left">{row.channel}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="center">
                  <button
                    style={{ backgroundColor: "#f1bc31", color: "white" }}
                    onClick={() => handleOpenEdit(row.id)}
                  >
                    Edit
                  </button>
                  <Modal
                    open={openEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} style={{ width: 350 }}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Do you want to Update your account?
                      </Typography>
                      <Button
                        style={{ marginLeft: "25%" }}
                        onClick={() => handleDelete(deleteID)}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleCloseDelete}>Cancel</Button>
                    </Box>
                  </Modal>
                  <button
                    style={{ backgroundColor: "#f0134d", color: "white" }}
                    onClick={() => handleOpenDelete(row.id)}
                  >
                    Delete
                  </button>
                  <Modal
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} style={{ width: 350 }}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Do you want to delete your account?
                      </Typography>
                      <Button
                        style={{ marginLeft: "25%" }}
                        onClick={() => handleDelete(deleteID)}
                      >
                        Yes
                      </Button>
                      <Button onClick={handleCloseDelete}>Cancel</Button>
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {console.log(productList.length / rowsPerPage)} */}
      <TablePagination
        component="div"
        count={40}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default CategoryAdmin;
