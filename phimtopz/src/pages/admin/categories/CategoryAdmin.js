import React, { useEffect, useState } from "react";
import axios from "axios";
// import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import productApi from "../../../api/productApi";

import TablePagination from "@mui/material/TablePagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ModalCreate from "./components/ModalCreate";

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

let dataDetail = {
  name: "",
  channel: "",
  nation: "",
  time: "",
  view: "",
  type: "",
  actor: "",
  directors: "",
  year: "",
};
const CategoryAdmin = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [formUpdate, setForm] = useState(dataDetail);
  const [formCreate, setFormCreate] = useState(dataDetail);

  const [productList, setProductList] = useState([]);
  const [typeForm, settypeForm] = useState(null);
  const keys = ["name"];

  const [text, setText] = useState("");
  const [deleteID, setDeleteID] = useState("");
  const [updateID, setUpdateID] = useState("");
  // const [updateMovie, setUpdateMovie] = useState("");
  //
  const [open, setOpen] = useState(false);
  const handleOpenModalCreate = (data) => {
    settypeForm(2);
    setFormCreate({
      name: "",
      channel: "",
      nation: "",
      time: "",
      view: "",
      type: "",
      actor: "",
      directors: "",
      year: "",
    });
    dataDetail = { ...data };
    // setUpdateID(data.id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = (id) => {
    setDeleteID(id);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  //
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = (data) => {
    setForm({ ...data });
    settypeForm(1);
    setUpdateID(data.id);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  //

  // fetch API
  useEffect(() => {
    fetchProductList();
  }, [page, rowsPerPage]);

  const fetchProductList = async () => {
    try {
      const params = { page, limit: rowsPerPage };
      const response = await productApi.getAll(params);
      setProductList(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  // console.log(query);
  // thêm phim trên mockup Api
  // const handleAdd = () => {
  //   console.log("Prod", dataDetail);
  // };
  // Sửa phim trên mockup Api
  // const handleUpdate = (updateID) => {
  //   // console.log("Prod", dataDetail);
  //   axios
  //     .put(
  //       `https://624bab2444505084bc54160d.mockapi.io/movie/${updateID}`,
  //       dataDetail
  //     )
  //     .then(async () => {
  //       console.log("update succcess!", updateID);
  //       await fetchProductList();
  //       setOpenUpdate(false);
  //     });
  // };
  // Xóa phim trên mockup Api
  const handleDelete = (id) => {
    axios
      .delete(`https://624bab2444505084bc54160d.mockapi.io/movie/${id}`)
      .then(async () => {
        console.log("update succcess!", id);
        await fetchProductList();
        setOpenDelete(false);
      });
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

  const onSubmit = (event) => {
    event.preventDefault();
    if (typeForm == 1) {
      const newData = {};
      for (const [key, value] of Object.entries(formUpdate)) {
        newData[`${key}`] = event.target[`${key}`]?.value;
      }
      axios
        .put(
          `https://624bab2444505084bc54160d.mockapi.io/movie/${updateID}`,
          formUpdate
        )
        .then(async () => {
          console.log("update succcess!", updateID);
          await fetchProductList();
          setOpenUpdate(false);
        });
    } else {
      console.log(formCreate);
      // const newData = {};
      // for (const [key, value] of Object.entries(formCreate)) {
      //   newData[`${key}`] = event.target[`${key}`]?.value;
      // }
      axios
        .post(`https://624bab2444505084bc54160d.mockapi.io/movie`, formCreate)
        .then(async (response) => {
          console.log("add succcess!", response);
          await fetchProductList();
        });
    }
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
          <Button
            key="submit"
            onClick={handleOpenModalCreate}
            variant="contained"
          >
            ADD MOVIE
          </Button>
        </div>
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
                  {/* {index + 1 + (page - 1) * rowsPerPage} */}
                  {row.id}
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
                    onClick={() => handleOpenUpdate(row)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ backgroundColor: "#f0134d", color: "white" }}
                    onClick={() => handleOpenDelete(row.id)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* //add */}
        <ModalCreate
          open={open}
          handleClose={handleClose}
          setFormCreate={setFormCreate}
          formCreate={formCreate}
          onSubmit={onSubmit}
        />
        {/* Delete */}

        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ width: 350 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
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

        {/* //update */}
        <Modal
          open={openUpdate}
          onClose={handleCloseUpdate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={onSubmit}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Do you want to Update your account?
              </Typography>
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.name}
                name="name"
                onChange={(e) => {
                  setForm({ ...formUpdate, name: e.target.value });
                }}
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.channel}
                name="channel"
                label="channel"
                onChange={(e) => {
                  setForm({ ...formUpdate, channel: e.target.value });
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.directors}
                name="directors"
                label="Director"
                onChange={(e) => {
                  setForm({ ...formUpdate, directors: e.target.value });
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.actor}
                name="actor"
                label="Actor"
                onChange={(e) => {
                  setForm({ ...formUpdate, actor: e.target.value });
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.type}
                name="type"
                label="Type"
                onChange={(e) => {
                  setForm({ ...formUpdate, type: e.target.value });
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.nation}
                name="nation"
                onChange={(e) => {
                  setForm({ ...formUpdate, nation: e.target.value });
                }}
                label="Nation"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.time}
                name="time"
                onChange={(e) => {
                  setForm({ ...formUpdate, time: e.target.value });
                }}
                label="Time"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.view}
                name="view"
                onChange={(e) => {
                  setForm({ ...formUpdate, view: e.target.value });
                }}
                label="View"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                defaultValue={formUpdate.year}
                label="Year"
                onChange={(e) => {
                  setForm({ ...formUpdate, year: e.target.value });
                }}
                name="year"
                variant="outlined"
              />
              <Button
                type="submit"
                style={{ marginLeft: "25%" }}
                // onClick={() => handleUpdate(updateID)}
                // type="submit"
                // onSubmit={() => handleUpdate(updateID)}
              >
                Yes
              </Button>
              <Button onClick={handleCloseUpdate}>Cancel</Button>
            </Box>
          </form>
        </Modal>
      </TableContainer>
      {/* {console.log(productList.length / rowsPerPage)} */}
      <TablePagination
        component="div"
        count={50}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default CategoryAdmin;
