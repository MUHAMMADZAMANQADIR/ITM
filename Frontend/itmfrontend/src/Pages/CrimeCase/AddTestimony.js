import React, { useState, useEffect , useRef,  useContext} from "react";
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
import TextField from '@mui/material/TextField';


 
const AddTestimony=(props)=>{
    const [bayans, setBayans] = useState([{ Name: " ", Bayan: " " }]);
    const {Investeam, error} = useContext(investigationContext)
    //const [Bayans , setBayans]=useState([{}]) 
    
    const [DetailedDescription , setdetailedDescription]=useState("") 
    const [CaseID , setcaseID]=useState("") 
    const [repoterid , setRepoterid]=useState("") 
    const [reportType , setReportType]=useState("")
    const [Nameofperson , setNameofperson]=useState("") 
    const [Bayanofperson , setBayanofperson]=useState("") 
    useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
         setReportType(props.ReportType)
     })
     
     const handleupdat=()=>{
         console.log("Investeam - id" , Investeam._id)
         if(bayans.length>1){
            const Bayans = bayans.slice(1, bayans.lenght);            
            const detailedDescription =DetailedDescription
            console.log(Bayans)
            const caseID = CaseID 
            console.log(0)
            const Repoterid= repoterid
            console.log(0.1)
            const ReportType= reportType
            console.log(1)
            const body = JSON.stringify({ Bayans, caseID , detailedDescription , Repoterid , ReportType})
             
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
       
     }}
      
   
 
// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...bayans];
  list.splice(index, 1);
  setBayans(list);
};
 
// handle click event of the Add button
const handleAddClick = () => {
  setBayans([...bayans, { Name: Nameofperson , Bayan: Bayanofperson }]);
  console.log("Now" , bayans)
};
const Addperson =(props)=>{

    const handleName = e => {
        setNameofperson(e.target.value);
        console.log(Nameofperson)
    };
    const handleBayan = event => {
        setBayanofperson(event.target.value);
        console.log(Bayanofperson)
    };
    return(
       <form  className='report__form'>
        <div>
            <label htmlFor="name"> Person Name <span><AiFillStar className='report-icon'/></span> </label>
            
                <input
                    type="text1"
                    name='name'
                    required
                    value={Nameofperson}
                    onChange={(e) => handleName(e)}
                />
        </div>
        <div>
        <div>
            <label htmlFor="description">Bayan of Person<span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="4" cols="4"
                    minLength= "50"
                    maxLength='1000'
                    value={Bayanofperson}
                    onChange={(e) =>  handleBayan(e)}
                      
                />
                
        </div>
        <div >          
              {bayans.length !== 1 && <Button variant="contained" color="primary" style={{ marginRight: "-15px" ,marginTop: "10px"}} onClick={() => handleRemoveClick(props.count)} >Remove Person</Button>}
              {bayans.length - 1 === props.count && <Button variant="contained" color="primary" style={{marginLeft: "20px" ,marginTop: "10px"}} onClick={handleAddClick} >Add Person</Button> }
            </div>
        </div>
       </form>
    )
}
 
const handledetailedDescriptionInput = event => {
        setdetailedDescription(event.target.value);
        console.log(DetailedDescription)
};
return(
        <form className='report__form'>
            <div>
             <label htmlFor="description">Add detailed Description <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    minLength= "100"
                    maxLength='1000'  
                    onChange={handledetailedDescriptionInput} 
                />
            </div>
        <div>
         
        <Grid item sm={7} xs={10}>
        {
            bayans.map((news ,count)=>{
              return(
                <Grid key={news.key} sm={6} xs={12}>
                      <Addperson 
                        name={news.Name}
                        bayan={news.Bayan}
                        count={count}
                      ></Addperson>
                </Grid>
              )
            })
        
        },
        {
            console.log(bayans)
        }    
            
        </Grid>
        <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginTop : 20}} onClick={handleupdat()}>Update Report</Button> 
      </form>     
           
    </div>
      </form>
 )
} 
export default AddTestimony
