import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAccordion = styled(Accordion)(() => ({
  padding: '8px 12px',
  backgroundColor: 'transparent',
  '&:before': {
    display: 'none',
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#FDFDFD',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
