import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography ,Button} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
 

const useStyles = makeStyles((theme) => ({
  button:{
      size:"large",
      marginTop: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      marginbottom:"-5px"

  }
}));
 


export default function Searchingperson() {

  const [type , settype]=useState("CNIC")

  const Serachtype =()=>{
    console.log(type);
  if(type ==="CNIC"){
    return(
      <>
      <Box  display= "flex" flexDirection="column">
      <TextField id="standard-search" label="Enter CNIC" type="search"></TextField>
      
      <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
          }}>Search</Button>
      </Box>
      </>
    );
  }
  if (type==="Name") {
    return(
     <>
      <Box  display= "flex" flexDirection="column">
      <TextField id="standard-search" label="Enter Name" type="search"></TextField>
      <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
        }}>Search</Button>
      </Box>
      </>
    );
  } else {
    return(
    <>
    <input type="file" multiple accept="image/*" />
     <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
        }}>Upload</Button>
    </>
    );
}
}
  const classes = useStyles();
  return (
  <div style={{marginTop:"70px" , marginLeft: "10px"}}>
  
  <Typography variant="h5" 
  align="center"
  >Search using</Typography>
  <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <Button  className={classes.button} onClick={()=> settype("CNIC")} >
         CNIC
      </Button>
      <Button  className={classes.button} onClick={()=> settype("Name")} >
         Name
      </Button>
      <Button  className={classes.button} onClick={()=> settype("Image")} >
         Image
      </Button>
    </ul>
  </div>
  <Box class="card-body">
    <Serachtype/>
  </Box>
</div>
</div>
  );
}