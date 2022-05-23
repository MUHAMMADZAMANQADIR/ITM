import React,{useState,useRef, useContext, useEffect} from 'react'
//import ComponentHeader from '../../components/componentHeader/ComponentHeader'
import Typography from '@mui/material/Typography'
import './profile.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {investigationContext} from "../context/GlobelInvestigationContext"
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function UpdateProfile() {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    // ref for update profile form
    const [leaderName, setleaderName]=useState("");
    const [userName , setuserName]=useState("");
    const [teamName , setteamName]=useState("");
    const [email, setemail]=useState("");   
    const [address, setaddress]=useState("");
    const [phone, setphone]=useState("");
    const [teamLeadCNIC, setteamLeadCNIC]=useState("");
    const [password, setpassword]=useState("");
    //LeaderName
    //UserName
    //TeamName
    //Email
    //Address
    //Phone
    //TeamLeadCNIC
    //Password
    // navigate 
    const navigate = useNavigate()

    //get current user
     let { isFetching, token, Investeam, dispatch } = useContext(investigationContext)
    
    // set current user
     const [currentInvesteam, setCurrentInvesteam] = useState(Investeam)
    
    // useEffect function
    useEffect(() => {
        let unmounted = false;               // note mutable flag
        if (!unmounted) {
            setCurrentInvesteam(Investeam)
        }
        return () => { unmounted = true }; // cleanup value, if unmounted
      }, [Investeam]);     

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false)
    }
    
    const updateHandler = async () => {
        console.log("In  updateHandler")
        console.log(Investeam._id)
        console.log(userName,teamName, email, address, phone, password)
        const UserName =userName
        const TeamName =teamName
        const Email= email
        const Address= address
        const Phone=phone
        const Password=password

        const newData = {}
        if (UserName) newData.UserName = UserName
        if (TeamName) newData.TeamName = TeamName
        if (Email) newData.Email = Email
        if (Address) newData.Address = Address
        if (Phone) newData.Phone = Address
        if (Password) {
            newData.Password = Password
        } 

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const body = newData
        try {
            const res = await axios.post(`http://localhost:5000/api/investigationteams/updateinvestigationteam/${Investeam._id}`, body, config)
            console.log(res.data)
            if (res) {
                dispatch({ type: 'UPDATE', payload: res.data })
                setOpen(false)
                setOpenAlert(true)
                setError(false)
            }
            
        } catch (err) {
            console.log(err)
            setError(true)
        }
    }
  return (
      <>
         
        <div>
       
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div >
               <div className='modal-form'>
                   <h3>Enter new data</h3>
                    <input type="text" placeholder='UserName' style={{margin: '10px' , width: "300px"}} onChange={e=>setuserName(e.target.value)} />
                    <input type="text" placeholder='Email' style={{margin: '10px' , width: "300px"}}    onChange={e=>setemail(e.target.value)}/>
                    <input type="text" placeholder='Phone' style={{margin: '10px' , width: "300px"}}    onChange={e=>setphone(e.target.value)}/>
                    <input type="text" placeholder='Address' style={{margin: '10px' , width: "300px"}}  onChange={e=>setaddress(e.target.value)}/>
                    <input type="text" placeholder='Password' style={{margin: '10px' , width: "300px"}} onChange={e=>setpassword(e.target.value)}/>
                    <div className='p-buttons'>
                        <Button variant="contained" onClick={()=>updateHandler()}>Update</Button>
                        <Button variant="contained" onClick={()=>setOpen(false)}>Cancel</Button>
                    </div>
               </div>
           </div>    
        </Box>
      </Modal>
    </div>
        <div className='profile' style={{marginTop:'50px'}}>
            <Typography variant="h4">Account details</Typography>
            <p style={{marginBottom:'50px'}}>In the below sections you can change your password and set up details.</p>
            <div className='p-container'>

                <div className='p-bold'>
                    LeaderName
                </div>
                <div>
                   {currentInvesteam.LeaderName}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    TeamName
                </div>
                <div>
                    {currentInvesteam.TeamName}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Email
                </div>
                <div>
                    {currentInvesteam.Email}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    UserName
                </div>
                <div>
                    {currentInvesteam.UserName}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Phone
                </div>
                <div>
                    {currentInvesteam.Phone}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Address
                </div>
                <div>
                    {currentInvesteam.Address}
                </div>
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Team Leader CNIC
                </div>
                <div>
                    {currentInvesteam.TeamLeadCNIC}
                </div>          
            </div>
            <div className='p-container'>
                <div className='p-bold'>
                    Password
                </div>
                <div>
                    **********
                </div>
            </div>
            <div className='p-buttons'>
                <Button variant="contained"  onClick={()=>setOpen(true)}>Update</Button>
            </div>
        </div>
        
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
            {!error ? <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Profile Updated
              </Alert> :
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Something went wrong
              </Alert>
            }
        </Snackbar>
      </>
  )
}

export default UpdateProfile


