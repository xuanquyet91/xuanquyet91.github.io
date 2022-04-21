import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  const { open, handleClose, formCreate, setFormCreate, onSubmit } = props;
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
            id="outlined-basic"
            defaultValue={formCreate.name}
            name="name"
            label="Name"
            onChange={(e) =>
              setFormCreate({ ...formCreate, name: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.channel}
            name="channel"
            label="channel"
            onChange={(e) =>
              setFormCreate({ ...formCreate, channel: e.target.value })
            }
            variant="filled"
          />

          <TextField
            id="outlined-basic"
            defaultValue={formCreate.directors}
            name="directors"
            label="Director"
            onChange={(e) =>
              setFormCreate({ ...formCreate, directors: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.actor}
            name="actor"
            label="Actor"
            onChange={(e) =>
              setFormCreate({ ...formCreate, actor: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.type}
            name="type"
            label="Type"
            onChange={(e) =>
              setFormCreate({ ...formCreate, type: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.nation}
            name="nation"
            label="Nation"
            onChange={(e) =>
              setFormCreate({ ...formCreate, nation: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.time}
            name="time"
            label="Time"
            onChange={(e) =>
              setFormCreate({ ...formCreate, time: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.view}
            name="view"
            label="View"
            onChange={(e) =>
              setFormCreate({ ...formCreate, view: e.target.value })
            }
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            defaultValue={formCreate.year}
            name="year"
            label="Year"
            onChange={(e) =>
              setFormCreate({ ...formCreate, year: e.target.value })
            }
            variant="filled"
          />
          {/* <div className="editor"> */}
          <CKEditor
            editor={ClassicEditor}
            id="header"
            data="<p></p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              // setText(data);
            }}
          />
          {/* </div> */}
          <Button
            variant="outlined"
            onClick={(e) => {
              handleClose();
              onSubmit(e);
            }}
          >
            SUBMIT
          </Button>
          {/* <div>
            <p>{text}</p>
          </div> */}
        </Box>
      </form>
    </Modal>
  );
};

export default ModalCreate;
