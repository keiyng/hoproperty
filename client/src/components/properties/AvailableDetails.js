import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAvailableDetails } from '../../actions';
import ImageSlider from '../../utils/ImageSlider';
import { Link } from 'react-router-dom';
import GoogleMap from '../google_map/Map';
import axios from 'axios';
import keys from '../../keys';

class AvailableDetails extends PureComponent {
  componentDidMount() {
    this.props.fetchAvailableDetails(this.props.match.params.label);
  }

  componentDidUpdate(prevProps, prevState) {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          this.props.properties.address
        }&key=${keys.googleMapKey}`
      )
      .then(res => {
        if (this.state === prevState) {
          this.setState({ loc: res.data.results[0].geometry.location });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const property = this.props.properties;
    const images = property.images;

    return (
      <div className="availableDetailsContainer">
        <div className="upperDetailsContainer row">
          <div className="sliderContainer col-md-5 col-lg-4">
            <ImageSlider images={images} />
          </div>
          <div className="mapContainer col-md-7 col-lg-8">
            {this.state &&
              this.state.loc &&
              property.address && (
                <GoogleMap
                  location={this.state.loc}
                  address={property.address}
                  
                />
              )}
          </div>
        </div>
        <div className="lowerDetailsContainer">
          <h5>{property.address}</h5>
          <div className="detailsContainer row">
            <div style={{ borderRight: '1px solid gray' }} className="col-md">
              <h6>RENT &amp; FEES</h6>
              <ul style={{ textAlign: 'center' }}>
                <li>${property.rent}/month</li>
                <li>1.5 month security deposit</li>
                <li>Tenant is responsible for all utilities</li>
              </ul>
            </div>
            <div style={{ borderRight: '1px solid gray' }} className="col-md">
              <h6>FEATURES</h6>
              <ul style={{ textAlign: 'center' }}>
                <li>{property.type}</li>
                <li>
                  {property.bedroom}{' '}
                  {Number(property.bedroom) === 1 ? 'bedroom' : 'bedrooms'}
                </li>
                <li>
                  {property.bathroom}{' '}
                  {Number(property.bathroom) === 1 ? 'bathroom' : 'bathrooms'}
                </li>
                <li>{property.square_feet === '' ? '-' : property.square_feet} sq. feet</li>
                <li>Laundry - {property.laundry}</li>
                <li>Parking - {property.parking}</li>
              </ul>
            </div>
            <div className="col-md">
              <h6>MUNICIPALITY</h6>
              <ul style={{ textAlign: 'center' }}>
                <li>{property.county} county</li>
                <li>{property.township_borough}</li>
              </ul>
            </div>
          </div>
          <div className="actionContainer">
            <Link
              to="/application"
              className="forward"
            >
              Apply Now
            </Link>
            <Link
              to="/"
              className="backward"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps, { fetchAvailableDetails })(
  AvailableDetails
);
