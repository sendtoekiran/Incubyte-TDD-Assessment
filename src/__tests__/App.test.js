import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders String Calculator heading', () => {
    const { getByText } = render(<App />);
    const headingElement = getByText(/String Calculator/i);
    expect(headingElement).toBeInTheDocument();
});