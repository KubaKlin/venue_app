import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/PlayArrow';
import { SectionContent } from './SectionContent';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: 'transparent',
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
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

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const FilterAccordion = ({
  section,
  watchedValues,
  handlePriceChange,
  getStateBySection,
  getHandlerBySection,
}) => {
  return (
    <StyledAccordion key={section.id} elevation={0}>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{section.title}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <SectionContent
          section={section}
          watchedValues={watchedValues}
          handlePriceChange={handlePriceChange}
          getStateBySection={getStateBySection}
          getHandlerBySection={getHandlerBySection}
        />
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
