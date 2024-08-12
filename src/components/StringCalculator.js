import React, { useState } from 'react';
import './StringCalculator.css';

function StringCalculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const calculateSum = () => {
        const numbers = input.split(',').map(Number).filter(n => !isNaN(n));
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        setResult(sum);
    };

    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={calculateSum}>Calculate</button>
            {result !== null && <div id="result">Sum: {result}</div>}
        </div>
    );
}

export default StringCalculator;