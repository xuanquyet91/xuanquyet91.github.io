import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SendIcon from "@mui/icons-material/Send";
import { Autocomplete, Stack } from "@mui/material";

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

const ModalCreate = (props) => {
  const { open, handleClose, formCreate, setFormCreate, onSubmit, tagList } =
    props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form>
        <Box
          sx={style}
          component="form"
          noValidate
          autoComplete="off"
          className="admin__dashboard__table__handleData__search--submit"
        >
          <TextField
            // value.required="true"
            id="outlined-basic"
            defaultValue={formCreate.name}
            name="name"
            label="Name"
            onChange={(e) =>
              setFormCreate({ ...formCreate, name: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.channel}
            name="channel"
            label="channel"
            onChange={(e) =>
              setFormCreate({ ...formCreate, channel: e.target.value })
            }
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            defaultValue={formCreate.directors}
            name="directors"
            label="Director"
            onChange={(e) =>
              setFormCreate({ ...formCreate, directors: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.actor}
            name="actor"
            label="Actor"
            onChange={(e) =>
              setFormCreate({ ...formCreate, actor: e.target.value })
            }
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            defaultValue={formCreate.nation}
            name="nation"
            label="Nation"
            onChange={(e) =>
              setFormCreate({ ...formCreate, nation: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.img}
            name="image"
            label="Image"
            onChange={(e) =>
              setFormCreate({ ...formCreate, img: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.series}
            name="series"
            label="Series"
            onChange={(e) =>
              setFormCreate({ ...formCreate, series: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.episode}
            name="episode"
            label="Episode"
            onChange={(e) =>
              setFormCreate({ ...formCreate, episode: e.target.value })
            }
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.year}
            name="year"
            label="Year"
            onChange={(e) =>
              setFormCreate({ ...formCreate, year: e.target.value })
            }
            variant="outlined"
          />
          <Box
            display="grid"
            sx={{ marginTop: "10px", marginBottom: "15px" }}
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
                  // defaultValue={[
                  //   ...tagList.filter((e) => formUpdate.tag?.includes(e.name)),
                  // ]}
                  filterSelectedOptions
                  onChange={(event, newValue) => {
                    // console.log("Loading...", event, newValue);
                    setFormCreate({
                      ...formCreate,
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
                  setFormCreate({ ...formCreate, type: newValue.name });
                  console.log(formCreate);
                }}
                options={categoryList}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Category"
                    name="type"
                  />
                )}
              />
            </Box>
          </Box>
          <CKEditor
            sx={{ marginBottom: "10px" }}
            editor={ClassicEditor}
            id="header"
            data={formCreate.desc}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormCreate({ ...formCreate, desc: data });
            }}
          />
          <Button
            sx={{ width: "30px" }}
            onClick={(e) => {
              handleClose();
              onSubmit(e);
            }}
            variant="contained"
            // type="submit"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ModalCreate;
