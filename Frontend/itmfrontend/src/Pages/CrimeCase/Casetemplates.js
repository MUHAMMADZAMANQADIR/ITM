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

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));
const cards = [1, 2, 3 ,4,5,6,7];
export default function  Casetemplate({ img, title }) {
  const classes = useStyles();
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
            {cards.map((card) => (
           <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" component={Link} to='/specificcase'>View</Button>
          <Button size="small" component={Link} to='/updatecase'>Update</Button>
      </CardActions>
                 
      </Card>
      </Grid>
      ))}
    </Grid>
  </Container>
  );
}

