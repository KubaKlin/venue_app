import { Typography, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import banerBg from '../../assets/baner_bg.png';
import { FilterTextField } from './FilterTextField';
import { useForm } from 'react-hook-form';

const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${banerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '32px',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const StyledRemoveIcon = styled(RemoveIcon)(() => ({
  cursor: 'pointer',
}));

const StyledAddIcon = styled(AddIcon)(() => ({
  cursor: 'pointer',
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  fontSize: '40px',
  textAlign: 'right',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
  color: '#67AA92',
  fontWeight: 600,
}))

const StyleSearchButton = styled(Button)(() => ({
  textTransform: 'lowercase',
  borderRadius: '20px',
  backgroundColor: '#67AA92',
  fontWeight: 600,
  fontSize: '16px',
  display: 'block',
  margin: '36px auto 0',
}))

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
              startIcon={
                <StyledRemoveIcon onClick={handleGuestDecrease} />
              }
              endIcon={
                <StyledAddIcon onClick={handleGuestIncrease} />
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
          </StyledFormBox>

          <StyledTypography>I don't want to be that specific</StyledTypography>

          <StyleSearchButton type="submit" variant="contained" color="primary">
            Search for a venue
          </StyleSearchButton>
        </form>
      </Container>
    </StyledMainBox>
  );
};
