import React from 'react';
import Available from './properties/Available';
import SubscribeForm from './SubscribeForm';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Home</h2>
      <Available />
      <Link to="/application">Apply Now</Link>
      <SubscribeForm />
    </div>
  );
};

export default Home;
