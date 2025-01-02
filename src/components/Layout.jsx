import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col mt-20 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
