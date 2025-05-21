import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from './image/img1';
const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    const { name, email, password, termsAccepted } = values;

    axios
      .post("http://localhost:8082/api/register", {
        name,
        email,
        password,
        termsAccepted,
      })
      .then(() => {
        //message.success("User registered successfully");
        navigate("/trip"); // Redirect to the trip page after successful registration
      })
      .catch((err) => {
        //message.error("Registration failed");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <form
        action=""
        class="lg:p-16 p-6  w-[450px] border-2 border-grey mx-auto rounded justify "
      >
        <div class="relative mb-6  ">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Full Name{" "}
            <svg
              width="7"
              height="7"
              class="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 
    text-base font-normal shadow-xs text-gray-900 bg-transparent
    border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="Name..."
            required=""
          />
        </div>
        <div class="relative mb-6">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Email{" "}
            <svg
              width="7"
              height="7"
              class="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal 
     shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full
     placeholder-gray-400 focus:outline-none "
            placeholder="Email address..."
            required=""
          />
        </div>
        <div class="relative mb-6">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Username{" "}
            <svg
              width="7"
              height="7"
              class="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            class="block w-full h-11 px-5 py-2.5 bg-white 
  leading-7 text-base font-normal
  shadow-xs text-gray-900 bg-transparent
  border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="Username..."
            required=""
          />
        </div>
        <div class="relative mb-6">
          <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Password{" "}
            <svg
              width="7"
              height="7"
              class="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-11 px-5 py-2.5 bg-white 
 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent
 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
            placeholder="**********"
            required=""
          />
        </div>

        <button class="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
