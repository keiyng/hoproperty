import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAvailableDetails } from '../../actions';
import SimpleSlider from '../../utils/ImageSlideshow';
import { Link } from 'react-router-dom';

class AvailableDetails extends Component {
  componentDidMount() {
    this.props.fetchAvailableDetails(this.props.match.params.label);
  }
  render() {
    const property = this.props.properties;
    const images = property.images;
    return (
      <div className="availableDetailsContainer">
      <div>
        <div className="sliderContainer">
        <SimpleSlider images={images} />
        </div>
        <div className="detailsContainer" style={{ marginTop: '40px'}}>
        <h5 style={{marginBottom: '20px'}}>{property.address}</h5>
          <div style={{float: 'left', marginRight: '10px'}}>
            <h6>Rent &amp; Fees</h6>
            <div>${property.rent}/month</div>
            <div>1.5 month security deposit</div>
            <div>Tenant pays for all utilities</div>
          </div>
          <div style={{float: 'left', marginRight: '10px' }}>
            <h6>Features</h6>
            <div>{property.type}</div>
            <div>{property.bedroom} bedrooms</div>
            <div>{property.bathroom} bathrooms</div>
            <div>{property.square_feet} sq. feet</div>
            <div>{property.laundry}</div>
            <div>{property.parking} parking</div>
          </div>
          <div style={{float: 'left', marginRight: '10px' }}>
            <h6>Location</h6>
            <div>{property.county} county</div>
            <div>{property.township_borough}</div>
          </div>
          <div style={{clear: 'left', width: '400px', margin: '0 auto'}}>

            <Link to="/application" className="btn btn-danger" style={{ color: '#fff', marginTop: '25px', marginRight: '15px' }}>
              Apply Now
            </Link>


            <Link to="/" className="btn btn-secondary" style={{ color: '#fff', marginTop: '25px', marginRight: '15px' }}>
              Back
            </Link>
            </div>
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
