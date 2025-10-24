import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBackButton = styled(Button)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  textTransform: 'none',
  color: 'rgba(0,0,0,0.75)',
  marginTop: 50,
  marginBottom: 55,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiButton-startIcon': {
    marginRight: 20,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 34,
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px 0',
  },
}));
