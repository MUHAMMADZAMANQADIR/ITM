import React, { useState, useEffect , useRef,  useContext} from "react";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,

} from "@material-ui/core";
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 680,
    height: 580,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert , setOpenAlert] = useState(false);
  const [NewsTitle, setNewsTitle] = useState();
  const [NewsType, setNewsType] = useState();
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Location, setLocation] = useState();
  const [BrandName, setBrandName] = useState();
  const [color, setcolor] = useState();
  const [Crime, setCrime] = useState();
  const [CarModel, setCarModel] = useState();
  const [Description, setDescription] = useState();
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleSend=()=>{
        console.log("88930435")
         
        const body = JSON.stringify( { Description, CarModel ,Crime ,color ,
        BrandName, Age,Name, NewsType, NewsTitle, Location})
        console.log(body);
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
         try {
            const res = axios.post("http://localhost:5000/api/news/postanews", body, config)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    setOpenAlert(true)
  }
  return (
    <>
      <Tooltip title="Add News" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                variant="outlined"
                id="standard-basic"
                label="News Title"
                size="small"
                style={{ width: "100%" }}
                onChange={event=>setNewsTitle(event.target.value)}
              />
            </div>
            <div className={classes.item}>
            <div style={{marginBottom: 3 , marginTop: '-10px' }}>
            <label  for="NewsType">News Type: </label>
            <select name="NewsType"  onChange={event=>setNewsType(event.target.value)}>
                <option value="Missing Person">Missing Person</option>
                <option value="Missing Vehicle">Missing Vehicle</option>
                <option value="Wanted Criminals">Wanted Criminals</option>
                <option value="News">other News</option>
            </select>
            
            </div>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                label="Description"
                onChange={event=>setDescription(event.target.value)}
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{display: 'flex', flexdirection: 'row' }}>
            <div>
                    <label htmlFor="contained-button-file">
                      <Input accept="image/*" id="contained-button-file" multiple type="file" style={{width:"130%"}} />
                    </label>
                 
            </div>
            <div>
              <Button   variant="contained" color="secondary" style={{fontSize: "18px",marginLeft:"135px" , marginTop:"8px"}}>
                        Upload
              </Button>
            </div>
            </div>
           
            <div style={{display: 'flex', flexdirection: 'row' }}>
             <div className={classes.item} style={{marginTop:"5px" , marginRight: "2px"}}>
               <TextField
                variant="outlined"
                id="standard-basic"
                label="Name (if any)"
                size="small"
                onChange={event=>setName(event.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item} style={{marginTop:"5px", marginRight: "2px"}}>
               <TextField
                variant="outlined"
                id="standard-basic"
                label="Age (if any)"
                size="small"
                onChange={event=>setAge(event.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item} style={{marginTop:"5px"}}>
               <TextField
               variant="outlined"
                id="standard-basic"
                label="Location (if any)"
                size="small"
                onChange={event=>setLocation(event.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            </div>

            <div style={{display: 'flex', flexdirection: 'row' }}>
             <div className={classes.item} style={{marginTop:"5px" , marginRight: "2px"}}>
               <TextField
                variant="outlined"
                id="standard-basic"
                label="Brand Name(if any)"
                size="small"
                onChange={event=>setBrandName(event.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item} style={{marginTop:"5px", marginRight: "2px"}}>
               <TextField
                variant="outlined"
                id="standard-basic"
                label="color (if any)"
                onChange={event=>setcolor(event.target.value)}
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item} style={{marginTop:"5px"}}>
               <TextField
               variant="outlined"
               onChange={event=>setCarModel(event.target.value)}
                id="standard-basic"
                label="Car Model(if any)"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            
            </div>
            <div style={{display: 'flex', flexdirection: 'row' }}>
            <div className={classes.item} >
               <TextField
               variant="outlined"
                id="standard-basic"
                label="Crime(if any)"
                size="small"
                onChange={event=>setCrime(event.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            
            <div className={classes.item} style={{marginTop:"2px" , marginLeft:"60px"}}>
              
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={handleSend}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
              <Button
               variant="contained"
                color="secondary"
                onClick={() => setOpen(false)}
                startIcon={<DeleteIcon />}
              >
                Cancel
              </Button>
            </div>
            </div>
          </form>
        </Container>
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
    </>
  );
};

export default Add;
