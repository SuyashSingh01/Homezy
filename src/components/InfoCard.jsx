import React from 'react';
import { Link } from 'react-router-dom';
import PlaceImg from './PlaceImg.jsx';

const InfoCard = ({ place }) => {
  return (
    <Link
      to={`/account/places/${place.id}`}
      className="my-3 flex cursor-pointer flex-col gap-4 rounded-2xl bg-gray-100 p-4 transition-all hover:bg-gray-300 md:flex-row"
      key={place.id}
    >
      <div className="flex justify-center sm:h-32 sm:w-32 ">
        <PlaceImg place={place} />
        <div className="">
        <h2 className="text-lg md:text-xl">{place.title}</h2>
        <p className="line-clamp-3 mt-2 text-sm">{place.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
