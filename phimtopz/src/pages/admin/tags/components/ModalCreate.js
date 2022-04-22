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
  const {
    open,
    handleClose,
    formCreate,
    setFormCreate,
    onSubmit,
    categoryList,
    tagList,
  } = props;

  console.log(categoryList);
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
