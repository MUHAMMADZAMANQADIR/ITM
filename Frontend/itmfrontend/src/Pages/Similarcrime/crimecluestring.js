import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography ,Button} from '@material-ui/core';
import { width } from "@mui/material/node_modules/@mui/system";
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
  
  const classes = useStyles();
  const [name, setname] = useState("");
  const [cnic, setcnic] = useState(0);
  const [address, setaddress] = useState("");
  const [description, setdescription] = useState("");
  const [casetype, setcasetype] = useState("");
  const [inputtext , setinputtext]=useState()
  const baseURL = "http://localhost:8000";
  
  const getSimilarcases = async () => {
  axios.get(`${baseURL}/similarcases/${inputtext}`)
  .then(function (response) {
    const cdata= response.data
    console.log(cdata)
  })
  .catch(function (error) {
    console.log(error);
  });  
  };
  const handleInputChange = event => {
        setinputtext(event.target.value);
  };
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
        onClick={getSimilarcases()}
        >Upload</Button>
  </Box>
</div>
</div>
  );
}