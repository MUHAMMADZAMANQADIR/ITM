import { Container, makeStyles, Typography,Button } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  PhotoCamera,
  Settings,
  Storefront,
} from "@material-ui/icons";
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StorageIcon from '@mui/icons-material/Storage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link}   from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Button className={classes.text} component={Link} to='/dashboard'>Homepage</Button>
      </div>
       
      <div className={classes.item}>
        <List className={classes.icon} />
        <Button className={classes.text} component={Link} to='/allCases'>List of cases</Button>
      </div>
       <div className={classes.item}>
        <ScheduleIcon className={classes.icon} />
        <Button className={classes.text} component={Link} to='/schedulecall'>schedule call</Button>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Button className={classes.text} component={Link} to='/vediocall'>Video call</Button>
      </div>
       
      <div className={classes.item}>
        <StorageIcon className={classes.icon} />
        <Button className={classes.text} component={Link} to='/criminaldata'>Criminal Data</Button>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Button className={classes.text} component={Link} to='/similarcrime'>Similar crime</Button>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Button className={classes.text} component={Link} to='/setting'>Settings</Button>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Button className={classes.text} component={Link} to='/logout'>Logout</Button>
      </div>
    </Container>
  );
};

export default Leftbar;
