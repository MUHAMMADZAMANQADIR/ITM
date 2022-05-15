import React, { useState, useEffect , useRef,  useContext} from "react";
import {investigationContext} from "../context/GlobelInvestigationContext";
import Typography from '@mui/material/Typography';
import './profile.css'
 

function Profile() {
     
  const [LeaderName, setLeaderName]=useState("");
  const [Email, setEmail]=useState("");   
  const [Address, setAddress]=useState("");
  const [Phone, setPhone]=useState("");
  const [TeamLeadCNIC, setTeamLeadCNIC]=useState("");
  const [Password, setPassword]=useState("");
  const [PoliceStationID, setPoliceStationID]=useState("");
  const { isFetching, token, Investeam, error, dispatch } = useContext(investigationContext)
  useEffect(() => {
            setAddress(Investeam.Address);
            setEmail(Investeam.Email);
            setPoliceStationID(Investeam.PoliceStationID);
            setLeaderName(Investeam.LeaderName);
            setPhone(Investeam.Phone);
            setTeamLeadCNIC(Investeam.TeamLeadCNIC);
            setPassword(Investeam.Password);       
    });
    const  OnclickChange = () => {
        console.log("zaman");
       
    };
  return (
      <div className='main'>
         
        <div className='profile'>
            <Typography variant="h4">Account details</Typography>
            <p style={{marginBottom:'50px'}}>In the below sections you can change your password and set up details.</p>
            <div className='p-container'>
                <div className='p-bold'>
                    Name
                </div>
                <div>
                    {LeaderName}
                </div>
                 
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Email
                </div>
                <div>
                   {Email}
                </div>
                <button1 onClick={OnclickChange}>Change</button1>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Phone
                </div>
                <div>
                    {Phone}
                </div>
                <button1>Change</button1>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Address 
                </div>
                <div>
                     {Address}
                </div>
                <button1>Change</button1>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Current Station
                </div>
                <div>
                    {PoliceStationID}
                </div>
                <button1>Change</button1>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    CNIC
                </div>
                <div>
                    {TeamLeadCNIC}
                </div>          
                   
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Password
                </div>
                <div>
                    *********
                </div>
                <button1>Change</button1>
            </div>
        </div>
      </div>
  )
}

export default Profile