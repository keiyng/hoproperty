import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Available extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  renderAvailable() {
    return this.props.properties.filter(property => property.available === true)
      .map(available => {
        return (
          <div key={available.label}>
            <img
              width="250px"
              height="180px"
              src={
                available.images[0]
                  ? available.images[0]
                  : 'https://lh3.googleusercontent.com/knpW7gIpy683LObw_DS623zOpyZq-7AzfR9InOOEI0xaCTVNK2goP5pazAUWg_nXnZxiEBmxVQUgvvEhR9Epz87R8my7a1bJHxr0O4GX6BEORrFE_AHRXX_TBHF7J7XNKSr8uhJfqCjNBkGqfDW1VWHC1wSuKk-DQbM9N8a1792-hoExkn8PVjjZ3fFcTpLaFqzfCZyAPBFKPAtNtxTwdiAKvkygmhwWnT79naVRuss_EHYZ3vuPWHOY0h_J6dG2ImVrU2L26fgZmRP5d2RM6hRKL6C_vMJlLwu9bUOGY9fa4980vrKTlixzSFGvWnHrElu2V6MuFWfOQj9D4xmdeuoimhTXmTh0IEjGeP34U5WpPajK8qh9puROm9va41Qi-D_wejQO5hrx9CHFp33YBvbHl0mhov1eZx5Sz7POqyhg7HkbWEDKSyKwQ03t6sjkfrHYsawizXHD4pUQVXXPL_6eEUAT5fqNQ0HZvToFunEAS5pC2INss3Ujbml06zQ3_2rIv-qDMgTxdlqiWD0-jzUQR8pxjJJ-e4gZWywIm-KoomTx4bHZ0PW-96b2z0zeY4qMxYqumi9DrD1CgoaXZYQDwlKNNzKDJR9FN7I=w400-h300-no'
              }
              alt={available.label}
            />
            <div>{available.address}</div>
            <Link to={`/property/${available.label}`}>View Details</Link>
          </div>
        );
      });
  }

  renderImages() {
    return this.props.properties
      .filter(property => property.available === true)
      .map(available => {
        return _.map(available.images, image => {
          return (
            <img
              width="150px"
              height="100px"
              key={image}
              src={image}
              alt={available.label}
            />
          );
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Available</h1>
        {/* <div>{this.renderImages()}</div> */}
        <div>{this.renderAvailable()}</div>
      </div>
    );
  }
}

export function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps, { fetchProperties })(Available);
