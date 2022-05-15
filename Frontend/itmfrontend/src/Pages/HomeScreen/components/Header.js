import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse , Button} from '@material-ui/core';
import Logo from '../logo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
 

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    width: "100%",
    height: "90px",
    padding: "10px",
    boxSizing: "border-box",
    background: 'rgba(0,0,0,0.1)',
     
  },
  appbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',   
  },
  appbarTitle: {
    flexGrow: '1',
  },
  
  colorText: {
    color: '#00c9ed',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#00c9ed',
    fontSize: '5rem',
  },

}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div >
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <div  style={{marginLeft: '30px'}}>
          <img src={Logo} width="80" height="80"/>
          </div>
          <div style={{marginLeft: "1000px"}}>
          <Tooltip title="Login to CRIS">
          <IconButton component={Link} to ='/loginpage' >
            <Avatar ></Avatar>
          </IconButton>
          </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
     <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>Crime Reporting and Investigation System</span>
          </h1>
          <h1 style={{color: '#fff', fontSize: '4rem',}}>
             (Sub-wing  Investigation)
          </h1>
          
          <Scroll to="place-to-visit" smooth={true}>
          <Tooltip title="Go Down">
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Tooltip>
          </Scroll>
          
        </div>
      
      </Collapse>
      </div>
    </div>
  );
}
