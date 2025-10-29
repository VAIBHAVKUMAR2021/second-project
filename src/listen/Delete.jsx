import React, { useState } from "react";

export default Delete Calculator() {
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
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">React Calculator</h1>

        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-3 text-right text-xl border rounded-md outline-none"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 bg-red-400 text-white p-3 rounded-md">C</button>
          <button onClick={handleBackspace} className=
