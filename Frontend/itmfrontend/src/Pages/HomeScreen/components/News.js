import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import Typography from '@material-ui/core/Typography';
import RecipeReviewCard from "./Newstemplates"
import TopNews from '../static/Todaynews';
import { Grid } from '@material-ui/core';
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
  colorText: {
    color: '#00c9ed',
    fontSize: '4.5rem',
    border: '2px solid #00c9ed',
    backgroundColor : '#323333',
    marginTop:'5px',
    marginLeft:"150px",
    marginRight:"150px",
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default function News() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div>
    <div className={classes.colorText}>
    <Typography 
        variant="h3"
        align='center'
        
    >
     Today Top News
    </Typography>
    </div>
    <div className={classes.root} id="News">
      
      {
       TopNews.map((news)=>{
         return(
           <Grid key={news.key} sm={6} xs={12}>
                <RecipeReviewCard  style={{marginRight: '10px' }}
                  title={news.title}
                  description={news.description}
                  imageUrl={news.imageUrl}
                  date={news.date}
                 ></RecipeReviewCard> 
           </Grid>
         )
       })
      
      }    
    </div>
</div>
  );
}
