import React from 'react';
import PlaceImg from './PlaceImg.jsx';

const InfoCard = ({ place, navigate }) => {
  console.log('place in the infocard :', place);

  const editHandler = () => {
    navigate(`/account/places/${place.id}`, {state:{ place}});
  }
  const deletHandler = () => {
    navigate(`/account/places/${place.id}`);
    localStorage.removeItem('listings');
  }
  return (
    <div className="my-3 flex cursor-pointer flex-col gap-4 rounded-2xl bg-gray-100 p-4 transition-all hover:bg-gray-300 md:flex-row">
      <div className="flex md:flex-row flex-col gap-4 md:gap-11 sm:h-32 md:h-40 w-full ">
        <PlaceImg place={place} className='flex-auto ' />
        <div className='flex-auto  flex-col gap-2'>
          <div className=" w-full mt-2 md:mt-4">
            <h2 className="text-lg md:text-xl">{place.title}</h2>
            <p className="line-clamp-3 mt-2 text-sm">{place.description}</p>
          </div>
          <div className='mt-2'>
            <p className="text-sm md:text-base">Max Guests: {place.maxGuests}</p>
            <p className="text-sm md:text-base">Price: {place.price}</p>
            <p className='text-sm md:text-base'>No. of Booking:{place?.booked}</p>
          </div>
          <div className='flex mt-4 gap-4 md:gap-8 justify-center items-center'>
          <button className='bg-primary rounded-md p-2 w-full text-white' onClick={editHandler}>Edit</button>
          <button className='bg-primary rounded-md p-2 w-full text-white' onClick={deletHandler}>Delete</button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default InfoCard;
