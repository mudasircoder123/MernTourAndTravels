import React, { useState, useEffect } from 'react';

const TrekkingSlotBooking = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch available dates for trekking slots
    setAvailableDates(['2025-01-20', '2025-01-22', '2025-01-25']);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Trekking Slot Availability</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {availableDates.map((date) => (
          <button 
            key={date} 
            onClick={() => setSelectedDate(date)} 
            style={{
              padding: '10px 20px',
              backgroundColor: selectedDate === date ? '#4CAF50' : '#008CBA',
              color: 'white',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}>
            {date}
          </button>
        ))}
      </div>
      {selectedDate && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>You have selected: {selectedDate}</h3>
        </div>
      )}
    </div>
  );
};

export default TrekkingSlotBooking;
