import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TourDetail = () => {
  const { id } = useParams(); // Get the tour ID from the URL params
  const navigate = useNavigate(); // To navigate to the booking page
  const [tour, setTour] = useState(null); // To store the fetched tour details
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any errors during fetch
  const [pax, setPax] = useState(1); // Number of adults
  const [children, setChildren] = useState(0); // Number of children
  const [date, setDate] = useState(''); // Date for booking
  const [totalPrice, setTotalPrice] = useState(0); // Total price

  // Fetch tour data from the server
  useEffect(() => {
    fetch(`http://localhost:8082/api/destinies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTour(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Tour not found');
        setLoading(false);
      });
  }, [id]);

  // Calculate the total price based on pax, children, and days in the itinerary
  const updatePrice = () => {
    if (tour) {
      const totalPax = Math.max(pax, 1);  // Ensure at least 1 adult
      const totalChildren = Math.max(children, 0);  // Ensure no negative children
      const totalDays = tour.itinerary.length || 1;  // Default to 1 if itinerary is empty (i.e., 1 day)

      // Calculate the total price for adults
      const adultPrice = totalPax * tour.pricePerDayPerAdult * totalDays;

      // Calculate the total price for children (if any)
      const childPrice = totalChildren * (tour.pricePerDayPerChild || 2000) * totalDays;

      // Total price is the sum of both adult and child prices
      const total = adultPrice + childPrice;

      setTotalPrice(total);  // Update the total price state
    }
  };

  // Recalculate price whenever pax, children, or tour data changes
  useEffect(() => {
    updatePrice();
  }, [pax, children, tour]);

  // Handle navigation to booking page
  const handleBooking = () => {
    // Ensure the required fields are filled before proceeding
    if (!date) {
      alert('Please select a date.');
      return;
    }
    if (pax <= 0) {
      alert('Please enter a valid number of adults.');
      return;
    }
    if (children < 0) {
      alert('Please enter a valid number of children.');
      return;
    }

    // Navigate to the booking page with the state (pax, children, date, totalPrice)
    navigate('/booking', {
      state: {
        pax,
        children,
        date,
        totalPrice,
      },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
      {/* Tour Image */}
      <img className="w-full h-64 object-cover" src={tour.imageUrl || 'https://via.placeholder.com/300'} alt={tour.title} />

      {/* Tour Title and Description */}
      <h2 className="text-xl font-semibold mt-4">{tour.title}</h2>
      <p className="text-gray-700 mt-2">{tour.description}</p>

      {/* Date Selection */}
      <div className="mt-4">
        <label className="block text-gray-600">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full py-2 px-3 border rounded-md mt-2"
        />
      </div>

      {/* Number of Adults and Children */}
      <div className="mt-4 flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-600">Adults (Above 6 Yrs):</label>
          <input
            type="number"
            value={pax}
            onChange={(e) => setPax(Math.max(1, e.target.value))}  // Ensure at least 1 adult
            className="w-full py-2 px-3 border rounded-md mt-2"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-600">Children (Below 6 Yrs):</label>
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(Math.max(0, e.target.value))}  // Ensure no negative children
            className="w-full py-2 px-3 border rounded-md mt-2"
          />
        </div>
      </div>

      {/* Total Price Display */}
      <div className="mt-4 text-lg font-semibold text-green-600">
        Total Price: ₹{totalPrice}
      </div>

      {/* Navigate to Booking Form */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleBooking}>
          Go to Booking Form
        </button>
      </div>

      {/* Itinerary */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Itinerary:</h3>
        <ul className="space-y-2">
          {tour.itinerary.map((item) => (
            <li key={item.day} className="text-gray-700">
              <strong>Day {item.day}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Per Day for Adults */}
      <div className="mt-6 text-lg font-semibold">
        Price: ₹{tour.pricePerDayPerAdult} per day per adult
      </div>
    </div>
  );
};

export default TourDetail;

