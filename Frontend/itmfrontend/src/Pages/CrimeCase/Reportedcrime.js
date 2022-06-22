import React, { useState, useEffect , useRef,  useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AiFillStar } from "react-icons/ai"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Image from 'material-ui-image'
import Imageevidencetemplate from './imageevidencetemplate'
import './Report.css'
import Grid from '@mui/material/Grid';
import caseinfo from './Casedb'
import axios from 'axios'
const steps = ['Reporter information', 'Crime Details', 'Attached Evidence' ,'Progress Report'];

 

const Report = (props) => {
  
  const [id , setid]=useState("");
  useEffect(() => {
    {
        setReportedtype(props.ReportType)
        console.log("-------Report id--------")
        props.ReportType =="FIR" ? callandsetvalueFIR()
        : props.ReportType =="CRIME REPORT" ? callandsetvalueCRIMEREPORT()
        : callandsetvalueMukhbir()
    } 
    
  }, []);

  const callandsetvalueFIR = () => {
        let url = `http://localhost:5000/api/fir/${props.ID}`;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setname(response.data.firstName.concat(" ").concat(response.data.lastName))
        setphone(response.data.phone)
        setpoliceStation(response.data.policeStation)
        setcity(response.data.city)
        setCNIC(response.data.CNIC)
        setcrimeType(response.data.crimeType)
        setdescription(response.data.description)
        setstatus(response.data.status)
        setsubject(response.data.subject)
        setzipPosta(response.data.zipPostalCode)
        setCaseid(response.data.caseID)
        setdate(response.data.ReportedDate)
        setFIRAgainst(response.data.firAgainst)
        setLocation(response.data.firAgainst.address)
        setimage(response.data.img)
        setvideo(response.data.video)
        setaudio(response.data.audio)
         
      })
      .catch((error) => console.log(error));
  };
  const callandsetvalueCRIMEREPORT = () => {
    let url = `http://localhost:5000/api/crimeReported/${props.ID}`;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setname(response.data.firstName.concat(" ").concat(response.data.lastName))
        setphone(response.data.phone)
        setpoliceStation(response.data.policeStation)
        setcity(response.data.city)
        setCNIC(response.data.CNIC)
        setcrimeType(response.data.crimeType)
        setdescription(response.data.description)
        setstatus(response.data.status)
        setsubject(response.data.subject)
        setzipPosta(response.data.zipPostalCode)
        setCaseid(response.data.caseID)
        setdate(response.data.ReportedDate)
        setLocation(response.data.location)
        setFIRAgainst(response.data.firAgainst)
        setimage(response.data.img)
        setvideo(response.data.video)
        setaudio(response.data.audio)
      })
      .catch((error) => console.log(error));
  };
  const callandsetvalueMukhbir = () => {
    let url = `http://localhost:5000/api/mukhbir/${props.ID}`;
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setpoliceStation(response.data.policeStation)
        setcity(response.data.city)
        setcrimeType(response.data.crimeType)
        setdescription(response.data.description)
        setstatus(response.data.status)
        setsubject(response.data.subject)
        setzipPosta(response.data.zipPostalCode)
        setCaseid(response.data.caseID)
        setdate(response.data.ReportedDate)
        setLocation(response.data.location)
        setimage(response.data.img)
        setvideo(response.data.video)
        setaudio(response.data.audio)
      })
      .catch((error) => console.log(error));
  };
     
    const Video=process.env.PUBLIC_URL + '/assets/not attached video.mp4'
    const Image1= require( "../../image Not Attached.png");
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [Reportedtype, setReportedtype]=useState("");
    const [name, setname]=useState("Anonymous");
    const [phone, setphone]=useState("Anonymous");
    const [CNIC, setCNIC]=useState("Anonymous");
    const [city, setcity]=useState("Anonymous");
    const [policeStation, setpoliceStation]=useState("");
    const [Location, setLocation]=useState("Anonymous");
    const [crimeType, setcrimeType]=useState("");
    const [date, setdate]=useState("");
    const [audio, setaudio]=useState("Not Attached");
    const [Vid, setvideo]=useState('Not Attached');
    const [image, setimage]=useState("Not Attached");
    const [description, setdescription]=useState("");
    const [status, setstatus]=useState("");
    const [subject, setsubject]=useState("");
    const [zipPosta, setzipPosta]=useState("");
    const [Caseid, setCaseid]=useState("");
    const [FIRAgainst, setFIRAgainst] = useState({
            firstName: "",
            lastName: "",
            gender: "",
            address: "",
            state: "",
            province: "",
    })
    const totalSteps = () => {
      return steps.length;
    };
    const isLastStep = () => {
    return activeStep === totalSteps() - 1;
    };
    const handleNext = () => {
        const newActiveStep =isLastStep()  
        ? 
          activeStep 
        : activeStep + 1;
        setActiveStep(newActiveStep);
        };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
