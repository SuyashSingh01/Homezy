import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col mt-16 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
