import React, { useState, useEffect , useRef,  useContext} from "react";
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
import MuiAlert from "@material-ui/lab/Alert";
 

 
const Genratereport=(props)=>{
      const {Investeam, error} = useContext(investigationContext)
      const [CaseID , setcaseID]=useState("") 
      const [repoterid , setRepoterid]=useState("") 
      const [reportType , setReportType]=useState("")
      const [finalRemarks, setfinalRemarks]=useState("") 
      const [Closingdate , setclosingdate]=useState("")
      const [Status, setstatus]=useState("");
      const [openAlert , setOpenAlert] = useState(false);
      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
        }
      useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
         setReportType(props.ReportType)
     })

     const handleupdat=()=>{
         console.log("Status" , Status)
         if(finalRemarks){
         console.log("--------------------------------------------")
         console.log(finalRemarks , Closingdate )
         console.log("Investeam - id" , Investeam._id)
            const FinalRemarks = finalRemarks 
            const caseID = CaseID 
            const closingdate =Closingdate
            const Repoterid= repoterid
            const ReportType= reportType
            const body =  { FinalRemarks, caseID , closingdate , Repoterid , ReportType}
            console.log("--------------------------body------------------")
            console.log(body);
            console.log("--------------------------------------------")
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
        else{
           alert("Plz Add Final Remarks");
        }

        if(Closingdate && Status){
            const status=Status
            const ReportType= reportType
            const caseID = CaseID 
            const body =  { status, caseID ,ReportType} 
            console.log("--------------------------body2------------------")
            console.log(body);
            console.log("--------------------------------------------")
            const config = {
                headers: {
                            'Content-Type':'application/json'
                }}
                let url = `http://localhost:5000/api/updatedReported/updatecase/${Investeam._id}`;
                axios.post(url,body,config)
                .then(function (response) {
                 console.log(response.data)   
                alert( "Case ID  ", CaseID  ,  "is Closed NOW");
                })
                    
        }
     }     
const handlefinalRemarksInput = (event) => {
        setfinalRemarks(event.target.value);
        console.log(finalRemarks)
};  
const handleclosingdateInput = (event) => {
        setclosingdate(event.target.value);
        console.log(Closingdate)
};
function handleSelectChange(event) {
            setstatus(event.target.value);
  }
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
                    onChange={event=>setfinalRemarks(event.target.value)}
                />
            </div>
         
        <div>
        <div>
           <label for="crimeType">closing Date:<span><AiFillStar className='report-icon'/></span> </label> 
           <input type="date" id="birthday" name="date" value={Closingdate}  onChange={event=>setclosingdate(event.target.value)} ></input>
        </div>
         <div>
            <label for="crimeType">Update Case Status: <span><AiFillStar className='report-icon'/></span> </label>
            <select name="crimeType" value={Status} onChange={handleSelectChange} required>
                <option value="In progress">In progress</option>
                <option value="Closed">Closed</option>
                <option value="Closed">Fake</option>
            </select>
        </div>
    </div>
    <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginTop : 20}} onClick={handleupdat} >Update</Button> 
    </form>
    
    </form>
 )
} 
export default Genratereport
