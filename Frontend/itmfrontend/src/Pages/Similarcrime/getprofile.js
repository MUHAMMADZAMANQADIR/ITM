import React, { useState, useEffect , useRef,  useContext, createContext} from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import UpdateIcon from '@material-ui/icons/Update';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
const Image1= require( "../../image Not Attached.png");


const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(18),
    height: 300,
    width: 650,
  },
 
}));

export default function  Getsimilarcase(props) {
  const classes = useStyles();
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
   
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={4}>
        <Card className={classes.card}>
      <CardActionArea>
         
        <CardContent>
          <Typography variant="body2" style={{ height: "150px" ,width: "580px" }}>
             {props.Description}
          </Typography>
          <div style={{display: 'flex', flexdirection: 'row' , marginTop: "15px" }}>
          <Typography variant="h6" style={{marginRight: "10px"  }} ><span style={{color: "blue" }}>Criminal Name: </span>
             {props.name}
          </Typography>
          <Typography variant="h6" style={{marginRight: "10px" }}><span style={{color: "blue" }}>Criminal CNIC:</span>
             {props.Cnic}
          </Typography>
          </div>
          <div style={{display: 'flex', flexdirection: 'row' , marginTop: "15px"}}>
          <Typography variant="h6" style={{marginRight: "10px" }} ><span style={{color: "blue" }}>Crimnal Address: </span>
             {props.Location}
          </Typography>
          <Typography variant="h6" style={{marginRight: "10px" }}><span style={{color: "blue" }}>Case Type:</span>
             {props.CaseType}
          </Typography>
          </div>
           
        </CardContent>
      </CardActionArea>
         
      </Card>
      </Grid>
    </Grid>
  </Container>
  );
}
