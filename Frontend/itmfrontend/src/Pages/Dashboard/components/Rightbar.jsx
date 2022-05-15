import React, { useState, useEffect , useRef,  useContext} from "react";
import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Box,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {investigationContext} from "../../context/GlobelInvestigationContext";

const bull = (
  <Box
    style={{margin:"5px" , height:"100px" ,borderWidth:"2px", borderColor:"black", borderRadius: "2px", }}
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    marginRight: theme.spacing(2),
    fontSize: 24,
    fontWeight: "bold",
    color: "#555",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  const [PoliceStationID, setPoliceStationID]=useState("");
  const [City, setCity]=useState("");
  const [PoliceStationLocation, setPoliceStationLocation]=useState("");
  const [TeamName, setTeamName]=useState("");
  const [LeaderName, setLeaderName]=useState("");
  const [TotalAssigncase, setTotalAssigncase]=useState("");
  const [TotalResolvedcase, setTotalResolvedcase]=useState("");
  const [UnderInvestigation, setUnderInvestigation]=useState("");
   
  const { isFetching, token, Investeam, error, dispatch } = useContext(investigationContext)
   
  useEffect(() => {
            
            setPoliceStationID(Investeam.PoliceStationID);
            setCity(Investeam.City);
            setPoliceStationLocation(Investeam.PoliceStationLocation);
            setTeamName(Investeam.TeamName);
            setLeaderName(Investeam.LeaderName);
            setTotalAssigncase(Investeam.TotalAssigncase);
            setTotalResolvedcase(Investeam.TotalResolvedcase);
            setUnderInvestigation(Investeam.UnderInvestigation);
             
        });
  
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} >
         <span style={{color:"blue"}}>Team Details</span> 
      </Typography>
       <Typography className={classes.details}  >
         <strong>Police_Station_ID :</strong> {PoliceStationID}
         
      </Typography>
      <Typography className={classes.details}>
         <strong>City :</strong>{City}
      </Typography>
      <Typography className={classes.details}  >
         <strong>Location:</strong>{PoliceStationLocation}
      </Typography>
       <Typography className={classes.details}  >
         <strong>Team Name :</strong>{TeamName}
      </Typography>
      <Typography className={classes.details}  >
         <strong>Leader Name :</strong>{LeaderName}
      </Typography>
      <Typography className={classes.details}  >
          <strong>Total Assign Cases :</strong> {TotalAssigncase}
      </Typography>
       <Typography className={classes.details}  >
          <strong>Total Resolved Cases :</strong>{TotalResolvedcase}
      </Typography>
      <Typography className={classes.details}  >
          <strong>Under investigation :</strong>{UnderInvestigation}
      </Typography>
       
      
      <Typography className={classes.title} >
         <span style={{color:"blue"}}>Announcement </span>
      </Typography>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          1-DG FIA meets with Canadian High Commissioner at FIA Hqrs.
        </Typography>
        <Typography variant="h6" component="div"  style={{textAlign :"Right"}}>
              Dated: 12-24-2021
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          2-The Federal Investigation Agency 
          deals with organized crimes like Immigration, Anti-human Trafficking, 
          Anti-corruption, Protection of Intellectual Property Rights, Cyber Crime, Money Laundering etc
        </Typography>
           <Typography variant="h6" component="div"  style={{textAlign :"Right"}}>
              Dated: 8-24-2021
        </Typography>
      </CardContent>
      
    </Card>  

       
       
    </Container>
  );
};

export default Rightbar;
