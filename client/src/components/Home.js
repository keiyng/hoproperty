import React, {Component} from 'react';
import Available from './properties/Available';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <Available />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home);
