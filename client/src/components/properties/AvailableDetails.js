import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAvailableDetails } from '../../actions';
import SimpleSlider from '../../utils/ImageSlideshow';

class AvailableDetails extends Component {


    componentDidMount() {
        this.props.fetchAvailableDetails(this.props.match.params.label);
    }
    render() {
        const property = this.props.properties;
        const images = property.images;
        return (
            <div>
                <SimpleSlider images={images}/>
                {/* {images} */}

                <div>{this.props.match.params.label}</div>
                <div>{property.address}</div>
            </div>
        )
    }
}
function mapStateToProps({properties}) {
    return {properties}
}

export default connect(mapStateToProps, { fetchAvailableDetails })(AvailableDetails);