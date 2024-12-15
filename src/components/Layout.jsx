import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='text-cyan-600 text-3xl font-extrabold hover:bg-slate-600' >HELL-O</div>
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
