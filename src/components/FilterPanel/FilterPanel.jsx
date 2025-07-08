import { 
  Box, 
  Typography, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FilterPanel = () => {
  const handleReset = () => {
    // Reset all filters logic
    console.log('Reset filters');
  };

  const filterSections = [
    { id: 'price-range', title: 'price range' },
    { id: 'amenities', title: 'amenities' },
    { id: 'room-amenities', title: 'room amenities' },
    { id: 'neighbourhoods', title: 'neighbourhoods' },
    { id: 'handicap-accessibility', title: 'handicap accessibility' }
  ];

  return (
    <Paper 
      elevation={2}
      sx={{ 
        width: '100%',
        maxWidth: 300,
        backgroundColor: '#FDFDFD',
        borderRadius: 2,
        minWidth: '280px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            letterSpacing: 2,
            color: '#333'
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
            fontWeight: 400
          }}
        >
          reset
        </Button>
      </Box>

      <Box sx={{ p: 1 }}>
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
              expandIcon={<ExpandMoreIcon sx={{ color: '#666' }} />}
              sx={{
                px: 2,
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(180deg)',
                },
              }}
            >
              <Typography 
                sx={{ 
                  color: '#333',
                  fontSize: '16px',
                  fontWeight: 400
                }}
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pt: 0 }}>
              <Typography variant="body2" color="text.secondary">
                Filter options will go here
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
}; 