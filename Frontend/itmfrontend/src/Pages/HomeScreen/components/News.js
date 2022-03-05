import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  colorText: {
    color: '#00ff55',
    fontSize: '4.5rem'
  },

  
}));
export default function News() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div>

    <Typography 
        variant="h3"
        align='center'
        className={classes.colorText}
    >
     Today Top News
    </Typography>
    <div className={classes.root} id="News">
       
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
           
    </div>
</div>
  );
}
