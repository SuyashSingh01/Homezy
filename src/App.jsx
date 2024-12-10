import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AllPlacesPage from './pages/AllPlacesPage.jsx';
import BookingsPage from './pages/BookingsPage.jsx';
import HostPlacesFormPage from './pages/HostPlacesFormPage.jsx';
import SinglePlacePage from './pages/SinglePlacePage.jsx';
import SingleBookedPlace from './pages/SingleBookedPlace.jsx';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (<>
      <div className='text-cyan-600 text-3xl font-extrabold hover:bg-slate-600' >HELLO</div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/place/:id" element={<SinglePlacePage />} />
        <Route path="/account/places" element={<AllPlacesPage />} />
        <Route path="/account/places/new" element={<HostPlacesFormPage />} />
        <Route path="/account/places/:id" element={<HostPlacesFormPage />} />
        <Route path="/account/bookings" element={<BookingsPage />} /> 
        <Route path="/account/bookings/:id" element={<SingleBookedPlace />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

  </>
  );
}

export default App;
