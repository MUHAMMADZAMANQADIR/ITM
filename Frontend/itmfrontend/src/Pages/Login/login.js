import React, { useState, useEffect , useRef,  useContext} from "react";

import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { Wave } from 'react-animated-text';
import {
  Avatar,
  Grid,
  Container,
  CssBaseline,
  FormControlLabel,
  Button,
  Link,
  Checkbox,
  Typography,
} from '@material-ui/core';
import axios from 'axios'
import { Link as RouterLink } from "react-router-dom";
import { TextField } from '@mui/material';
import { CssTextField, useSty } from './styles';
import "./login.css";
import { BsChevronDoubleRight } from 'react-icons/bs' 
import { useNavigate } from "react-router-dom";
import {investigationContext} from "../context/GlobelInvestigationContext"
const SignInForm = () => {
  const classes = useSty();
  const [Username, setUsername] = useState("");
  const [UserPassword, setPassword] = useState("");
   
  const { isFetching, token, Investeam, error, dispatch } = useContext(investigationContext)
  const navigate = useNavigate()
  const handleUsernameInput = event => {
        setUsername(event.target.value);
  };
   const handlePasswordInput = event => {
        setPassword(event.target.value);
  };
  const handleLogin = async (e) => {
        
        e.preventDefault()
        const UserName = Username 
        const Password = UserPassword 
        const body = JSON.stringify( { UserName, Password })
        console.log(body);
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            dispatch({ type: "LOGIN_START" })
            const res = await axios.post("http://localhost:5000/api/investigationteams/logininvestigationteam", body, config)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.investigationTeam , token: res.data.token})
            
            console.log("from backend" ,res.data.investigationTeam , res.data.token)
            navigate("/dashboard");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload:err})
            console.log(err)
        }
    }

  return (
    <div className="ParentDiv">
    <div className="Leftchild">
      <div className="services">
      
      <Typography style={{color: '#00c9ed' , fontweight: 'bold', fontSize: '2.7rem', marginBottom: '4px'}}>
        
         <Wave  text="What we can do?" effect="verticalFadeIn" speed="10" effectChange={"#FF0000"} />
      </Typography>
       
       <div className='services__item'>
          <BsChevronDoubleRight className='services__icon'/>
        Clustering cases with a similar crime pattern.

        </div>
        <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
                Predicting a criminal using serial crime patterns.
        </div>
        <div className='services__item'>
          <BsChevronDoubleRight className='services__icon'/>
            Fast and precise face detection and identification using a single/Multi face image.
        </div>
        <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
              Scheduled and Modify a video call.
         </div>
          <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
              Retrieve the record of a criminal from database .
          </div>
          <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
               Classifying fake and factual evidence.
          </div>
          <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
              Separating genuine cases from fake cases.
          </div>
           <div className='services__item'>
            <BsChevronDoubleRight className='services__icon'/>
               Identifying if the uploaded image, audio, or video has been tampered with.
          </div>
       </div>         
    </div>
    <div className="Rightchild">
        <Container component='main' maxWidth='xs' >
       
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 45 }} />
        </Avatar>
        <Typography component='h1' variant='h4'>
          Sign in
        </Typography>
        <form>
           
           <CssTextField
            name='email'
            label='Email'
            type='email'
            variant='outlined'
            margin='normal'
            fullWidth
            required
            focused
            
            onChange={handleUsernameInput}
            autoComplete='current-password'
          />
          <CssTextField
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            fullWidth
            focused
            required
             
            onChange={handlePasswordInput}
            autoComplete='current-password'
          />

          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <FormControlLabel
                label='Remember me'
                control={
                  <Checkbox
                    className={classes.checkBox}
                    name='remember'
                    defaultValue={false}
                  />
                }
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
            onClick={handleLogin}  
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    </div>
    </div>
   
  );
};

export default SignInForm;