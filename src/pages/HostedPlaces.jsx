import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import InfoCard from '../components/InfoCard.jsx';
import Spinner from '../components/Spinner.jsx';
import { useSelector } from 'react-redux';

const HostedPlaces = () => {
  const {listings}=useSelector((state)=> (state.listings));
  const navigate=useNavigate();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("places:in redux",places);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/hosted');
        setPlaces(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
     getPlaces();   

  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='mt-4 mb-8'>
      <h1 className='font-semibold text-3xl mt-4 mb-4 text-center'>Your Hosted Places</h1>
      <div className="mx-4 mt-4 flex flex-col justify-center gap-4 w-full">
        {places.length > 0 &&
          places.map((place,index) => {
            console.log(index,"+",place );
            return <InfoCard place={place} key={index} navigate={navigate} />
          })}
      </div>
      <div className="text-center mt-4 mb-4 ">
        <Link
          className="gap-1 m-4 inline-flex rounded-full bg-primary py-3 px-5 md:px-11 text-xl font-semibold text-white "
          to={'/account/places/new'}>
          Add new place
        </Link>
      </div>
    </div>
  );
};

export default HostedPlaces;
