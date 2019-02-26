import React, {PureComponent} from 'react';
import Available from './properties/Available';
import {connect} from 'react-redux';

class Home extends PureComponent {

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
