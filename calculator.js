// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['1', '2', '3', '+'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['4', '5', '6', '-'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['7', '8', '9', '*'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['0', 'C', '=', '/'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
