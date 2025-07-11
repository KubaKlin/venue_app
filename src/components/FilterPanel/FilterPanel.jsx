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
import { useState } from 'react';
import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';
import { HandleReset } from './HandleReset';
import { filterSections } from './filterConfig';

export const FilterPanel = () => {
  const [priceRange, setPriceRange] = useState([50, 500]);

  const [amenities, setAmenities] = useState({
    wifi: false,
    parking: false,
    pool: false,
    gym: false,
    kitchen: false,
  });

  const [roomAmenities, setRoomAmenities] = useState({
    airConditioning: false,
    tv: false,
    minibar: false,
    balcony: false,
    bathtub: false,
  });

  const [neighbourhoods, setNeighbourhoods] = useState({
    downtown: false,
    suburb: false,
    beachfront: false,
    mountains: false,
    countryside: false,
  });

  const [handicapAccessibility, setHandicapAccessibility] = useState({
    wheelchairAccessible: false,
    elevatorAccess: false,
    wideDoorways: false,
    accessibleBathroom: false,
  });

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleAmenityChange = (amenity) => (event) => {
    setAmenities((prev) => ({
      ...prev,
      [amenity]: event.target.checked,
    }));
  };

  const handleRoomAmenityChange = (amenity) => (event) => {
    setRoomAmenities((prev) => ({
      ...prev,
      [amenity]: event.target.checked,
    }));
  };

  const handleNeighbourhoodChange = (neighbourhood) => (event) => {
    setNeighbourhoods((prev) => ({
      ...prev,
      [neighbourhood]: event.target.checked,
    }));
  };

  const handleHandicapAccessibilityChange = (accessibility) => (event) => {
    setHandicapAccessibility((prev) => ({
      ...prev,
      [accessibility]: event.target.checked,
    }));
  };

  const stateMap = {
    'amenities': amenities,
    'room-amenities': roomAmenities,
    'neighbourhoods': neighbourhoods,
    'handicap-accessibility': handicapAccessibility,
  };

  const handlerMap = {
    'amenities': handleAmenityChange,
    'room-amenities': handleRoomAmenityChange,
    'neighbourhoods': handleNeighbourhoodChange,
    'handicap-accessibility': handleHandicapAccessibilityChange,
  };

  const getStateBySection = (sectionId) => stateMap[sectionId] || {};
  const getHandlerBySection = (sectionId) => handlerMap[sectionId] || (() => {});

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
          onClick={HandleReset({
            setPriceRange,
            setAmenities,
            setRoomAmenities,
            setNeighbourhoods,
            setHandicapAccessibility,
          })}
          sx={{
            color: '#4caf50',
            textTransform: 'lowercase',
            fontWeight: 400,
          }}
        >
          reset
        </Button>
      </Box>

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
              <Typography>
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ mt: 1 }}>
              {section.type === 'slider'
                ? PriceSlider({ priceRange, handlePriceChange })
                : CheckboxGroup({
                    section,
                    getStateBySection,
                    getHandlerBySection,
                  })}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
};
