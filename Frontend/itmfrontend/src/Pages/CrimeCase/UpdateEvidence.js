import React, { useState, useEffect , useRef,  useContext} from "react";
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
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
import axios from 'axios'
import FormData from 'form-data'
const Input = styled('input')({
  display: 'none',
});
const  UpdateEvidence=(props)=>{
    const [openImage, setopenImage] = useState(false);
    const [openvideo, setopenvideo] = useState(false);
    const [CaseID , setcaseID]=useState("") 
    const [repoterid , setRepoterid]=useState("") 
    const [reportType , setReportType]=useState("")
    const {Investeam, error} = useContext(investigationContext)
    const [image, setImage] = useState({ preview: '', data: '' })
    useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
         setReportType(props.ReportType)
     })
 
const handleupdat=async ()=>{
    console.log("Now in updateEvidence");
    let formData = new FormData()
    const caseID = CaseID 
    const Repoterid= repoterid
    const ReportType= reportType
    const id=Investeam._id
    formData.append('Files', image.data)
    console.log("oooo" , formData)
  
    const body =JSON.stringify( {formData , caseID , Repoterid , ReportType})
    let res=await fetch('http://localhost:5000/api/updatedReported/updatedReport/?'+id, {
    method: 'POST',
    body: body,
    })

  let cdata = await res.text();
  cdata=JSON.parse(cdata)
  console.log("HI I AM DATA",typeof(cdata) ,cdata)
  console.log("\n", "CNIC" , cdata.Cnic)

}
const handleImageInputChange = e => {
     const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    console.log(image)
         
  };

const Addimage = () => {
    return(
        <div style={{marginTop: "10px" , display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', marginTop: "10px"}}>
            <div >
            <label htmlFor="contained-button-file">
                <Input accept="image/*,video/*" id="contained-button-file" multiple type="file" onChange={handleImageInputChange} />
            </label>
             <>
                <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple files </Typography> 
             </>
            </div>
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}}
                onClick={handleupdat()}
                 >
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
                <Input accept="image/*,video/*" id="contained-button-file" multiple type="file" onChange={handleImageInputChange} />
            </label>
            <>
             <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple files </Typography> 
             </>
            </div>
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}} 
                >
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
         
        <div  style={{marginLeft: '300px'}}>
        <Button
            variant="contained"
            color="primary"
            style={{marginLeft: '10px' , marginTop: "15px" ,fontSize: 20 ,borderRadius: '12px'}}
            endIcon={<AddIcon />}
            onClick={()=>setopenvideo(true)}
        >  Add Image/Video  
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
    <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginTop : 20}} onClick={handleupdat()} >Update Report</Button> 
      </form>
    </>
 )
} 
export default UpdateEvidence




