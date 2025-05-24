import React, { useState, useEffect } from 'react';
//import authAxios from './AuthAxios';
import axios from 'axios';
const Bikes = () => {
const [bikes, setBikes] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

useEffect(() => {
    // Fetch the bike data from the backend API
    axios
      .get("http://localhost:8082/api/bikes")
      .then((response) => {
        setBikes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch bikes");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
return(
<>
<div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8"> Latest  Bikes for travelling</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikes.map(bike => (
            <div key={bike.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative overflow-hidden">
                <img className="object-cover w-full h-56" src={bike.img} alt={bike.name} />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">{bike.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{bike.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-lg">${bike.rent_per_day}</span>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</>
);
}

export default Bikes;