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
import storage from "../../firebase";
import FormData from 'form-data'
import LinearProgress from '@mui/material/LinearProgress';
const Input = styled('input')({
  display: 'none',
});
const  UpdateEvidence=(props)=>{
    const [openImage, setopenImage] = useState(false);//to open image input
    const [openvideo, setopenvideo] = useState(false);//to open video input
    const [CaseID , setcaseID]=useState("") 
    const [repoterid , setRepoterid]=useState("") 
    const [reportType , setReportType]=useState("")
    const [Uploadedimg, setUploadedimg]=useState(0)//for button
    const [Uploadedvid, setUploadedvid]=useState(0)//for button
    const {Investeam, error} = useContext(investigationContext)
    const [image, setImage] = useState(null)
    const [vid, setvid] = useState(null)
    const [imageurl, setImageurl] = useState()//img url
    const [imagepro, setImagepro] = useState()//img progress
    const [vidurl, setvidurl] = useState()//video url
    const [vidpro, setvidpro] = useState()//video progress
    useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
         setReportType(props.ReportType)
     })
 
const handleupdat=async ()=>{
    console.log("Now in updateEvidence");
    if(imageurl || vidurl){
    const caseID = CaseID 
    const Repoterid= repoterid
    const ReportType= reportType
    const id=Investeam._id
    const VFiles=vidurl
    const IFiles=imageurl
    const body ={VFiles,IFiles,caseID,Repoterid,ReportType}
    console.log(body)
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
      }
      let url = `http://localhost:5000/api/updatedReported/updatedReport/${Investeam._id}`;
      axios
      .post(url,body,config)
      .then(function (response) {
              console.log("res", response.data)
       })
      .catch((error) => alert(error));
  }
  
}

const Uploadimge=(item)=>{
   item.forEach(element => {
       const uploadTask=storage.ref(`/item/${element.file.name}`).put(element);
       uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setImagepro(JSON.stringify(progress))
    setUploadedimg(1)
    console.log('Upload is ' + progress + '% done');
    
  }, 
  (error) => {
    alert(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        JSON.stringify(downloadURL)
        console.log('File available at', downloadURL);
        setImageurl({url: downloadURL})
        console.log('File available at image',  imageurl);
        

    });
  }
);
   });
}
const handleImageInputChange = e => {
        console.log("____________________1")
        Uploadimge([
        {file:e.target.files[0] , label: "img"},
        ])
        // setImage(e.target.files[0])
        // console.log(image)
        // setUploadedimg(1)
}

const handleVideoInputChange = e => {
        console.log("____________________1")
        Uploadvideo([
        {file:e.target.files[0] , label: "vid"},
        ])
        // setImage(e.target.files[0])
        // console.log(image)
        // setUploadedimg(1)
}

const Uploadvideo=(item)=>{
   item.forEach(element => {
       const uploadTask=storage.ref(`/item/${element.file.name}`).put(element);
       uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setvidpro(JSON.stringify(progress))
    setUploadedvid(1)
    console.log('Upload is ' + progress + '% done');
    
  }, 
  (error) => {
    alert(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        JSON.stringify(downloadURL)
        console.log('File available at', downloadURL);
        setvidurl({url: downloadURL})
        console.log('File available at video',  vidurl);
        

    });
  }
);
   });
}

const handleupload = e => {
    //  const img = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: e.target.files[0],
    // }
    // setImage(img)
    // console.log(image)
    if(Uploadedimg==1 || Uploadedvid==1 ){
    alert("File added successfully!")}
         
  };

const Addimage = () => {
    return(
        <div style={{marginTop: "10px" , display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', marginTop: "10px"}}>
            <div >
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file"   multiple type="file" onChange={handleImageInputChange} />
            </label>
             <>
                <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple Image files </Typography> 
             </>
            </div>
            
            {Uploadedimg==1?(
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}} onClick={handleupload} >
                        Upload
                </Button>
            </div>
            ): ""}
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
                <Input accept="video/*" id="contained-button-file" multiple type="file"  onChange={handleVideoInputChange} />
            </label>
            <>
             <Typography style={{opacity: '0.6', marginTop:'-10px'}}> You can selete multiple video files </Typography> 
             </>
            </div>
            {Uploadedvid==1?(
            <div htmlFor="contained-button-file">
                <Button variant="contained" color="primary" style={{fontSize: '20px' , marginLeft: "30px" ,marginTop: "10px"}} onClick={handleupload}>
                        Upload
                </Button>
            </div>
            ): ""}
        </div>
        </div>
    )
}

return(
    <>
    <div style={{display: 'flex' , justifyContent: "space-between"}}>
         
        <div  style={{marginRight: '30px'}}>
        <Button
            variant="contained"
            color="primary"
            style={{marginLeft: '10px' , marginTop: "15px" ,fontSize: 20 ,borderRadius: '12px'}}
            endIcon={<AddIcon />}
            onClick={()=>setopenvideo(true)}
        >  Add Video  
        </Button>
        </div>
        <div  style={{marginLeft: '30px'}}>
        <Button
            variant="contained"
            color="primary"
            style={{marginLeft: '10px' , marginTop: "15px" ,fontSize: 20 ,borderRadius: '12px'}}
            endIcon={<AddIcon />}
            onClick={()=>setopenImage(true)}
        >  Add Image  
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




