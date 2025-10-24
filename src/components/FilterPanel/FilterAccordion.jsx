import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/PlayArrow';
import { SectionContent } from './SectionContent';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from './FilterAccordion.styles';

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
