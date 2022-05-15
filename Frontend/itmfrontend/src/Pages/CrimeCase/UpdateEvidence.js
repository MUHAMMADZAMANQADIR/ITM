import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});
const  UpdateEvidence=()=>{
    const [openImage, setopenImage] = useState(false);
    const [openvideo, setopenvideo] = useState(false);
     

const Addimage = () => {
    return(
        <div style={{marginTop: "10px" , display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', marginTop: "10px"}}>
            <div >
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
            </label>
             <>
                <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple files </Typography> 
             </>
            </div>
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}} >
                        Upload
                </Button>
            </div>
        </div>
        </div>
    )
}

const Addvideo = () => {
    return(
        <div style={{marginTop: "10px" , display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', marginTop: "10px"}}>
            <div >
            <label htmlFor="contained-button-file">
                <Input accept="video/*"   id="contained-button-file" multiple type="file" />
            </label>
            <>
             <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple files </Typography> 
             </>
            </div>
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}} >
                        Upload
                </Button>
            </div>
        </div>
        </div>
    )
}

return(
    <>
    <div style={{display: 'flex' , justifyContent: "space-between"}}>
        <div>
        <Button
    
            variant="contained"
            color="primary"
            style={{marginLeft: '10px' , marginTop: "15px" , borderRadius: '12px'}}
            endIcon={<AddIcon />}
            onClick={() => setopenImage(true)}
            
        >  Add Image
        </Button>
          
        </div>
        <div>
        <Button
            variant="contained"
            color="primary"
            style={{marginLeft: '10px' , marginTop: "15px" ,borderRadius: '12px'}}
            endIcon={<AddIcon />}
            onClick={()=>setopenvideo(true)}
        >  Add Video
        </Button>
        </div>
    </div>
    <div >
       {
           openImage ? Addimage() :''
       }
       {
           openvideo ? Addvideo() :''
       }
    </div>
    </>
 )
} 
export default UpdateEvidence




