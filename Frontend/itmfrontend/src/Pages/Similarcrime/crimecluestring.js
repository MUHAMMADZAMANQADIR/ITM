import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography ,Button} from '@material-ui/core';

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
            <textarea
                name="details"
                rows="7" cols="10"
                name='details'
                minLength= "100"
                maxLength='5000'
            />
        </div>
        <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
        }}>Upload</Button>
  </Box>
</div>
</div>
  );
}