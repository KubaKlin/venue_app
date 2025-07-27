import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: 'transparent',
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#f6f6f6',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const SectionContent = ({
  section,
  watchedValues,
  handlePriceChange,
  getStateBySection,
  getHandlerBySection,
}) => {
  if (section.type === 'slider') {
    return (
      <PriceSlider
        priceRange={watchedValues.priceRange || [50, 500]}
        handlePriceChange={handlePriceChange}
      />
    );
  }

  const state = getStateBySection(section.id);
  const onCheckboxChange = getHandlerBySection(section.id);

  return <CheckboxGroup section={section} state={state} onCheckboxChange={onCheckboxChange} />;
};

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
