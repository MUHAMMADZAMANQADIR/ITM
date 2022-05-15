import React, { useRef } from 'react'
import { AiFillStar } from "react-icons/ai"
import Image from 'material-ui-image' 
import '../CrimeCase/Report.css'
 
const Criminalinformation=(props)=>{
   return(
      <form className='report__form'>
            
            <div>
            <label htmlFor="name">Criminal Name </label>
              <input
                type="text1"
                name='name'
                disabled
                readonly
                value={props.name}
               />
            </div>
             <div>
            <label htmlFor="name">Criminal CNIC</label>
              <input
                type="text1"
                name='Cnic'
                disabled
                readonly
                value={props.cnic}
               />
            </div>
            <div>
            <label htmlFor="address">Crimnal Address<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='City'
                disabled
                readonly
                value={props.address}
               />
            </div>
            <div>
            <label htmlFor="address">Case Type<span><AiFillStar className='report-icon'/></span> </label>
              <input
                type="text1"
                name='Casetype'
                disabled
                readonly
                value={props.casetype}
               />
            </div>
            <div>
             <label htmlFor="description"> Description </label>
                <textarea
                    name="details"
                    rows="7" cols="10"
                    disabled
                    minLength= "100"
                    maxLength='1000'
                    readonly
                    value={props.description}
                />
            </div>
            
          
      </form>

   )
}

export default Criminalinformation;