import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import {investigationContext} from "../../context/GlobelInvestigationContext";
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Sidebar = ({ children }) => {
  const {Investeam, error } = useContext(investigationContext)
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [CNIc , setCNIc]=useState('')
  const [Investigationteam  , setinvestigationteam ]=useState('')
  const [Notificationbody , setNotificationBody]=useState('')
 
  const classes = useStyles();
  const onSendclick=()=>{
    if(CNIc){
    console.log("10")
    const notification="Your Call ID is".concat(" ' ").concat(me).concat(" ' ").concat("Plz join meetin With in a mint")
    
    const investigationteam = Investeam._id
    const NotificationBody = notification
    const CNIC=CNIc
    const body = JSON.stringify( {investigationteam, NotificationBody, CNIC })
    console.log(body);
    const config = {
        headers: {
          'Content-Type':'application/json'
        }
    }
    try {
            const res =axios.post("http://localhost:5000/api/notification/sendnotification",body, config)
            console.log(res.data)
        } catch (err) {
            console.log(err)
    }}
    
    
  }
  return (
    <Container className={classes.container}>
        
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
               {console.log(me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                  Call
                </Button>
              )}
            </Grid>
            <Typography gutterBottom variant="h6">Send call ID</Typography>
            <Grid item xs={12} md={6}  style={{display: 'flex', flexdirection: 'row' , marginTop:"35px"}}>
              <TextField style={{marginRight: "50px" , marginLeft: "-80px"}} label="Enter CNIC" value={CNIc} onChange={(e) => setCNIc(e.target.value)} fullWidth />
              <TextField style={{marginRight: "-150px" , }} label="Enter Call ID" value={me} fullWidth />
            </Grid>
            <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth className={classes.margin} onClick={onSendclick()}>
                  Send Call-ID
            </Button>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
/**
 * 
 * 
 * const onSendclick=()=>{
    
    const notification="Your Call ID is".concat(" ' ").concat(me).concat(" ' ").concat("Plz join meetin With in a mint")
    setNotificationBody(notification)
     
    const config = {
            headers: {
                'Content-Type':'application/json'
            }
    }
    try {
            const res =axios.post("http://localhost:5000/api/notification/sendnotification", config)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    

  }
 */