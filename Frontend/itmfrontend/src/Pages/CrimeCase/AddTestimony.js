import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Report.css'
import Grid from '@mui/material/Grid';
 

 
const AddTestimony=()=>{
    const [inputList, setInputList] = useState([{ Name: "zaman", Bayan: "qadir" }]);

 
 
// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};
 
// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { Name: "", Bayan: "" }]);
};
const Addperson =(props)=>{
    return(
       <form  className='report__form'>
        <div>
            <label htmlFor="name"> Person Name <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text1"
                    name='name'
                    required
                    value={props.name}
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
                    value={props.bayan}
                      
                />
        </div>
        <div >          
              {inputList.length !== 1 && <Button variant="contained" color="primary" style={{ marginRight: "-15px" ,marginTop: "10px"}} onClick={() => handleRemoveClick(props.count)} >Remove Person</Button>}
              {inputList.length - 1 === props.count && <Button variant="contained" color="primary" style={{marginLeft: "20px" ,marginTop: "10px"}} onClick={handleAddClick} >Add Person</Button> }
            </div>
        </div>
       </form>
    )
}
return(
        <form className='report__form'>
            <div>
             <label htmlFor="description">Add detailed Description <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    minLength= "100"
                    maxLength='1000'   
                />
            </div>
        <div>
         
        <Grid item sm={7} xs={10}>
        {
            inputList.map((news ,count)=>{
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
            console.log(inputList)
        }    
            
        </Grid>
                
           
    </div>
      </form>
 )
} 
export default AddTestimony
