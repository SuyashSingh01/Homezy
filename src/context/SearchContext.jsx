import {useState ,createContext } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {setListings} from '../Redux/slices/ListingSlice';
export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
    const [searchItem, setSearchItem] = useState('');
    const {listings} = useSelector((state) => state.listings);

    const dispatch= useDispatch();


    const handleSearch=()=>{
    const filteredListings = listings.filter((listing) =>listing.title.toLowerCase().includes(searchItem.toLowerCase()));
    // Filter listings based on the search query
    dispatch(setListings(filteredListings))
  }

  return (
    <SearchContext.Provider value={{searchItem,setSearchItem,handleSearch}}>
      {children}
    </SearchContext.Provider>
  );
};