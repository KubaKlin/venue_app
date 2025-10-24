import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { NavBar } from './components/NavBar/NavBar';
import { AboutUs } from './pages/AboutUs';
import { YourFavourites } from './pages/YourFavourites';
import { StartHosting } from './pages/StartHosting';
import { Login } from './pages/Login';
import { FilterBaner } from './components/FilterBaner/FilterBaner';
import { VenueList } from './pages/VenueList';
import { VenueDetails } from './pages/VenueDetails';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <FilterBaner />
      <Routes>
        <Route path="/" element={<VenueList />} />
        <Route path="/venue-details/:id" element={<VenueDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/your-favourites" element={<YourFavourites />} />
        <Route path="/start-hosting" element={<StartHosting />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};
