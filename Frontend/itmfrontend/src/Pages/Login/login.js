import React, { useState, useEffect } from "react";
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
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
import { Link as RouterLink } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { CssTextField, useStyles } from './styles';
import "./login.css";

const SignInForm = () => {
  const classes = useStyles();
  const [Uname, setUName] = useState("");
  const [password, setPassword] = useState("");
   

  return (
    <div className="ParentDiv">
    <Container component='main' maxWidth='xs' >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 45 }} />
        </Avatar>
        <Typography component='h1' variant='h4'>
          Sign in
        </Typography>
        <form className={classes.form} >
          <CssTextField
            name='email'
            label='Email Address'
            variant='outlined'
            margin='normal'
            autoComplete='email'
            fullWidth
            required
          />
          <CssTextField
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            fullWidth
            required
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
            component={RouterLink} to='/dashboard'
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    </div>
   
  );
};

export default SignInForm;