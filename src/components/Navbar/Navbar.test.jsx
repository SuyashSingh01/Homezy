import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import store from '../Redux/store';

describe('Navbar Component', () => {
  test('renders Navbar with categories', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    // Check if categories are rendered
    expect(screen.getByText('Homes')).toBeInTheDocument();
    expect(screen.getByText('Icons')).toBeInTheDocument();
    expect(screen.getByText('Islands')).toBeInTheDocument();
  });

  test('toggles search bar visibility', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );

    const searchBarToggle = screen.getByRole('button', { name: /toggle search bar/i });
    fireEvent.click(searchBarToggle);

    // Check if search bar visibility toggles
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });
});