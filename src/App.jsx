import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/pages/Home';
import { AboutUs } from './components/pages/AboutUs';
import { YourFavourites } from './components/pages/YourFavourites';
import { StartHosting } from './components/pages/StartHosting';
import { Login } from './components/pages/Login';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/your-favourites" element={<YourFavourites />} />
        <Route path="/start-hosting" element={<StartHosting />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
