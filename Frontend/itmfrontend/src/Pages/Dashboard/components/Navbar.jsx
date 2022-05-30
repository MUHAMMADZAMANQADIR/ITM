import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import Notification from "../../Notifications/Notification"
import { useState } from "react";
const icon= process.env.PUBLIC_URL + '/assets/icon.png'
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    hight:"40px",
    width:"40px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }, 
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  notificationtogglebtn :{
    background: "white",
    width: "35px",
    height: "35px",
    border:"5px solid #ddd",
    borderradius: "5px",
    textalign: "center",
    alignContent: "center",
    left:"77.8%",
     
     
}
  
}));
// 67 <Notification />
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <img src={icon} className={classes.logoLg}/>
        <div className={classes.icons}>
            <div className={classes.notificationtogglebtn} style={{marginRight: "15px", marginTop: "5px" }}>
            {/* <Notification /> */}
            </div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
