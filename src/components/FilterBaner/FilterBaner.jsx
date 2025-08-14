import { useState } from 'react';
import { FilterTextField } from './FilterTextField';
import { useForm } from 'react-hook-form';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
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

  const [isFieldVisible, setIsFieldVisible] = useState(false);

  const onSubmit = (data) => {
    console.log('Search data:', data);
  };

  const guestCount = watch('guests', 1);

  const handleFieldVisibility = () => {
    setIsFieldVisible(!isFieldVisible);
  };

  const getButtonText = () => {
    if (isFieldVisible) {
      return "I don't want to be that specific";
    }
    return 'I want to be more specific';
  };

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
              isVisible={isFieldVisible}
            />
            <FilterTextField
              label="Date"
              startIcon={<CalendarTodayIcon />}
              register={register('date')}
              type="date"
              isVisible={isFieldVisible}
            />
            <FilterTextField
              label="Guests"
              startIcon={<StyledRemoveIcon onClick={handleGuestDecrease} />}
              endIcon={<StyledAddIcon onClick={handleGuestIncrease} />}
              register={register('guests')}
              value={guestCount}
              type="number"
              readOnly
              isVisible={isFieldVisible}
            />
            <FilterTextField
              label="Venue type"
              startIcon={<SearchIcon />}
              register={register('venueType')}
              isVisible={isFieldVisible}
            />
          </StyledFormBox>

          <StyledTypography onClick={handleFieldVisibility}>
            {getButtonText()}
          </StyledTypography>

          <StyleSearchButton type="submit" variant="contained" color="primary">
            Search for venue
          </StyleSearchButton>
        </form>
      </Container>
    </StyledMainBox>
  );
};