const FIR=()=>{
  return(
      <>
            <div >
             <label htmlFor="FIRAgainst"> FIR Against <span><AiFillStar className='report-icon'/></span> </label>
            </div>
            <div>
             <label htmlFor="subject">Name: <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='FIRAgainst'
                    value={FIRAgainst.firstName.concat(" ").concat(FIRAgainst.lastName)}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="subject">Address: <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='FIRAgainst'
                    value={FIRAgainst.address.concat(" ").concat(FIRAgainst.state).concat(" ").concat(FIRAgainst.province)}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="subject">Subject <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='FIRAgainst'
                    value={subject}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="zipPosta">zip Posta <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='zipPosta'
                    value={zipPosta}
                    readonly
                    disabled
                />
            </div>
            </>
  )
}    
const Reporterinformation=()=>{
   return(
      <form className='report__form'>
             
            <div>
            <label htmlFor="name">Reporter Name <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='name'
                disabled
                readonly
                value={name}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter CNIC<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Cnic'
                disabled
                readonly
                value={CNIC}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter City<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='City'
                disabled
                readonly
                value={city}
               />
            </div>
             <div>
            <label htmlFor="name">Date of Reported Crime<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Cnic'
                disabled
                readonly
                value={date}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter phone No<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Phone NO'
                disabled
                readonly
                value={phone}
               />
            </div>
      </form>

   )
}
const CrimeDetails=()=>{
   return(

       
      <form className='report__form'>
        {Reportedtype == "FIR" ? FIR(): ""}
        <div>
           <label htmlFor="ID">Case ID <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='name'
                disabled
                readonly
                value={Caseid}
            />
        </div>
             <div>
            <label htmlFor="name">Crime Type<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='CrimeType'
                disabled
                readonly
                value={crimeType}
               />
            </div>
             <div>
            <label htmlFor="name">Location<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Location'
                disabled
                readonly
                value={Location}
               />
            </div>
            <div>
             <label htmlFor="policeStation">Reported Police Station <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text1"
                    name='policeStation'
                    value={policeStation}
                    readonly
                    disabled
                />
            </div> 
            <div>
             <label htmlFor="description"> Description <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    disabled
                    minLength= "100"
                    maxLength='1000'
                    readonly
                    value={description} 
                />
            </div>
            
      </form>
      

   )
}

const attachedEvidence=()=>{
  return(
    <>
    <Typography 
      variant="h5"
      align='center'
      style={{
          color: '#00ff55',
          backgroundColor : 'black',
          marginTop: '15px',
          marginLeft: '100px',
          marginRight: '100px',
      }}
    >
     Image Type Evidence
     <span style={{fontSize: '1rem',}}> (If any)</span>
    </Typography>
     
    <form className='report__form'>
               
                <Grid sm={6} xs={12}>
                <img src={image ||Image1} alt="Flowers in Chania" width="460" height="345"></img>
                {/* <Imageevidencetemplate style={{marginRight: '10px' }}
                        image={image ||Image1}>
                </Imageevidencetemplate> */}
                </Grid>
            
       
      </form>
      <Typography 
      variant="h5"
      align='center'
      style={{
          color: '#00ff55',
          backgroundColor : 'black',
          marginTop: '-50px',
          marginLeft: '100px',
          marginRight: '100px',
          marginBottom: '15px',
          
      }}
    >
     Video Type Evidence
     <span style={{fontSize: '1rem',}}> (If any)</span>
    </Typography>
    <form className='report__form'>
      <video width="500" height="240" controls>
            <source src={Vid || Video}  type="video/mp4"></source>
      </video>
       
    </form>
    <Typography 
      variant="h5"
      align='center'
      style={{
          color: '#00ff55',
          backgroundColor : 'black',
          marginTop: '-50px',
          marginLeft: '100px',
          marginRight: '100px',
          marginBottom: '15px',
          
      }}
    >
     AudioType Evidence
     <span style={{fontSize: '1rem',}}> (If any)</span>
    </Typography>
    <form className='report__form'>
      <audio controls>
          
          <source src={audio}  type="audio/mp3"></source>
          
      </audio> 
    </form>
    </>
  )
}
const ProgressReport=()=>{
  return(
    <div style={{marginTop: '15px'}}>
       <form className='report__form'>
           <div>
             <label htmlFor="description">Updated Description:</label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    disabled
                    readonly
                    minLength= "100"
                    maxLength='1000'
                />
            </div>
            <div>
             <label htmlFor="description">Bayan of Different Person:</label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    disabled
                    readonly
                    minLength= "100"
                    maxLength='1000'
                />
            </div>
            <div>
            <label htmlFor="name">Case Status:</label>
              <input
                type="text1"
                name='Status'
                disabled
                readonly
                value={status}
               />
            </div>
       </form>
    </div>
  )
}

    return (
        <>
          
        <Typography style={{marginTop: "70px", marginLeft: "7px" ,fontSize: '2rem',}}>Reported Crime 
         <span style={{fontSize: '1rem',}}> case ID: {Caseid}</span>
        </Typography>

        <Box sx={{ width: '100%' }}>
         <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        { (
        <React.Fragment>
            {
              activeStep ==0 ? Reporterinformation()
            : activeStep ==1 ? CrimeDetails()
            : activeStep ==2 ? attachedEvidence() : ProgressReport()
            } 
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
        </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep]  )
                }
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
      <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginBottom : 10}}   
             component={Link} to='/updatecase'>Update</Button> 
      </form>
        </>
        
    )
}



export default Report

