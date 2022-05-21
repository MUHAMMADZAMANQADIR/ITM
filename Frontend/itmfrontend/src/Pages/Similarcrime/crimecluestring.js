import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography ,Button} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { width } from "@mui/material/node_modules/@mui/system";
import Stack from '@mui/material/Stack';
import { Grid} from "@material-ui/core";
import Getsimilarcase from "./getprofile"
var axios = require('axios');
const useStyles = makeStyles((theme) => ({
  button:{
      size:"large",
      marginTop: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      marginbottom:"-5px",
      align : "Right"

  }
}));
 
export default function CrimeCluestring() {
  
  let cdata
  const classes = useStyles();
  const [name, setname] = useState("");
  const [cnic, setcnic] = useState(0);
  const [address, setaddress] = useState("");
  const [description, setdescription] = useState("");
  const [casetype, setcasetype] = useState("");
  const [Similarcases , setSimilarcases]=useState([])
  const [inputtext , setinputtext]=useState()
  const [open , setopen]=useState("false")
  const baseURL = "http://localhost:8000";
  

  
  const getSimilarcases = async () => {

  axios.get(`${baseURL}/similarcases/${inputtext}`).then(function (response) {
  cdata =response.data
  console.log("JSON -1 ",cdata)
  setSimilarcases(cdata)
  console.log("After Set",Similarcases)})
  .catch(function (error) {
    console.log(error);
  });  
  };
  const handleInputChange = event => {
        setinputtext(event.target.value);
  };
  const Showerror =()=>{
    return(
    <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>

    </Stack>
  )}
  const Callprofile = ()=>{ 
    console.log("in")
  return(  
    
    Similarcases.map((news)=>{
      return(
          <Grid key={news.id} sm={6} xs={12}>
            <Getsimilarcase  style={{marginRight: '10px' }}
              name={news.name}
              Cnic={news.Cnic}
              Location={news.Location}
              CaseType={news.CaseType}
              Description={news.Description}
              ></Getsimilarcase> 
            </Grid>
      )
    })         
)}
   
  return (
  <div style={{marginTop:"70px" , marginLeft: "10px"}}>
  
  <Typography variant="h5" 
  align="center"
  >Prediction using</Typography>
  <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <Button  className={classes.button}  >
          Crime Description
      </Button>
       
    </ul>
  </div>
  <Box class="card-body">
      <div>
        <label >Enter Description </label>
          <TextField
            variant="outlined"
            multiline
            rows={7}
            maxRows={10}
            style={{marginBottom :'10px', marginTop: "5px" , width: "100%" }}
            value={inputtext}
            onChange={handleInputChange}
          />
        </div>
        <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
          
        }}
        onClick={getSimilarcases}
        >Upload</Button>
  </Box>
</div>
  {Similarcases.length>=0  ?<Callprofile/> :<Showerror/>}

</div>
);
}