import { Typography, Box, Container, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import banerBg from '../../assets/baner_bg.png';
import { FilterTextField } from './FilterTextField';
import { useForm } from 'react-hook-form';

export const FilterBaner = () => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Search data:', data);
  };

  const guestCount = watch('guests', 1);

  const handleGuestDecrease = () => {
    const currentValue = Math.max(1, guestCount - 1);
    setValue('guests', currentValue);
  };

  const handleGuestIncrease = () => {
    const currentValue = guestCount + 1;
    setValue('guests', currentValue);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${banerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography>Find your place and experience it together.</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', gap: '2rem', my: 2 }}>
            <FilterTextField
              label="Location"
              startIcon={<SearchIcon />}
              register={register('location')}
            />
            <FilterTextField
              label="Occasions"
              startIcon={<SearchIcon />}
              register={register('occasions')}
            />
            <FilterTextField
              label="Date"
              startIcon={<CalendarTodayIcon />}
              register={register('date')}
              type="date"
            />
            <FilterTextField
              label="Guests"
              startIcon={
                <RemoveIcon
                  onClick={handleGuestDecrease}
                  sx={{ cursor: 'pointer' }}
                />
              }
              endIcon={
                <AddIcon
                  onClick={handleGuestIncrease}
                  sx={{ cursor: 'pointer' }}
                />
              }
              register={register('guests')}
              value={guestCount}
              type="number"
              readOnly
            />
            <FilterTextField
              label="Venue type"
              startIcon={<SearchIcon />}
              register={register('venueType')}
            />
          </Box>

          <Typography>I don't want to be that specific</Typography>

          <Button type="submit" variant="contained" color="primary">
            Search for a venue
          </Button>
        </form>
      </Container>
    </Box>
  );
};
