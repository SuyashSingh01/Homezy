import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoCard from '../components/InfoCard.jsx';
import Spinner from '../components/Spinner.jsx';

const HostedPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="mx-4 mt-4 flex flex-col justify-center gap-4 w-full">
        {places.length > 0 &&
          places.map((place,index) => <InfoCard place={place} key={index} />)}
      </div>
      <div className="text-center mt-4 ">
        <Link
          className="gap-1 mx-auto my-4 inline-flex rounded-full bg-primary py-3 px-10 text-xl font-semibold text-white "
          to={'/account/places/new'}>
          Add new place
        </Link>
      </div>
    </div>
  );
};

export default HostedPlaces;
