import React, { useState } from 'react'
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
const steps = ['Reporter information', 'Crime Details', 'Attached Evidence' ,'Progress Report'];

 

const Report = () => {
     
    const video=process.env.PUBLIC_URL + '/assets/No Money_ No Tension.mp4'
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [Reportedtype, setReportedtype]=useState("FIR")
    const [values, setValues] = useState({
        Caseid: '',
        name: '',
        phone: '',
        CNIC: '',
        city: '',
        policeStation: '',
        Location:'',
        crimeType: '',
        date: '',
        audio: '',
        video: '',
        image: '',
        description: '',
        status: '',
        FIRAgainst:{  
        firstName: "",
            lastName: "",
            gender: "",
            address: "",
            state: "",
            province: ""},
        subject:'',
        zipPosta:'',
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
                    value={values.FIRAgainst.firstName .concat(values.FIRAgainst.lastName)}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="subject">Address: <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='FIRAgainst'
                    value={values.FIRAgainst.address .concat(values.FIRAgainst.state).concat(values.FIRAgainst.province)}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="subject">Subject <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='FIRAgainst'
                    value={values.subject}
                    readonly
                    disabled
                />
            </div>
            <div>
             <label htmlFor="zipPosta">zip Posta <span><AiFillStar className='report-icon'/></span> </label>
               <input
                    type="text1"
                    name='zipPosta'
                    value={values.zipPosta}
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
            <div style={{width: 200, height: 200, borderRadius: 4, marginLeft:150 , marginTop:7 , marginBottom:5}} >
              <Image   src="http://loremflickr.com/300/200" />

            </div>
            <div>
            <label htmlFor="name">Reporter Name <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='name'
                disabled
                readonly
                value={values.name}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter CNIC<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Cnic'
                disabled
                readonly
                value={values.CNIC}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter City<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='City'
                disabled
                readonly
                value={values.city}
               />
            </div>
             <div>
            <label htmlFor="name">Date of Reported Crime<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Cnic'
                disabled
                readonly
                value={values.CNIC}
               />
            </div>
             <div>
            <label htmlFor="name">Reporter phone No<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Phone NO'
                disabled
                readonly
                value={values.phone}
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
                value={values.Caseid}
            />
        </div>
             <div>
            <label htmlFor="name">Crime Type<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='CrimeType'
                disabled
                readonly
                value={values.crimeType}
               />
            </div>
             <div>
            <label htmlFor="name">Location<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Location'
                disabled
                readonly
                value={values.Location}
               />
            </div>
            <div>
             <label htmlFor="policeStation">Reported Police Station <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text1"
                    name='policeStation'
                    value={values.policeStation}
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
                    value={values.description} 
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
      {
        caseinfo.map((news)=>{
              return(
                <Grid key={news.key} sm={6} xs={12}>
                <Imageevidencetemplate style={{marginRight: '10px' }}
                        image={news.Image1}>
                </Imageevidencetemplate>
                </Grid>
              )
        })    
      } 
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
            <source src={video}  type="video/mp4"></source>
      </video>
       
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
                value={values.crimeType}
               />
            </div>
       </form>
    </div>
  )
}

    return (
        <>
          
        <Typography style={{marginTop: "70px", marginLeft: "7px" ,fontSize: '2rem',}}>Reported Crime 
         <span style={{fontSize: '1rem',}}> case ID: (124-toba-c96)</span>
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

