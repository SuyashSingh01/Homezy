import axios from 'axios';
import { useState, createContext,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setListings } from '../Redux/slices/ListingSlice';
import { setLoading } from '../Redux/slices/AuthSlice';



export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { listings } = useSelector((state) => state.listings);
  const [searchItem, setSearchItem] = useState('');
  const [listingData, setlistingData] = useState([]);

  // we can use this function to filter the data based on searchItem currently i am usi
  // function handleSearchClick() {
  //   console.log('handleSearchClick',listings);
  //   if (searchItem === "") { 
  //     return; 
  //   }
    // const filterBySearch = listingData.filter((item) => {
    //   if (item?.title.toLowerCase()
    //     .includes(searchItem.toLowerCase())) { return item; }
    // })
    // setlistingData(filterBySearch);
  // }

  const fetchedListingData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get('http://localhost:3001/listings');
      localStorage.setItem('listings', JSON.stringify(response.data));
      setlistingData(response.data);
      dispatch(setListings(listingData));
    } catch (e) {
      console.log(e.message);
    }
    dispatch(setLoading(false));
  }
  useEffect(() => {
    fetchedListingData();
  }, []);

  return (
    <ListingsContext.Provider value={{ searchItem, setSearchItem, fetchedListingData, listingData,setlistingData }}>
      {children}
    </ListingsContext.Provider>
  );
};