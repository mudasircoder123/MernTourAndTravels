import React, { useEffect, useState } from "react";
import Navbar from "./SideBar";
import { Modal, Form, Input, InputNumber, Button } from "antd";
const CampingGearList = () => {
  const [gears, setGears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8082/api/gears")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch gears");
        return response.json();
      })
      .then((data) => {
        setGears(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading gears...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
      <>
        <Navbar />
        <section className="py-20">
          <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">
            Camping Gear <span className="text-blue-600">.</span>
          </h1>
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {gears.map((gear) => (
              <article
                key={gear.id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={gear.image}
                    alt={gear.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="mt-1 p-2">
                  <h2 className="text-slate-700 text-lg font-bold">
                    {gear.name}
                  </h2>
                  <p className="text-slate-400 mt-1 text-sm">
                    {gear.category} - {gear.brand}
                  </p>
                  <p className="text-gray-500 mt-1 text-sm">
                    {gear.description}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p>
                      <span className="text-lg font-bold text-blue-500">
                        ${gear.price}
                      </span>
                    </p>
                    
                            <button class="bg-green-500 text-white rounded-[8px] px-2 py-2 w-[35%]
   md:max-w-[40%]  lg:max-w-[55%]transition duration-300 hover:bg-green-600">
          Click me
     </button>
                    
                    <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
};

export default CampingGearList;
