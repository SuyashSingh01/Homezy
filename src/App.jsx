import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import HostedPlaces from './pages/HostedPlaces.jsx';
import BookingsPage from './pages/BookingsPage.jsx';
import { Notification } from './components/Navbar/Notification.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import HostPlacesFormPage from './pages/HostPlacesFormPage.jsx';
import SingleBookedPlace from './pages/SingleBookedPlace.jsx';
import PlaceDetail from './components/PlaceDetail/PlaceDetail.jsx';
import ConfirmAndPay from './pages/ConfirmAndPay.jsx';
import BookingRequest from './components/common/BookingRequest.jsx';
import FavouritePlaces from './pages/FavouritePlaces.jsx';

const pageTransition = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={{ duration: 0.5 }}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={{ duration: 0.5 }}
              >
                <LoginPage />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={{ duration: 0.5 }}
              >
                <SignupPage />
              </motion.div>
            }
          />
          <Route
            path="/place/:id"
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={{ duration: 0.5 }}
              >
                <PlaceDetail />
              </motion.div>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <ProfilePage />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/liked-place"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <FavouritePlaces />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/places"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <HostedPlaces />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/notification"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <Notification />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/places/new"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <HostPlacesFormPage />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/hosted/bookings"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <BookingRequest />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/places/:id"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <HostPlacesFormPage />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/bookings"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <BookingsPage />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/bookings/:id"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <SingleBookedPlace />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="/account/bookings/:id/confirm-pay"
            element={
              <PrivateRoute>
                <motion.div
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={{ duration: 0.5 }}
                >
                  <ConfirmAndPay />
                </motion.div>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={{ duration: 0.5 }}
              >
                <NotFoundPage />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
