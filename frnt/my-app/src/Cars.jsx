// src/Cars.js
import React, { useState, useEffect } from 'react';
//import authAxios from './AuthAxios';
import axios from 'axios';
const Cars = () => {
  const [cars, setCars] = useState([]);
 

useEffect(() => {
  axios
    .get("http://localhost:8082/api/cars")
    .then((response) => {
      setCars(response.data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);
  

  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {cars.map((car) => (
        <div key={car.id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
          <a className="relative flex h-60 overflow-hidden" href="#">
            <img className="absolute top-0 right-0 h-full w-full object-cover" src={car.img} alt={car.name} />
            <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
              <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
              <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
              <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            </div>
            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
              <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">{car.name}</h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">${car.price}</span>
                <span className="text-sm text-slate-900 line-through">${car.originalPrice}</span>
              </p>
            </div>
            <button className="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
