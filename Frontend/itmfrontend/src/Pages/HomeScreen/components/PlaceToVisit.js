import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    
  },
  bar: {
    color: '#00c9ed',
    fontSize: '4.5rem',
    border: '2px solid #00c9ed',
    backgroundColor : '#323333',
    marginLeft:"150px",
    marginRight:"150px",
    marginBottom:"20px",
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div id="place-to-visit">
    <div  className={classes.bar}>
       <Typography 
        variant="h3"
        align='center'
      >
        Our Top Services
    </Typography>
    </div>
    <div className={classes.root} >
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[2]} checked={checked} />      
    </div>
    </div>
  );
}
