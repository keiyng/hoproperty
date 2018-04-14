import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAvailableDetails } from '../../actions';
import SimpleSlider from '../../utils/ImageSlideshow';
import {Link} from 'react-router-dom';

class AvailableDetails extends Component {


    componentDidMount() {
        this.props.fetchAvailableDetails(this.props.match.params.label);
    }
    render() {
        const property = this.props.properties;
        const images = property.images;
        return (
            <div style={{'padding-top': '15px'}}>
                <SimpleSlider images={images}/>

                {/* <div>{this.props.match.params.label}</div> */}
                <h4>{property.address}</h4>
                <div>
                    <div>${property.rent}/month</div>
                    <div>1.5 month security deposit</div>
                    <div>Tenant pays for all utilities</div>
                </div>
                <div>
                    <div>{property.type}</div>
                    <div>{property.bedroom} bedrooms</div>
                    <div>{property.bathroom} bathrooms</div>
                    <div>{property.square_feet} sq. feet</div>
                    <div>{property.laundry}</div>
                    <div>{property.parking} parking</div>
                </div>
                <div>
                    <div>{property.county} county</div>
                    <div>{property.township_borough}</div>
                </div>
                <Link to="/application">Apply Now</Link>
            </div>
        )
    }
}
function mapStateToProps({properties}) {
    return {properties}
}

export default connect(mapStateToProps, { fetchAvailableDetails })(AvailableDetails);