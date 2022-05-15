import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 , marginLeft:'30px' , marginTop:'12px' , marginBottom: '12px' }}>
      <CardMedia
        component="img"
        height="194"
        image={props.imageUrl}
      />
      <CardContent >
        <Typography variant="h6" color="text.secondary">
           {props.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <Typography variant="h5" color="text.secondary"  style={{
          fontSize: '2rem',
          fontFamily: 'Nunito',
        }}>
           <span>Date: </span>
           {props.date}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Tooltip title="Click to read more">
          <ExpandMoreIcon />
        </Tooltip>  
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h5'>Details:</Typography>
          <Typography paragraph>
            {props.title}
          </Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}