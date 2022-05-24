import React, { useState, useEffect , useRef,  useContext} from "react";
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
 

 
const Genratereport=(props)=>{
      const {Investeam, error} = useContext(investigationContext)
      const [CaseID , setcaseID]=useState("") 
      const [repoterid , setRepoterid]=useState("") 
      const [reportType , setReportType]=useState("")
      const [finalRemarks, setfinalRemarks]=useState("") 
      const [Closingdate , setclosingdate]=useState("")
      const [status, setstatus]=useState("");
      useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
         setReportType(props.ReportType)
     })

     const handleupdat=()=>{
         console.log("Investeam - id" , Investeam._id)
            const FinalRemarks = finalRemarks 
            const caseID = CaseID 
            const closingdate =Closingdate
            const Repoterid= repoterid
            const ReportType= reportType
            const body = JSON.stringify( { FinalRemarks, caseID , closingdate , Repoterid , ReportType})
            console.log(body);
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            let url = `http://localhost:5000/api/updatedReported/updatedReport/${Investeam._id}`;
            axios
            .post(url,body,config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch((error) => console.log(error));
       
     }     
const handlefinalRemarksInput = event => {
        setfinalRemarks(event.target.value);
        console.log(finalRemarks)
};  
const handleclosingdateInput = event => {
        setclosingdate(event.target.value);
        console.log(Closingdate)
};
return(
        <form className='report__form'>
        <div>
             <label htmlFor="description">Add Final Remarks <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    minLength= "100"
                    maxLength='1000'   
                    value={finalRemarks}
                    onChange={handlefinalRemarksInput}
                />
            </div>
        <div>
        <div>
           <label for="crimeType">closing Date:<span><AiFillStar className='report-icon'/></span> </label> 
           <input type="date" id="birthday" name="date" value={Closingdate}  onChange={handleclosingdateInput} ></input>
        </div>
         <div>
            <label for="crimeType">Update Case Status: <span><AiFillStar className='report-icon'/></span> </label>
            <select name="crimeType" onChange={event=>setstatus(event.target.value)} required>
                <option value="In progress">In progress</option>
                <option value="Closed">Closed</option>
            </select>
        </div>
    </div>
    <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginTop : 20}} onClick={handleupdat()} >Update</Button> 
      </form>
    </form>
 )
} 
export default Genratereport
