import React from 'react';
import Available from './properties/Available';
import Subscribe from './Subscribe';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Home</h2>
      <Available />
      <Link to="/application">Apply Now</Link>
      <Subscribe />
    </div>
  );
};

export default Home;
