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
    const [Bayans, setBayans] = useState([{ Name: " ", Bayan: " " }]);
    const {Investeam, error} = useContext(investigationContext)
    //const [Bayans , setBayans]=useState([{}]) 
    const [caseID , setcaseID]=useState("") 
    const [detailedDescription , setdetailedDescription]=useState("") 
    const [Repoterid , setRepoterid]=useState("") 
    const [Nameofperson , setNameofperson]=useState("") 
    const [Bayanofperson , setBayanofperson]=useState("") 
    useEffect(() => {
         setcaseID(props.ID)
         setRepoterid(props.User)
     })
    const handleupdat =() => {
        console.log("UpdateEvidence" ,props)
        props.ReportType =="FIR" ? updatedFIR()
        : props.ReportType =="CRIME REPORT" ? updatedcrimeReported()
        : updatedmukhbir()
    }

     const updatedFIR=()=>{
            console.log("Investeam - id" , Investeam._id)
            const Bayans = Bayans 
            const caseID = caseID 
            const detailedDescription =detailedDescription
            const Repoterid= Repoterid
            const body = JSON.stringify( { Bayans, caseID , detailedDescription , Repoterid})
            console.log(body);
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            let url = `http://localhost:5000/api/updatedReported/updatedFIR/${Investeam._id}`;
            axios
            .post(url,body,config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch((error) => console.log(error));

     }
     const updatedmukhbir=()=>{
         console.log("Investeam - id" , Investeam._id)
            const Bayans = Bayans 
            const caseID = caseID 
            const detailedDescription =detailedDescription
            const Repoterid= Repoterid
            const body = JSON.stringify( { Bayans, caseID , detailedDescription , Repoterid})
            console.log(body);
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            let url = `http://localhost:5000/api/updatedReported/updatedmukhbir/${Investeam._id}`;
            axios
            .post(url,body,config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch((error) => console.log(error));
       
     }
     const updatedcrimeReported=()=>{
           console.log("Investeam - id" , Investeam._id)
            const Bayans = Bayans 
            const caseID = caseID 
            const detailedDescription =detailedDescription
            const Repoterid= Repoterid
            const body = JSON.stringify( { Bayans, caseID , detailedDescription , Repoterid})
            console.log(body);
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            let url = `http://localhost:5000/api/updatedReported/updatedcrimeReported/${Investeam._id}`;
            axios
            .post(url,body,config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch((error) => console.log(error));
       
     }
   
 
// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...Bayans];
  list.splice(index, 1);
  setBayans(list);
};
 
// handle click event of the Add button
const handleAddClick = () => {
  setBayans([...Bayans, { Name: "", Bayan: "" }]);
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
                    onChange={(e) => {setBayanofperson(e.target.value)}}
                      
                />
                
        </div>
        <div >          
              {Bayans.length !== 1 && <Button variant="contained" color="primary" style={{ marginRight: "-15px" ,marginTop: "10px"}} onClick={() => handleRemoveClick(props.count)} >Remove Person</Button>}
              {Bayans.length - 1 === props.count && <Button variant="contained" color="primary" style={{marginLeft: "20px" ,marginTop: "10px"}} onClick={handleAddClick} >Add Person</Button> }
            </div>
        </div>
       </form>
    )
}
 
const handledetailedDescriptionInput = event => {
        setdetailedDescription(event.target.value);
        console.log(detailedDescription)
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
            Bayans.map((news ,count)=>{
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
            console.log(Bayans)
        }    
            
        </Grid>
        <form className='report__form'>
            <Button style={{backgroundColor : "#4CAF50" , marginTop : 20}}>Update</Button> 
      </form>     
           
    </div>
      </form>
 )
} 
export default AddTestimony
