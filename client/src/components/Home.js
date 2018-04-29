import React, {Component} from 'react';
import Available from './properties/Available';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
          <h1 style={{marginTop: '20px', fontSize: '28px'}}>✦NOW LEASING✦</h1>
          <strong><Link to="/application" className="btn btn-danger" style={{color: '#fff'}}>Apply Now</Link></strong>
        <Available />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home);
