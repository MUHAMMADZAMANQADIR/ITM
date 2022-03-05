import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import './Report.css'

const Updatecase = () => {

    const [values, setValues] = useState({
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
        Updates: ''
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
            Updates: ''
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
          <h1>Update  Case detail</h1>
          <div className='report__heading'><AiFillStar className='report-icon'/><span>Indicates the required fields</span> </div>
            <div  >
                <label for="image">Case ID:</label>
                <input
                type="text"
                name='name'
                disabled
                value={values.Caseid}
                onChange={onChangeHandler}
                />

            </div>
            <div>
              <label htmlFor="phone"> Phone <span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text"
                name='phone'
                required
                value={values.phone}
                onChange={onChangeHandler}
                />
            </div>
            

            <div>
             <label htmlFor="city"> City <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text"
                    name='city'
                    value={values.city}
                    required
                    onChange={onChangeHandler}
                />
            </div>
            <div>
             <label htmlFor="policeStation"> Police Station <span><AiFillStar className='report-icon'/></span> </label>
                <input
                    type="text"
                    name='policeStation'
                    value={values.policeStation}
                    required
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
                    required
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <label for="image">Upload image:</label>
                <input 
                    type="file" 
                    name="image"
                    accept="image/*"  
                    value={values.image}
                    onChange={(e) => onChangeFileHandler(e)}
                    class="custom-file-input"
                    /> 
            </div>
 
            <div>
                <label for="image">Upload video:</label>
                <input 
                    type="file" 
                    name="video"
                    accept="video/*"  
                    value={values.video}
                    onChange={(e) => onChangeFileHandler(e)}
                    class="custom-file-input"
                    /> 
            </div>
            <div>
             <label htmlFor="description"> Description <span><AiFillStar className='report-icon'/></span> </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    name='details'
                    required
                    minLength= "100"
                    maxLength='1000'
                    onChange={onChangeHandler}
                />
            </div>
            <div>
             <label htmlFor="update">Add Updates  </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    name='details'
             
                    minLength= "100"
                    maxLength='1000'
                    placeholder="Add the detail of the crime in few paragraph"
                    onChange={onChangeHandler}
                />
            </div>
            <div>
            <label for="crimeType">Update Case Status: <span><AiFillStar className='report-icon'/></span> </label>
            <select name="crimeType" value={values.crimeType} required onChange={onChangeHandler}>
                <option value="In progress">In progress</option>
                <option value="Closed">Closed</option>
            </select>
            </div>
            <button type='submit' className='report__btn' >Submit</button>   
          </form>
        </>
        
    )
}

export default Updatecase

