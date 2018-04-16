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
          {this.props.history.action === 'PUSH' && <div style={{color: '#46A346', margigBottom: '10px', fontSize: '1.3em'}}>Your form has been sent. Thank you!</div>}
          <h1 style={{marginTop: '20px', fontSize: '28px'}}>✦NOW LEASING✦</h1>
          <button type="button" className="btn btn-danger"><strong><Link to="/application" style={{color: '#fff'}}>Apply Now</Link></strong></button>
        <Available/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home);
