import React from 'react';
import Available from './properties/Available';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ textAlign: 'center'}}>
        <h1 style={{marginTop: '20px', fontSize: '28px'}}>✦NOW LEASING✦</h1>
        <button type="button" className="btn btn-danger"><strong><Link to="/application" style={{color: '#fff'}}>Apply Now</Link></strong></button>
      <Available/>
    </div>
  );
};

export default Home;
