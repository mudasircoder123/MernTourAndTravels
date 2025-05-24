import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./SideBar";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8082/api/register", {
        name,
        email,
        password,
        
      })
      .then(() => {
        navigate("/tours");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="lg:p-16 p-6 w-[450px] border-2 border-grey mx-auto rounded "
        >
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-5 py-2.5 border border-gray-300 rounded-full"
              placeholder="Name..."
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-5 py-2.5 border border-gray-300 rounded-full"
              placeholder="Email..."
              required
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-5 py-2.5 border border-gray-300 rounded-full"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 text-white rounded-full"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
