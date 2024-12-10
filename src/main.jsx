import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Provider} from 'react-redux';
import { store } from './Redux/store';
import { SearchProvider } from './context/SearchContext';
import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <SearchProvider>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={2000} transition={Slide} />
      </BrowserRouter>
    </SearchProvider>
    </Provider>
  </React.StrictMode>,
);
