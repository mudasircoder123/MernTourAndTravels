import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const BookingForm = () => {
  const location = useLocation();
  const { date, pax, children, totalPrice } = location.state || {};

  // States for user details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
const Navigate = useNavigate();
  // States for form validation and submission status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validate email format
  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  // Validate phone number (simple check for length)
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  // Handle form submission
  const handleBooking = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validation checks
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Phone number should be exactly 10 digits.');
      return;
    }

    if (!name || !address) {
      setError('Please fill in all the required fields.');
      return;
    }

    // Start loading
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8082';
      const response = await axios.post(`${API_URL}/api/bookings`, {
        name,
        email,
        phone,
        address,
        pax,  // Renamed pax to adults in your backend
        children,
        date,
        totalPrice,
      });

      if (response.status === 201) {
        // Show success message
        setSuccessMessage(`Booking confirmed for ${name} (${email}, ${phone}), ${address}`);
        console.log(response);
     Navigate('/confirm');
        // Reset form (optional)
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
      }
    } catch (error) {
      console.error('Error while confirming the booking:', error);
      setError('Something went wrong while confirming your booking. Please try again.');
    } finally {
      setLoading(false); // Stop loading after the request completes
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '50px auto', padding: '20px', maxWidth: '600px', background: '#fff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Booking Form</h1>
      <div>
        <p>Date: {date}</p>
        <p>Adults: {pax}</p>
        <p>Children: {children}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>

      {/* Error Message */}
      {error && <div style={{ color: 'white', backgroundColor: '#dc3545', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>{error}</div>}

      {/* Success Message */}
      {successMessage && <div style={{ color: 'white', backgroundColor: '#28a745', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>{successMessage}</div>}

      <form onSubmit={handleBooking}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Confirming Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;





