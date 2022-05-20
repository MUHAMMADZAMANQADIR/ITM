import React, { useState, useEffect , useRef,  useContext} from "react";
import { Grid, makeStyles , Button,} from "@material-ui/core";
import Add from "../Dashboard/components/Add";
import Leftbar from "../Dashboard/components/Leftbar";
import Navbar from "../Dashboard/components/Navbar";
import Rightbar from "../Dashboard/components/Rightbar";
import Footer from "../Footer/Footer"
import Casetemplate from "../CrimeCase/Casetemplates";
import caseinfo from './Casedb'
import axios from 'axios'
import {investigationContext} from "../../Pages/context/GlobelInvestigationContext";
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));


const CrimeCases = () => {
  const classes = useStyles();
  const [caselist , updatecase]=useState([])
  const loacakcaselist =[]
  const {Investeam, error } = useContext(investigationContext)
   // Fetch data
  useEffect(() => {
    console.log("Investeam - id" , Investeam._id)
    let url = `http://localhost:5000/api/getcases/${Investeam._id}`;
    axios
      .get(url)
      .then(function (response) {
        updatecase(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
 
  
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
        {
          caselist.map((ca)=>{
              ca.map((nw)=>{
                loacakcaselist.push(nw);
              })
            })
             
        }
         
            {
               
            loacakcaselist.map((news)=>{
              return(
                <Grid key={news.key} sm={6} xs={12}>
                      <Casetemplate  style={{marginRight: '10px' }}
                        caseID={news.caseID}
                        id={news._id}
                        description={news.description}
                        evidence={news.Image1}
                        date={news.ReportedDate.slice(0,10)}
                        ReportType={news.ReportType}
                        Repoterid={news.user}
                      ></Casetemplate> 
                </Grid>
              )
            })
            
            }    
            
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
      <div style={{marginTop: "5px" }}>
      <Footer ></Footer>
      </div>
    </div>
  );
};

export default CrimeCases ;
 
