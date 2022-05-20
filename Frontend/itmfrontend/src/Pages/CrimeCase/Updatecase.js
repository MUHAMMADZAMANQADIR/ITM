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
import UpdateEvidence from "./UpdateEvidence"
import AddTestimony from "./AddTestimony"
import Genratereport from "./Generatereport"
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
import {IDConsumer} from "../Globelvariable/Globelvariable"
const steps = ['Update Evidence', 'Add Testimony','Generate report'];

 

const Updatecase = (props) => {
     
    const {Investeam, error } = useContext(investigationContext)
    const video=process.env.PUBLIC_URL + '/assets/No Money_ No Tension.mp4'
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [ReportType , setReportType]=useState("") 
    const [FinalRemarks , setFinalRemarks]=useState("") 
    const [closingdate , setclosingdate]=useState("")
    

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
  <IDConsumer>
    {({ ID,ReportType ,User , Caseid}) => ( 
    <>
    {console.log("ID---", ID, "ReportType---", ReportType , "USer-----", User)} {setReportType(ReportType)}
    <Typography style={{marginTop: "70px", marginLeft: "7px" ,fontSize: '2rem',}}>Update case 
         <span style={{fontSize: '1rem',}}> ID:{Caseid}</span>
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
              //ID MEAN CASES ID USER MEAN USER ID
              activeStep ==0 ? <UpdateEvidence ID={ID} ReportType={ReportType} User={User} investigationteam={Investeam._id}/>
            : activeStep ==1 ? <AddTestimony ID={ID} ReportType={ReportType} User={User} investigationteam={Investeam._id} />
            : <Genratereport   ID={ID} ReportType={ReportType} User={User} investigationteam={Investeam._id} />
            } 
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
               style={{marginLeft: 100 }}
                
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}
               style={{marginRight: 100}}
              >
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
    </>
    )}
    
  </IDConsumer>
        
    )
}



export default Updatecase



