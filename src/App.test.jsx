import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './Redux/store';
import { ListingsProvider } from './context/ListingsContext'; // Ensure this path is correct

describe('App Component', () => {
    test('renders NotFoundPage on invalid route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/invalid-route']}>
                    <ListingsProvider>
                        <App />
                    </ListingsProvider>
                </MemoryRouter>
            </Provider>
        );

        // Check if the "Page Not Found" text is rendered
        expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    });
});
