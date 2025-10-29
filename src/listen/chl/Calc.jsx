// ===== React Calculator Project =====
// Single-file representation with components
// You can split these into App.js, Calculator.jsx, index.js, etc.

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(String(eval(input)));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">React Calculator</h1>

        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-3 text-right text-xl border rounded-md outline-none"
        />

        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-400 text-white p-3 rounded-md">C</button>
          <button onClick={handleBackspace} className="bg-yellow-400 p-3 rounded-md">⌫</button>
          <button onClick={() => handleClick("/")} className="bg-gray-200 p-3 rounded-md">÷</button>

          {["7","8","9","*","4","5","6","-","1","2","3","+"].map((item) => (
            <button key={item} onClick={() => handleClick(item)} className="bg-gray-100 p-3 rounded-md">
              {item}
            </button>
          ))}

          <button onClick={() => handleClick("0")} className="col-span-2 bg-gray-100 p-3 rounded-md">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-100 p-3 rounded-md">.</button>
          <button onClick={handleCalculate} className="bg-blue-500 text-white p-3 rounded-md">=</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


