import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PlaceCard from "../components/PlaceCard";
import NotFavouritePlace from "../components/NotFavouritePlace"; // Placeholder component

const LikedPlacesPage = () => {
  const likedPlaces = useSelector((state) => state.listings.favorites); // IDs of liked places
  const [listings, setListings] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/listings");
        console.log("Listing->>>>data", data);
        setListings(data);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    };
    getPlaces();
  }, []);

  // Filter listings to include only liked places
  const likedListings = listings.filter((place) => likedPlaces.includes(place.id));

  console.log("likedListings", likedListings);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8 lg:px-16">

      {likedListings.length > 0 ? (
        <>
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Liked Places
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {likedListings.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </>
      ) : (
        <NotFavouritePlace />
      )}
    </div>
  );
};

export default LikedPlacesPage;