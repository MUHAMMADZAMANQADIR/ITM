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
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(18),
    height: 450,
    width: 600,
  },
  media: {
     
    height: 250,
    width: 300,
  },
}));
export default function  Casetemplate(props) {
  const classes = useStyles();
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={4}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}  image={props.evidence}/>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.Id}
          </Typography>
          <Typography variant="body2">
             {props.description}
          </Typography>
          <Typography variant="h5"><span>Assigned Date: </span>
             {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" component={Link} to='/specificcase' startIcon={<VisibilityOutlinedIcon/>}>View</Button>
          <Button size="small" component={Link} to='/updatecase' startIcon={<UpdateIcon />}>Update</Button>
      </CardActions>    
      </Card>
      </Grid>
    </Grid>
  </Container>
  );
}

