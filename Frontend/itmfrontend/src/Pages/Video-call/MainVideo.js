import * as React from 'react';
import { Grid, makeStyles , Button,} from "@material-ui/core";
import Add from "../Dashboard/components/Add";
import Leftbar from "../Dashboard/components/Leftbar";
import Navbar from "../Dashboard/components/Navbar";
import Rightbar from "../Dashboard/components/Rightbar";
import Footer from "../Footer/Footer"
import Videocall from './Videocall';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const  Chat = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid sm={7} xs={10}>
            <Videocall/> 
        </Grid>
         
      </Grid>
       
      <div style={{marginTop: "5px" }}>
      <Footer /> 
      </div>
    </div>
  );
};

export default Chat ;