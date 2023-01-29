import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import BookingForm from './components/Reserve';

function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ]);

  const handleBooking = (time) => {
    setAvailableTimes(availableTimes.filter((t) => t !== time));
  };
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Our favorites" data={productData} />
      <Feature />
      <BookingForm onBooking={handleBooking} />
      <Footer />
    </Router>
  );
}

export default App;
