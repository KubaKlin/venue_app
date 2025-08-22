import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(({ theme, isMobile, isOpen }) => ({
  width: '100%',
  backgroundColor: '#FDFDFD',
  borderRadius: theme.spacing(0),
  height: '100%',
  ...(isMobile && {
    position: 'fixed',
    top: 0,
    left: isOpen ? 0 : '-100%',
    width: '320px',
    height: '100vh',
    zIndex: 1300,
    transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isOpen ? '4px 0 20px rgba(0, 0, 0, 0.15)' : 'none',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#fff',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ccc',
    },
  }),
}));

export const StyledMobileOverlay = styled('div')(({ theme, isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(2px)',
  zIndex: 1250,
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? 'visible' : 'hidden',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
