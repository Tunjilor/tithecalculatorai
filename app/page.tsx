"use client";

import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState(0);
  const [percent, setPercent] = useState(10);

  const tithe = (income * percent) / 100;

  return (
    <main className="min-h-screen bg-[#0b1220] text-white p-6">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-4">
          Tithe Calculator
        </h1>

        <p className="text-gray-300 mb-6">
          Calculate your tithe instantly based on your income. Adjust percentage,
          frequency, and plan your giving with clarity.
        </p>

        {/* Income Input */}
        <input
          type="number"
          placeholder="Enter your income"
          className="w-full p-4 rounded-lg bg-[#111827] border border-gray-700 mb-4"
          onChange={(e) => setIncome(Number(e.target.value))}
        />

        {/* Percentage Slider */}
        <div className="mb-6">
          <p className="mb-2">Tithe Percentage: {percent}%</p>
          <input
            type="range"
            min="0"
            max="20"
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Results */}
        <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Tithe</h2>

          <p className="text-xl mb-2">
            Weekly: ${(tithe / 52).toFixed(2)}
          </p>

          <p className="text-xl mb-2">
            Monthly: ${(tithe / 12).toFixed(2)}
          </p>

          <p className="text-xl mb-2">
            Yearly: ${tithe.toFixed(2)}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-green-700 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">
            Grow Your Faith Beyond Giving
          </h3>
          <p className="mb-4">
            Save your prayers, verses, and deepen your walk with God.
          </p>
          <a
            href="https://faithcompanionai.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Visit FaithCompanionAI
          </a>
        </div>

      </div>
    </main>
  );
}
