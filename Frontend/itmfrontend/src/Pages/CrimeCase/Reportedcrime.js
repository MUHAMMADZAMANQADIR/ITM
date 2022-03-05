import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Report.css'

const Report = () => {

    const [values, setValues] = useState({
        Caseid: '',
        name: '',
        phone: '',
        CNIC: '',
        city: '',
        policeStation: '',
        crimeType: '',
        date: '',
        audio: '',
        video: '',
        image: '',
        description: '',
        
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setValues({
            Caseid: '',
            name: '',
            phone: '',
            CNIC: '',
            city: '',
            policeStation: '',
            crimeType: '',
            date: '',
            image: '',
            description: '',
            
        })
        console.log('form submitted')
    }

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({
            ...values,
            [name] : value
        })
    }

    const onChangeFileHandler = (e) => {
        const name = e.target.name
        const file = e.target.files[0]
            setValues({
                ...values,
                [name] : file
            })
    }

    return (
        <>
          <form onSubmit={(e) => onSubmitHandler(e)} className='report__form'>
          <h1>Reported Crime</h1>
        
            <div  >
                <label for="image">Image as Evidence:</label>
               <CardMedia
                  component="img"
                  height="194"/>
                <label for="image">Case ID:</label>
                <input
                type="text"
                name='name'
                disabled
                value={values.name}
                onChange={onChangeHandler}
                />

            </div>
            <div>
              <label htmlFor="name"> Name Reporter  <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text"
                name='name'
                disabled
             
                value={values.name}
                onChange={onChangeHandler}
                />
            </div>
            <div>
              <label htmlFor="phone"> Phone of Repoter <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text"
                name='phone'
                disabled
            
                value={values.phone}
                onChange={onChangeHandler}
                />
            </div>
            <div>
              <label htmlFor="CNIC"> CNIC of Reporter  <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text"
                name='CNIC'
                disabled
                minLength='13'
                value={values.CNIC}
                onChange={onChangeHandler}
                />
            </div>

            <div>
             <label htmlFor="city"> City <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text"
                    name='city'
                    disabled
                    value={values.city}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
             <label htmlFor="policeStation"> Police Station <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text"
                    name='policeStation'
                    value={values.policeStation}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
            <label for="crimeType">Crime Type: <span><AiFillStar className='report-icon'/></span> </label>
            <select name="crimeType" value={values.crimeType} required onChange={onChangeHandler}>
                <option value="Murder">Murder</option>
                <option value="Rape">Rape</option>
                <option value="Kidnapping">Kidnapping</option>
                <option value="Robbery">Robbery</option>
                <option value="Other">other</option>
            </select>
            </div>
            <div>
             <label htmlFor="date"> Date <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="date"
                    name='date'
                    max="2021-12-1"
                    value={values.date}
                    onChange={onChangeHandler}
                />
            </div>
            
            
             
            <div>
             <label htmlFor="description"> Description <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    name='details'
                    disabled
                  
                    minLength= "100"
                    maxLength='1000'
                    onChange={onChangeHandler}
                />
            </div>
            <Button style={{backgroundColor : "#4CAF50" , marginBottom : 10}}   
             component={Link} to='/updatecase'>Update</Button> 
          </form>
        </>
        
    )
}



export default Report

