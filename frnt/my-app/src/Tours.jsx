import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './SideBar';
const Tours = () => {
  const [Tours, setTours] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:8082/api/destinies")
    .then((response) => {
      setTours(response.data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);
  console.log(Tours);
  return (
    <>
      <Navbar />
      <section className="w-screen py-20">
        <h1 className="mb-12 text-center font-sans text-5xl font-bold">
          Our Destination places
        </h1>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {Tours.map((T) => (
            <article
              key={T.id}
              className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
            >
              <img
                className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                src={T.imageUrl}
                alt={T.title}
              />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                {T.title}
              </h2>
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl font-extrabold tracking-wide text-gray-800">
                  {T.description || "No description available"}
                </h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                  {/* Optionally you can show a snippet or full description here */}
                  {T.shortDescription ||
                    T.description ||
                    "Explore this destination..."}
                </p>
                <p className="font-bold text-lg text-gray-900">
                  Price:RS:{T.pricePerDayPerAdult || "N/A"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Tours;