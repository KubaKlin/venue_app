import { FilterTextField } from './FilterTextField';
import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import cloudsImage from '../../assets/clouds.svg';
import {
  StyledMainBox,
  StyledFormBox,
  StyledRemoveIcon,
  StyledAddIcon,
  StyledHeader,
  StyledTypography,
  StyleSearchButton,
  StyledCloudImage,
} from './FilterBaner.styles';
import { useFilterBanner } from './hooks/useFilterBanner';

export const FilterBaner = () => {
  const {
    register,
    handleSubmit,
    isFieldVisible,
    guestCount,
    onSubmit,
    handleFieldVisibility,
    handleGuestDecrease,
    handleGuestIncrease,
    getButtonText,
  } = useFilterBanner();

  return (
    <StyledMainBox>
      <StyledCloudImage src={cloudsImage} alt="baner cloud image" />
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
