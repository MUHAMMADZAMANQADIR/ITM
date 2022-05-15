import React, { useState, useEffect , useRef,  useContext} from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiAlert from "@material-ui/lab/Alert";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {
  Snackbar,
} from "@material-ui/core";
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const [openAlert, setOpenAlert] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  useEffect(() => {
            handleOpen()       
    });
   
  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h3>Old {props.type}:</h3>
            <input  value={props.typevalue} type="text" />
            <h3>Enter New {props.type}:</h3>
            <input  value={props.typevalue} type="text" />

            <div >
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
                endIcon={<SendIcon />}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                startIcon={<DeleteIcon />}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
       <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

