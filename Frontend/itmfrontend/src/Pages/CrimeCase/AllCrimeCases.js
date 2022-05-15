import * as React from 'react';
import { Grid, makeStyles , Button,} from "@material-ui/core";
import Add from "../Dashboard/components/Add";
import Leftbar from "../Dashboard/components/Leftbar";
import Navbar from "../Dashboard/components/Navbar";
import Rightbar from "../Dashboard/components/Rightbar";
import Footer from "../Footer/Footer"
import Casetemplate from "../CrimeCase/Casetemplates"
import { useState } from 'react';
import caseinfo from './Casedb'
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CrimeCases = () => {
  const classes = useStyles();
  const [caselist , updatecase]=useState([1])
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
            {
            caseinfo.map((news)=>{
              return(
                <Grid key={news.key} sm={6} xs={12}>
                      <Casetemplate  style={{marginRight: '10px' }}
                        id={news.Caseid}
                        description={news.description}
                        evidence={news.Image1}
                        date={news.date}
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
 
