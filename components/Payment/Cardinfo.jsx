"use client";
import React, { useState } from "react";
const Cardinfo = (props) => {
  const [cardNumber, setCardNumber] = useState("");

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join("-") : "";
  };

  const handleChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };
  return (
    <div className="w-full py-10">
      <div className="w-full max-w-xl font-Poppins">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-medium mb-6 text-gray-700">
            {props.cardType} Card Details
          </h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  value={cardNumber}
                  onChange={handleChange}
                  pattern="[0-9\s]{13,19}"
                  placeholder="1234-5678-9123-4567"
                  maxLength="19" // 16 digits + 3 dashes
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  maxLength="2"
                  placeholder="MM"
                  className="w-12 py-3 px-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring-blue-500"
                />
                <span className="mx-1">/</span>
                <input
                  type="text"
                  maxLength="2"
                  placeholder="YY"
                  className="w-12 py-3 px-2 border border-gray-400 rounded-r-md focus:outline-none focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  maxLength="3"
                  id="cvv"
                  placeholder="000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 uppercase"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-TechBlue text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cardinfo;
