import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropertySearch from './PropertySearch';
import { fetchProperties } from '../../actions';
import GoogleMap from '../google_map/MapAll';

class Property extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {
    let properties = Array.from(this.props.properties);

    return (
      <div>
        <GoogleMap properties={properties} />
        <PropertySearch properties={properties} />
      </div>
    );
  }
}
function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps, { fetchProperties })(Property);
