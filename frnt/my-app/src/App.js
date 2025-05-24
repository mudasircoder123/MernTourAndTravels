import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourDetail from './TripPackage';
import BookingForm from './BookingForm';
import TrekkingSlotBooking from './TrekkingSlotBooking';
import Random from './c0';
import TourList from './Tours';
import Bikes from './Bikes';
import Cars from './Cars';
import Register from './Register';
import SignInForm from './Sign';
import About from './About';
import Home from './Home';
import CampingGearList from './Gears';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* Define the route for the tour card page */}

          <Route path="/" element={<SignInForm />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/tours" element={<TourList />} />

          {/* Define the route for the trip package details page */}
          <Route path="/tours/:id" element={<TourDetail />} />

          {/* Define the route for the trekking slot booking page */}
          <Route path="/trekking" element={<TrekkingSlotBooking />} />

          {/* Define the route for the booking form page */}
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirm" element={<Random />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
        <Route path='/gears' element={<CampingGearList/>}/>
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
