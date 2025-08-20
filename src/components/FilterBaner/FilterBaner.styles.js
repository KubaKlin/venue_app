import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import bannerBg from '../../assets/banner_bg.svg';
import { COLORS } from '../../constants/colors';
import { FONT_STYLES } from '../../constants/fonts';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
  paddingTop: theme.spacing(4),
  paddingBottom: '41px',
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '25px',
  justifyContent: 'center',
  marginBottom: '11px',
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
  ...FONT_STYLES.PROMPT_MEDIUM,
  paddingTop: '172px',
  paddingBottom: '84px',
  fontSize: '40px',
  textAlign: 'right',
  fontWeight: 500,
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
  cursor: 'pointer',
  fontSize: '16px',
}));

export const StyledCloudImage = styled('img')({
  position: 'absolute',
  top: '56px',
  left: 0,
  width: '100%',
});

export const StyleSearchButton = styled(Button)(() => ({
  borderRadius: '20px',
  backgroundColor: COLORS.PRIMARY,
  fontWeight: 600,
  fontSize: '16px',
  display: 'block',
  margin: '44px auto 0',
  paddingInline: '42px',
  boxShadow: 'none',
}));
