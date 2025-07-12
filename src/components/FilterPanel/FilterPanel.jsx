import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';
import { filterSections } from './filterConfig';

export const FilterPanel = () => {
  const { watch, setValue, reset } = useForm({
    defaultValues: {
      priceRange: [50, 500],
      amenities: {
        wifi: false,
        parking: false,
        pool: false,
        gym: false,
        kitchen: false,
      },
      roomAmenities: {
        airConditioning: false,
        tv: false,
        minibar: false,
        balcony: false,
        bathtub: false,
      },
      neighbourhoods: {
        downtown: false,
        suburb: false,
        beachfront: false,
        mountains: false,
        countryside: false,
      },
      handicapAccessibility: {
        wheelchairAccessible: false,
        elevatorAccess: false,
        wideDoorways: false,
        accessibleBathroom: false,
      },
    },
  });

  const watchedValues = watch();

  const handleReset = () => {
    reset();
  };

  const handlePriceChange = (event, newValue) => {
    setValue('priceRange', newValue);
  };

  const createCheckboxHandler = (sectionKey) => (optionKey) => () => {
    const currentValue = watchedValues[sectionKey]?.[optionKey] || false;
    setValue(`${sectionKey}.${optionKey}`, !currentValue);
  };

  const stateMap = {
    amenities: watchedValues.amenities || {},
    'room-amenities': watchedValues.roomAmenities || {},
    neighbourhoods: watchedValues.neighbourhoods || {},
    'handicap-accessibility': watchedValues.handicapAccessibility || {},
  };

  const handlerMap = {
    amenities: createCheckboxHandler('amenities'),
    'room-amenities': createCheckboxHandler('roomAmenities'),
    neighbourhoods: createCheckboxHandler('neighbourhoods'),
    'handicap-accessibility': createCheckboxHandler('handicapAccessibility'),
  };

  const getStateBySection = (sectionId) => stateMap[sectionId] || {};
  const getHandlerBySection = (sectionId) =>
    handlerMap[sectionId] || (() => {});

  return (
    <Paper
      elevation={2}
      sx={{
        width: '100%',
        backgroundColor: '#FDFDFD',
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            letterSpacing: 2,
            color: '#333',
          }}
        >
          FILTERS
        </Typography>
        <Button
          variant="text"
          onClick={handleReset}
          sx={{
            color: '#4caf50',
            textTransform: 'lowercase',
            fontWeight: 400,
          }}
        >
          reset
        </Button>
      </Box>

      <form>
        <Box>
          {filterSections.map((section) => (
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
                {section.type === 'slider'
                  ? PriceSlider({
                      priceRange: watchedValues.priceRange || [50, 500],
                      handlePriceChange,
                    })
                  : CheckboxGroup({
                      section,
                      getStateBySection,
                      getHandlerBySection,
                    })}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </form>
    </Paper>
  );
};
