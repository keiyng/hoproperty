import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';

class PropertySearch extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }
  renderProperties() {
    return this.props.properties.map(property => {
      return (
        <div key={property.label}>
          <div>{property.address}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <div>{this.renderProperties()}</div>
      </div>
    );
  }
}

function mapStateToProps({ properties }) {
  return { properties };
}
export default connect(mapStateToProps, { fetchProperties })(PropertySearch);
