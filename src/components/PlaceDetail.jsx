import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner'
import BookingWidget from './BookingWidget.jsx';
import PlaceGallery from './PlaceGallery.jsx';
import Perks from './Perks.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../Redux/slices/AuthSlice';
import { toast } from 'react-toastify';
import AddressLink from './AddressLink.jsx';
import Reviews from './Reviews.jsx';

const PlaceDetail = () => {

  const { id } = useParams();
  const [place, setPlace] = useState({});
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getPlace = async () => {
    // backend call
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`http://localhost:3001/listings`);
      console.log("response: ", response.data);
      const placeDetail = response.data.find((place) => parseInt(place.id, 10) === parseInt(id, 10));
      console.log('pplaceDetail:', placeDetail);
      setPlace(placeDetail);

    } catch (e) {
      console.log("eror ", e.message);
      toast.error(e.message);
    }
    dispatch(setLoading(false));

  };
  useEffect(() => {
    getPlace();
  }, [id]);

  if (loading) return <Spinner />;
  if (!place) return;
  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20">
      <h1 className="text-3xl mt-4 ">{place?.title}</h1>
      <AddressLink className="my-2 block" placeAddress={place?.address} />
      <PlaceGallery place={place} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="text-balance ">
          <div className="my-4">
            <h2 className="md:text-2xl font-semibold text-xl">Description</h2>
            {place?.description}
          </div>
          Max number of guests: {place?.maxGuests}
          <Perks perks={place?.perks} />
        </div>
        <div>
        <BookingWidget place={place} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place?.extraInfo}
        </div>
      </div>
      <Reviews />
    </div>
  )
};

export default PlaceDetail;
