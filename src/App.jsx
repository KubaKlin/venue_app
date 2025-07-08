import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { AboutUs } from './pages/AboutUs';
import { YourFavourites } from './pages/YourFavourites';
import { StartHosting } from './pages/StartHosting';
import { Login } from './pages/Login';
import { FilterBaner } from './components/FilterBaner/FilterBaner';
import { VenueList } from "./pages/VenueList";

export const App = () => {
  return (
    <>
      <NavBar />
      <FilterBaner />
      <Routes>
        <Route path="/" element={<VenueList />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/your-favourites" element={<YourFavourites />} />
        <Route path="/start-hosting" element={<StartHosting />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
