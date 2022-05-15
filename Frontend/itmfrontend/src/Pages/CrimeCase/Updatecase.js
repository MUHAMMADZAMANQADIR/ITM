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
import UpdateEvidence from "./UpdateEvidence"
import AddTestimony from "./AddTestimony"
import Genratereport from "./Generatereport"
const steps = ['Update Evidence', 'Add Testimony','Generate report'];

 

const Updatecase = () => {
     
    const video=process.env.PUBLIC_URL + '/assets/No Money_ No Tension.mp4'
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
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
 
 
return (
    <>
          
    <Typography style={{marginTop: "70px", marginLeft: "7px" ,fontSize: '2rem',}}>Update case 
         <span style={{fontSize: '1rem',}}> ID: (124-toba-c96)</span>
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
              activeStep ==0 ? <UpdateEvidence/>
            : activeStep ==1 ? <AddTestimony/>: <Genratereport/>
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



export default Updatecase



