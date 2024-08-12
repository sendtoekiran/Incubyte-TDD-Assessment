import React, { useCallback, useState } from 'react';
import './StringCalculator.css';

function StringCalculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const add = useCallback((value) => {
        let inputValue = value.replace(new RegExp("//;\\\\n", "g"), ",");
        inputValue = inputValue.replace(new RegExp(";", "g"), ",");
        inputValue = inputValue.replace(new RegExp("\\\\n", "g"), ",");
        const numbers = inputValue.split(',').map(Number).filter(n => !isNaN(n));
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        setResult(sum);
    }, []);

    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={() => add(input)}>Calculate</button>
            {result !== null && <div id="result">Sum: {result}</div>}
        </div>
    );
}

export default StringCalculator;