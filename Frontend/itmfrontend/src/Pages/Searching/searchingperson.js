import React, { useState, useEffect,  useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography ,Button} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import FormData from 'form-data'
import Criminalinformation from "./criminalprofile"

var axios = require('axios');
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
  const [callprofile , setcallprofile]=useState(false)
  const [message, setMessage] = useState("");
  const [sname ,setsname]=useState("")
  const [filedata , setfiledata]=useState(null);
  const [scnic, setscnic]=useState();
  const [name, setname] = useState("");
  const [cnic, setcnic] = useState(0);
  const [address, setaddress] = useState("");
  const [description, setdescription] = useState("");
  const [casetype, setcasetype] = useState("");
  let file = new FormData();
  

  const baseURL = "http://localhost:8000";
  const getinfousingcnic = async () => {
  axios.get(`${baseURL}/${scnic}`)
  .then(function (response) {
    const cdata= response.data
    setname(cdata.name)
    setcnic(cdata.Cnic)
    setaddress(cdata.Location)
    setdescription(cdata.Description)
    setcasetype(cdata.CaseType)
    setcallprofile(true)
  })
  .catch(function (error) {
    console.log(error);
  });  
  };
  const getinfousingimage = async () => {
  console.log(filedata)
  setcallprofile(true)
  await axios.post(`${baseURL}/image`,{
  headers: {
     'content-type': 'multipart/form-data', 
  }, file},
  )
  .then(function (response) {
    const cdata= response.data
    setname(cdata.name)
    setcnic(cdata.Cnic)
    setaddress(cdata.Location)
    setdescription(cdata.Description)
    setcasetype(cdata.CaseType)
  })
  .catch(function (error) {
    console.log(error);
  });  
  };
  const getinfousingname = async () => {
  axios.get(`${baseURL}/${sname}`)
  .then(function (response) {
    const cdata= response.data
    setname(cdata.name)
    setcnic(cdata.Cnic)
    setaddress(cdata.Location)
    setdescription(cdata.Description)
    setcasetype(cdata.CaseType)
    setcallprofile(true)
  })
  .catch(function (error) {
    console.log(error);
  });  
  };
  
  const Crimnalprofile=()=>{
    console.log({scnic})
    return(
    
      <Criminalinformation 
         name={name}
         cnic={cnic}
         address={address}
         description={description}
         casetype={casetype}
      />
    )
  }
  const handleCnicInputChange = event => {
        setscnic(event.target.value);
        
  };
  const handleNameInputChange = event => {
        setsname(event.target.value);
  };
  const handleImageInputChange = event => {
        
        setfiledata(event.target.files[0]);
        file.append("file", event.target.files[0]);
         
  };
  const setscreencnic=()=>{
        settype("CNIC") 
        setcallprofile(false)
  }
  const setscreenname=()=>{
        settype("Name") 
        setcallprofile(false)
  }
  const setscreenimage=()=>{
        settype("Image") 
        setcallprofile(false)
  }

  const Serachtype =()=>{
    console.log(type);
  if(type ==="CNIC"){
    return(
      <>
      <Box  display= "flex" flexDirection="column">
      <TextField label="Enter CNIC" type="search"  value={scnic} onChange= {handleCnicInputChange}></TextField>
      
      <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
          }}
          onClick={()=>getinfousingcnic()}
          >Search</Button>
      </Box>
      </>
    );
  }
  if (type==="Name") {
    return(
     <>
      <Box  display= "flex" flexDirection="column">
      <TextField  label="Enter Name" type="search" value={sname} onChange= {handleNameInputChange } ></TextField>
      <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
        }}
        onClick={()=>getinfousingname()}
        >Search</Button>
      </Box>
      </>
    );
  } else {
    return(
    <>
    <input type="file"  accept="image/*"   onChange={handleImageInputChange} />
     <Button 
          variant="contained" 
          color="primary"
          style={{marginTop:"5px" ,     
          maxWidth: "70px",
          maxHeight: "70px",
          align: "center",
        }}
        onClick={()=>getinfousingimage()}
        >Upload</Button>
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
      <Button  className={classes.button} onClick={setscreencnic} >
         CNIC
      </Button>
      <Button  className={classes.button} onClick={setscreenname} >
         Name
      </Button>
      <Button  className={classes.button} onClick={setscreenimage} >
         Image
      </Button>
    </ul>
  </div>
  <Box class="card-body">
    <Serachtype/>
  </Box>
</div>
<div style={{marginTop: "30px"}}>
    {
      callprofile ? Crimnalprofile(): " "
    }
</div>
</div>
  );
}