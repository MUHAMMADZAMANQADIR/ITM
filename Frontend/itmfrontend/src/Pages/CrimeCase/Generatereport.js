import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import Grid from '@mui/material/Grid';
 

 
const Genratereport=()=>{
     
return(
        <form className='report__form'>
        <div>
             <label htmlFor="description">Add Final Remarks <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    minLength= "100"
                    maxLength='1000'   
                />
            </div>
        <div>
        <div>
           <label for="crimeType">closing Date:<span><AiFillStar className='report-icon'/></span> </label> 
           <input type="date" id="birthday" name="date"></input>
        </div>
         <div>
            <label for="crimeType">Update Case Status: <span><AiFillStar className='report-icon'/></span> </label>
            <select name="crimeType"  required>
                <option value="In progress">In progress</option>
                <option value="Closed">Closed</option>
            </select>
        </div>
         
          
    </div>
      </form>
 )
} 
export default Genratereport
