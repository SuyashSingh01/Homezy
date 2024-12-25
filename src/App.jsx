import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute.jsx';
import ProfilePage from './pages/ProfilePage';
import HostedPlaces from './pages/HostedPlaces.jsx';
import BookingsPage from './pages/BookingsPage.jsx';
import HostPlacesFormPage from './pages/HostPlacesFormPage.jsx';
import SingleBookedPlace from './pages/SingleBookedPlace.jsx';
import NotFoundPage from './pages/NotFoundPage';
import PlaceDetail from './components/PlaceDetail.jsx';
import ConfirmAndPay from './pages/ConfirmAndPay.jsx';
import FavouritePlaces from './pages/FavouritePlaces.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/account" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/account/liked-place" element={<PrivateRoute><FavouritePlaces /></PrivateRoute>} />
          <Route path="/account/places" element={<PrivateRoute><HostedPlaces /></PrivateRoute>} />
          <Route path="/account/places/new" element={<PrivateRoute><HostPlacesFormPage /></PrivateRoute>} />
          <Route path="/account/places/:id" element={<PrivateRoute><HostPlacesFormPage /></PrivateRoute>} />
          <Route path="/account/bookings" element={<PrivateRoute><BookingsPage /></PrivateRoute>} />
          <Route path="/account/bookings/:id" element={<PrivateRoute><SingleBookedPlace /></PrivateRoute>} />
          <Route path="/account/bookings/:id/confirm-pay" element={<PrivateRoute><ConfirmAndPay /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
