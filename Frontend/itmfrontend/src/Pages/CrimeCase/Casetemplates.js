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
import { useNavigate } from "react-router-dom";
import {IDConsumer} from "../Globelvariable/Globelvariable"
const Image1= require( "../../image Not Attached.png");


const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(18),
    height: 495,
    width: 600,
  },
  media: {
    height: 200,
    width: 600,
  },
}));
export const Globelcaseid=createContext();

export default function  Casetemplate(props) {
  const classes = useStyles();
    const [caseid , setcaseid]=useState()
    const navigate = useNavigate()
     
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <IDConsumer>
    {({ updateID ,updateReportType, updateUser , updateCaseid }) => ( 
      
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={4}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}  image={props.evidence || Image1}/>
        <CardContent>
          <Typography variant="body2" style={{ height: "150px" ,width: "580px" }}>
             {props.description}
          </Typography>
          <div style={{display: 'flex', flexdirection: 'row' }}>
          <Typography variant="h6" style={{marginRight: "10px" }} ><span style={{color: "blue" }}>Case-ID: </span>
             {props.caseID}
          </Typography>
          <Typography variant="h6" style={{marginRight: "10px" }}><span style={{color: "blue" }}>ReportType:</span>
             {props.ReportType}
          </Typography>
          </div>
          <Typography variant="h6" ><span style={{color: "blue" }}>Assigned Date: </span>
             {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small"   onClick={()=>{
                setcaseid(props.id)
                console.log( props.Repoterid )
                console.log(props.id)
                console.log(props.id)
                updateID(props.id)
                updateReportType(props.ReportType)
                updateUser(props.Repoterid)
                updateCaseid(props.caseID)
                navigate("/specificcase");
          }}   startIcon={<VisibilityOutlinedIcon/>}>View</Button>
          <Button size="small"  onClick={()=>{
                    setcaseid(props.id)
                    updateID(props.id)
                    updateReportType(props.ReportType)
                    updateUser(props.Repoterid)
                    updateCaseid(props.caseID)
                    navigate('/updatecase');
          }}   startIcon={<UpdateIcon />}>Update</Button>
      </CardActions>    
      </Card>
      </Grid>
    </Grid>
  
    )}
    
  </IDConsumer>
  </Container>
  );
}

