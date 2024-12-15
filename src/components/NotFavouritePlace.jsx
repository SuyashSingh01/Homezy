import React from "react";
import { Link } from "react-router-dom";

const NotFavouritePlace = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-2xl font-semibold text-gray-600 bg-white mt-4">No Liked Places</h2>
      <p className="text-gray-500 mt-2">
        You haven’t liked any places yet. Explore and add your favorites!
      </p>
      <Link
        to={'/'}
        className="mt-6 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
      >
        Explore Places
      </Link>
    </div>
  );
};

export default NotFavouritePlace;
