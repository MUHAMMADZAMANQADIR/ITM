import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const mingColor = '#387780';
const dartmouthGreenColor = '#2D7638';
const emeraldGreenColor = '#00c9ed';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color:  emeraldGreenColor,
      fontfamily: 'lucida sans',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: emeraldGreenColor,
      fontfamily: 'lucida sans',
    },
    '&$checked': {
      color: emeraldGreenColor,
      fontfamily: 'lucida sans',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: emeraldGreenColor,
        fontfamily: 'lucida sans',
      },
      '&:hover fieldset': {
        borderColor: emeraldGreenColor,
        fontfamily: 'lucida sans',
        
      },
      '&.Mui-focused fieldset': {
        borderColor: emeraldGreenColor,
        fontfamily: 'lucida sans',
      },
      '&::placeholder':{
        borderColor: emeraldGreenColor,
      }
     
    },
  },
})(TextField);

export const useSty = makeStyles(theme => {
  return {
    paper: {
      margin: theme.spacing(0, 0),
      display: 'flex',
      color: emeraldGreenColor,
      flexDirection: 'column',
      alignItems: 'center',
      border: `5px solid ${emeraldGreenColor}`,
      borderRadius: '2rem',
      padding: '1.5rem 2.5rem',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: emeraldGreenColor,
      fontSize: 50,
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: emeraldGreenColor,
      color: 'white',
      padding: '50 50',
    },
    link: {
      color: emeraldGreenColor,
      textDecoration: 'none !important',
    },
    checkBox: {
      color: `${emeraldGreenColor} !important`,
    },
    error: {
      color: 'red',
    },
  };
});