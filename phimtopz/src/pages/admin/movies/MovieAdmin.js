import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Modal,
  Autocomplete,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import productApi from "../../../api/productApi";
import ModalCreate from "../tags/components/ModalCreate";
import tagApi from "../../../api/tagApi";
import categoryApi from "../../../api/categoryApi";

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
  desc: "",
  tag: [],
  image: "",
  episode: "",
  series: "",
  id: "",
};
const MovieAdmin = () => {
  // console.log(TextField);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [formUpdate, setForm] = useState(dataDetail);
  const [formCreate, setFormCreate] = useState(dataDetail);

  const [productList, setProductList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
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
      desc: "",
      tag: [],
      image: "",
      episode: "",
      series: "",
      id: "",
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
    // console.log(data);
    setForm({ ...data });
    settypeForm(1);
    setUpdateID(data.id);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  //

  // fetch API product
  useEffect(() => {
    setIsloading(!isLoading);
    fetchProductList();
  }, [page, rowsPerPage]);
  // fetch API tag
  useEffect(() => {
    fetchTagList();
  }, [page, rowsPerPage]);
  // fetch API tag
  useEffect(() => {
    fetchCategoryList();
  }, [page, rowsPerPage]);

  const fetchProductList = async () => {
    try {
      const params = { page, limit: rowsPerPage };
      const response = await productApi.getAll(params);
      setProductList(response);
      setIsloading(isLoading);
      // console.log();
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  const fetchTagList = async () => {
    try {
      const params = { page, limit: rowsPerPage };
      const response = await tagApi.getAll(params);
      setTagList(response);
      // console.log("success to fetch product list: ", response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  const fetchCategoryList = async () => {
    try {
      const params = { page, limit: rowsPerPage };
      const response = await categoryApi.getAll(params);
      setCategoryList(response);
      console.log("success to fetch product list: ", response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://624bab2444505084bc54160d.mockapi.io/movie/${id}`)
      .then(async () => {
        // console.log("update succcess!", id);
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
  // next page update data from dependenci useEffect
  const handleChangePage = (event, newPage) => {
    // console.log("abc");
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
      // for (const [key, value] of Object.entries(formUpdate)) {
      //   newData[`${key}`] = event.target[`${key}`]?.value;
      // }
      axios
        .put(
          `https://624bab2444505084bc54160d.mockapi.io/movie/${updateID}`,
          formUpdate
        )
        .then(async () => {
          // console.log("update succcess!", updateID);
          await fetchProductList();
          setOpenUpdate(false);
        });
    } else {
      // console.log(formCreate);
      // const newData = {};
      // for (const [key, value] of Object.entries(formCreate)) {
      //   newData[`${key}`] = event.target[`${key}`]?.value;
      // }
      axios
        .post(`https://624bab2444505084bc54160d.mockapi.io/movie`, formCreate)
        .then(async (response) => {
          // console.log("add succcess!", response);
          await fetchProductList();
        });
    }
  };
  const [isLoading, setIsloading] = useState(true);
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
      {isLoading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#dae0e5" }}>
                <TableCell align="left">#</TableCell>
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
            categoryList={categoryList}
            tagList={tagList}
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
                  Update Movie
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
                  defaultValue={formUpdate.year}
                  label="Year"
                  onChange={(e) => {
                    setForm({ ...formUpdate, year: e.target.value });
                  }}
                  name="year"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  defaultValue={formUpdate.img}
                  label="image"
                  onChange={(e) => {
                    setForm({ ...formUpdate, img: e.target.value });
                  }}
                  name="image"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  disabled
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
                  disabled
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
                  disabled
                  defaultValue={formUpdate.episode}
                  name="episode"
                  onChange={(e) => {
                    setForm({ ...formUpdate, episode: e.target.value });
                  }}
                  label="episode"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  disabled
                  defaultValue={formUpdate.series}
                  name="series"
                  onChange={(e) => {
                    setForm({ ...formUpdate, series: e.target.value });
                  }}
                  label="series"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  disabled
                  defaultValue={formUpdate.id}
                  name="id"
                  label="Id"
                  onChange={(e) => {
                    setForm({ ...formUpdate, id: e.target.value });
                  }}
                  variant="outlined"
                />
                <Box
                  display="grid"
                  sx={{ marginTop: "10px" }}
                  gridTemplateColumns="repeat(12, 1fr)"
                  gap={2}
                >
                  <Box gridColumn="span 8">
                    <Stack spacing={3} sx={{ width: 500 }}>
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={tagList}
                        getOptionLabel={(option) => option.name}
                        defaultValue={[
                          ...tagList.filter((e) =>
                            formUpdate.tag?.includes(e.name)
                          ),
                        ]}
                        filterSelectedOptions
                        onChange={(event, newValue) => {
                          // console.log("Loading...", event, newValue);
                          setForm({
                            ...formUpdate,
                            tag: newValue.map((e) => e.name),
                          });
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Filter Tags Options"
                            name="tag"
                          />
                        )}
                      />
                    </Stack>
                  </Box>
                  <Box gridColumn="span 4">
                    <Autocomplete
                      sx={{ width: 220 }}
                      id="size-small-standard"
                      size="small"
                      onChange={(event, newValue) => {
                        // console.log("Loading...", event, newValue);
                        setForm({ ...formUpdate, type: newValue.name });
                        // console.log(formUpdate);
                      }}
                      options={categoryList}
                      getOptionLabel={(option) => option.name}
                      defaultValue={[...categoryList].find(
                        (e) => e.name === formUpdate.type
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Category"
                          // placeholder="Category"
                          name="type"
                        />
                      )}
                    />
                  </Box>
                </Box>
                <div className="editor" style={{ marginTop: "10px" }}>
                  <CKEditor
                    editor={ClassicEditor}
                    id="header"
                    data={formUpdate.desc}
                    onReady={(editor) => {
                      // console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setForm({ ...formUpdate, desc: data });
                    }}
                  />
                </div>
                <div
                  className="optionSubmit"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  {/* <Stack direction="row" spacing={3}> */}
                  <Button variant="outlined" onClick={handleCloseUpdate}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    endIcon={<EditIcon />}
                  >
                    Save
                  </Button>
                  {/* </Stack> */}
                </div>
              </Box>
            </form>
          </Modal>
        </TableContainer>
      ) : (
        "Loading..."
      )}
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

export default MovieAdmin;
