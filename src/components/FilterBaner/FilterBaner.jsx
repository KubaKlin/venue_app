import { Typography, Box, Container, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import banerBg from '../../assets/baner_bg.png';
import { FilterTextField } from './FilterTextField';

export const FilterBaner = () => {
  return (
    <Box
       sx={{
         backgroundImage: `url(${banerBg})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         py: 4
       }}
     >
       <Container maxWidth="lg">
        <Typography>
          Find your place and experience it together.
        </Typography>

        <Box sx={{ display: 'flex', gap: '2rem', my: 2 }}>
          <FilterTextField
            label="Location"
            startIcon={<SearchIcon />}
          />
          <FilterTextField
            label="Occasions"
            startIcon={<SearchIcon />}
          />
          <FilterTextField
            label="Date"
            startIcon={<CalendarTodayIcon />}
          />
          <FilterTextField
            label="Guests"
            startIcon={<RemoveIcon />}
            endIcon={<AddIcon />}
          />
          <FilterTextField
            label="Venue type"
            startIcon={<SearchIcon />}
          />
        </Box>

        <Typography>
          I don't want to be that specific
        </Typography>

        <Button variant="contained" color="primary">
          Search for a venue
        </Button>
      </Container>
    </Box>
  )
}