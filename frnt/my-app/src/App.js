import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourDetail from './TripPackage';
import BookingForm from './BookingForm';
import TrekkingSlotBooking from './TrekkingSlotBooking';
import Random from './c0';
import TourList from './TourCard';
import Bikes from './Bikes';
import Cars from './Cars';
import Register from './Register';
import SignInForm from './Sign';
const App = () => {
  return (
    <Router>
   <div>
  <Routes>
<Route path='/' element={<Register/>}/>
   {/* Define the route for the tour card page */}
<Route path='/login' element={<SignInForm/>} />
   <Route path="/trip" element={<TourList />} />

     {/* Define the route for the trip package details page */}
          <Route path="/trip/:id" element={<TourDetail />} />

          {/* Define the route for the trekking slot booking page */}
          <Route path="/trekking" element={<TrekkingSlotBooking />} />

          {/* Define the route for the booking form page */}
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirm" element={<Random />} />
          <Route path='/bikes' element={<Bikes/>}/>
          <Route path='/cars' element={<Cars/>}/>
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
