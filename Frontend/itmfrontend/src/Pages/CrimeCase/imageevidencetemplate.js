import * as React from 'react';
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
 

const useStyles = makeStyles((theme) => ({
  card: {
    height: 300,
    width: 250,
  },
  media: {
    height: 250,
    width: 250,
  },
}));
export default function Imageevidencetemplate(props) {
  const classes = useStyles();
  return (
    <Container sx={{ py: 4 }} maxWidth="md">
        <Grid xs={12} sm={6} md={4}>
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.image}/>  
         <CardContent>
          <Typography variant="h6">
             Image 1
          </Typography>
        </CardContent> 
      </Card>
    </Grid>
  </Container>
  );
}

