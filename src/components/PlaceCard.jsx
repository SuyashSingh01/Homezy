import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/slices/ListingSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import img1 from "../assets/pexels-pixabay-533769.jpg"

const PlaceCard = ({ place }) => {

  const { id: placeId, image: photos, location: address, title, price } = place;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.listings.favorites);

  // Check if the place is already in favorites
  const isFavorited = favorites.includes(placeId);
  // console.log("isFavorited", isFavorited);

  const handleLikeDislike = () => {
    if (isFavorited) {
      console.log("Remove from favorites", isFavorited);
      dispatch(removeFavorite(placeId)); // Remove from favorites
    } else {
      dispatch(addFavorite(placeId)); // Add to favorites
    }
  };

  return (
    
      <div className="flex flex-col justify-center shadow-md p-2 rounded-xl">

        <Link to={`/place/${placeId}`}>
          {/* change with dynamic image link */}
          <img
            src={img1}
            className="h-full w-full rounded-xl object-cover"
            alt={`alt ${title}`} />
        </Link>
        <div className="flex justify-between items-center p-2">
          <div className="flex flex-col my-4 gap-2">
            <h2 className="truncate font-bold">{address}</h2>
            <h3 className="truncate text-sm text-gray-500 md:mt-1">{title}</h3>
            <div className="mt-1 md:mt-2">
              <span className="font-semibold">₹{price} </span>
              per night
            </div>
          </div>
          {/* Like/Dislike Button */}
          <div className="">
            <button onClick={handleLikeDislike} className="text-md text-red-500 bg-white focus:outline-none p-2"
            >{isFavorited ? (
              <FaHeart className="h-6 w-4" />) : (<FaRegHeart className="h-6 w-4" />)}
            </button>
          </div>
        </div>
      </div>
    

  );
};

export default PlaceCard;
