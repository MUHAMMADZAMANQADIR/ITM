import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import News from "./components/News"
import Footer from "../Footer/Footer"
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    Width: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg5.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <News/>
      <Footer/>
    </div>
  );
}