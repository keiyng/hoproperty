import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';

class Available extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  renderAvailable() {
    return this.props.properties.filter(property => property.available === true)
      .map(available => {
        return (
          <div key={available.label} style={{float: 'left', marginTop: '20px', textAlign: 'left', marginBottom: '40px', marginRight: '22px', backgroundColor: '#fff', opacity: '0.9', padding: '5px', borderRadius: '3px', border: '1px solid gray'}}>
            <img
              width="250px"
              height="180px"
              src={
                available.images[0]
                  ? available.images[0]
                  : 'https://drive.google.com/uc?export=view&id=16iXzf2QZ4vf42Lzy55Z6NDViDd2Cs54G'
              }
              alt={available.label}
            />
            <div><strong>${available.rent}</strong></div>
            <div style={{width: '200px'}}>{available.address}</div>
            <button type="button" className="btn btn-info" style={{marginTop: '10px'}}><Link style={{width: '200px', color: '#fff'}} to={`/property/${available.label}`}>View Details</Link></button>
          </div>
        );
      });
  }

  render() {
    return (
      <div style={{paddingLeft: '50px'}}>
        <div>{this.renderAvailable()}</div>
      </div>
    );
  }
}

export function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps, { fetchProperties })(Available);
