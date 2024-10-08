import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

test('renders input and button', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('calculates sum of numbers correctly', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: '1,2,3' } });
    fireEvent.click(buttonElement);

    const resultElement = getByText(/Sum: 6/i);
    expect(resultElement).toBeInTheDocument();
});

test('handles invalid input gracefully', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);

    fireEvent.change(inputElement, { target: { value: '1,a,3' } });
    fireEvent.click(buttonElement);

    const resultElement = getByText(/Sum: 4/i);
    expect(resultElement).toBeInTheDocument();
});

test('handles invalid with \n input gracefully', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);
    fireEvent.change(inputElement, { target: { value: '1,\n2,3' } });
    fireEvent.click(buttonElement);
    const resultElement = getByText(/Sum: 6/i);
    expect(resultElement).toBeInTheDocument();
});

test('handles invalid with new line with delimeter input gracefully', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);
    fireEvent.change(inputElement, { target: { value: '//;\n1;2' } });
    fireEvent.click(buttonElement);
    const resultElement = getByText(/Sum: 3/i);
    expect(resultElement).toBeInTheDocument();
});
test('handles negative numbers', () => {
    const { getByPlaceholderText, getByText } = render(<StringCalculator />);
    const inputElement = getByPlaceholderText(/Enter numbers separated by commas/i);
    const buttonElement = getByText(/Calculate/i);
    fireEvent.change(inputElement, { target: { value: '1,-1,-4,3' } });
    fireEvent.click(buttonElement);
    const resultElement = getByText(/negative numbers not allowed/i);
    expect(resultElement).toBeInTheDocument();
});