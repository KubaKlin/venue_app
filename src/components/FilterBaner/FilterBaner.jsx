import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { FilterTextField } from './FilterTextField';
import { useForm } from 'react-hook-form';
import {
  StyledMainBox,
  StyledFormBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledHeader,
  StyledTypography,
  StyleSearchButton,
} from './FilterBaner.styles';

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
    <StyledMainBox>
      <Container maxWidth="lg">
        <StyledHeader>Find your place and experience it together.</StyledHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFormBox>
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
              startIcon={<StyledRemoveIcon onClick={handleGuestDecrease} />}
              endIcon={<StyledAddIcon onClick={handleGuestIncrease} />}
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
          </StyledFormBox>

          <StyledTypography>I don't want to be that specific</StyledTypography>

          <StyleSearchButton type="submit" variant="contained" color="primary">
            Search for venue
          </StyleSearchButton>
        </form>
      </Container>
    </StyledMainBox>
  );
};
