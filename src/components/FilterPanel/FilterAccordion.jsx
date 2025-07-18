import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';

export const FilterAccordion = ({
  section,
  watchedValues,
  handlePriceChange,
  getStateBySection,
  getHandlerBySection,
}) => {
  const renderSectionContent = () => {
    if (section.type === 'slider') {
      return PriceSlider({
        priceRange: watchedValues.priceRange || [50, 500],
        handlePriceChange,
      });
    }

    return CheckboxGroup({
      section,
      getStateBySection,
      getHandlerBySection,
    });
  };

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
        {renderSectionContent()}
      </AccordionDetails>
    </Accordion>
  );
};
