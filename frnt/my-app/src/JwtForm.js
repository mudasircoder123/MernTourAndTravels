import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const JwtForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/api/users', { name, email, password })
      .then(() => {
        alert('User registered successfully');
        navigate('/page');
      })
      .catch(err => {
        console.error(err);
        alert(`An error occurred: ${err.response?.data?.message || err.message}`);
      });
  };

  return (
    <>
      <h2>JWT Form</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default JwtForm;
