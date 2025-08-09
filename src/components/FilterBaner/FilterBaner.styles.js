import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import bannerBg from '../../assets/banner_bg.svg';
import { COLORS } from '../../constants/colors';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '32px',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledRemoveIcon = styled(RemoveIcon)(() => ({
  cursor: 'pointer',
}));

export const StyledAddIcon = styled(AddIcon)(() => ({
  cursor: 'pointer',
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  fontSize: '40px',
  textAlign: 'right',
  fontWeight: 600,
  color: 'rgba(0,0,0,.75)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
  color: COLORS.PRIMARY,
  fontWeight: 600,
}));

export const StyleSearchButton = styled(Button)(() => ({
  textTransform: 'lowercase',
  borderRadius: '20px',
  backgroundColor: COLORS.PRIMARY,
  fontWeight: 600,
  fontSize: '16px',
  display: 'block',
  margin: '36px auto 0',
  paddingInline: '34px',
  boxShadow: 'none',
}));

