import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';

class Available extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }
  renderAvailable() {
    let properties = Array.from(this.props.properties);
    return properties
      .filter(property => property.available === true)
      .map(available => {
        return (
          <div
            key={available.label}
            className="availableBlock col-xs-12 col-sm-6 col-xl-4"
            style={{'padding': '1px'}}
          >
            <Link className="viewDetails" to={`/property/${available.label}`}>View Details</Link>
            <img
              className="availableImage"
              src={
                available.images[0]
                  ? available.images[0]
                  : "https://drive.google.com/uc?export=view&id=16iXzf2QZ4vf42Lzy55Z6NDViDd2Cs54G"
              }
              alt={available.label}
            />
            <div className="availableDescription">
              <p>{available.address.slice(0, available.address.indexOf(','))}</p>
              <p>{available.township_borough}<span>${available.rent}</span></p>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        <div className="nowLeasing row d-flex justify-content-center">NOW LEASING</div>
        <div className="row">{this.renderAvailable()}</div>
      </div>
    );
  }
}

export function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps, { fetchProperties })(Available);
