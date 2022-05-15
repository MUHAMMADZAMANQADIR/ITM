import { Grid, makeStyles , Button,} from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Footer from "../Footer/Footer"
import {Link} from 'react-router-dom';
import Mainadmin from "../adminmain/mainadmin"
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Mainadmin /> 
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

export default Dashboard;
