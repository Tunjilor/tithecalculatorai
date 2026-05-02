"use client";

import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [percentage, setPercentage] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  const calculateTithe = () => {
    const num = parseFloat(income);
    if (!isNaN(num)) {
      setResult((num * percentage) / 100);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-2 text-center">
        Tithe Calculator AI
      </h1>
      <p className="text-gray-400 mb-8 text-center">
        Calculate your tithe instantly — weekly, monthly, yearly.
      </p>

      {/* Calculator Card */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        {/* Income Input */}
        <label className="block mb-2 text-sm text-gray-300">
          Enter Income ($)
        </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="e.g. 5000"
          className="w-full p-3 rounded-lg bg-black border border-gray-700 mb-4 focus:outline-none"
        />

        {/* Percentage */}
        <label className="block mb-2 text-sm text-gray-300">
          Tithe Percentage (%)
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="w-full mb-2"
        />
        <p className="text-center mb-4 text-gray-400">{percentage}%</p>

        {/* Button */}
        <button
          onClick={calculateTithe}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
        >
          Calculate
        </button>

        {/* Result */}
        {result !== null && (
          <div className="mt-6 text-center">
            <p className="text-gray-400">Your Tithe:</p>
            <h2 className="text-3xl font-bold text-green-400">
              ${result.toFixed(2)}
            </h2>
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <section className="mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          What is Tithing?
        </h2>
        <p className="text-gray-400">
          Tithing is the practice of giving a portion of your income, typically 10%, 
          as an offering. It is rooted in biblical teachings such as Malachi 3:10 
          and Proverbs 3:9. This calculator helps you quickly determine your tithe 
          based on your income.
        </p>
      </section>

    </main>
  );
}
