import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';

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
    <Accordion
      key={section.id}
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: '#f6f6f6',
          px: 2,
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(180deg)',
          },
        }}
      >
        <Typography>{section.title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ mt: 1 }}>
        <SectionContent
          section={section}
          watchedValues={watchedValues}
          handlePriceChange={handlePriceChange}
          getStateBySection={getStateBySection}
          getHandlerBySection={getHandlerBySection}
        />
      </AccordionDetails>
    </Accordion>
  );
};
