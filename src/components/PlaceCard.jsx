import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/slices/ListingSlice";
import { FaHeart ,FaRegHeart} from "react-icons/fa";

const PlaceCard = ({ place }) => {
  const { id: placeId, image: photos, location: address, title, price } = place;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.listings.favorites);

  // Check if the place is already in favorites
  const isFavorited = favorites.includes(placeId);
  console.log("isFavorited",isFavorited);
  const handleLikeDislike = () => {
    if (isFavorited) {
      dispatch(removeFavorite(placeId)); // Remove from favorites
    } else {
      dispatch(addFavorite(placeId)); // Add to favorites
    }
  };

  return (
    <div className="relative m-4 flex flex-col md:m-2 xl:m-0">
      {/* Like/Dislike Button */}
      <button
        onClick={handleLikeDislike}
        className="absolute top-4 right-4 text-red-500 bg-white focus:outline-none"
      >
        {isFavorited ? (
          <FaHeart className="h-6 w-4" />) : (<FaRegHeart className="h-6 w-4" />)}
      </button>
      <Link to={`/place/${placeId}`} className="card">
      
        {photos?.[0] && (
          <img
            src={`${photos?.[0]}`}
            className="h-4/5 w-full rounded-xl object-cover"
            alt={title}
          />
        )}
        <h2 className="truncate font-bold">{address}</h2>
        <h3 className="truncate text-sm text-gray-500">{title}</h3>
        <div className="mt-1">
          <span className="font-semibold">₹{price} </span>
          per night
        </div>
      </Link>

      
    </div>
  );
};

export default PlaceCard;
