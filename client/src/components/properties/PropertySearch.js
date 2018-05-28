import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropertySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  renderSearchProperties() {
    const properties = this.props.properties.sort((a, b) => {
      const addressA = a.address.toUpperCase();
      const addressB = b.address.toUpperCase();
      return addressA < addressB ? -1 : addressA > addressB ? 1 : 0;
    });

    return properties
      .filter(
        search =>
          this.state.input === '' ||
          search.address
            .toLowerCase()
            .includes(this.state.input.toLowerCase()) ||
          search.county.toLowerCase().includes(this.state.input.toLowerCase())
      )
      .map(res => {
        return (
          <tr key={res.label}>
            <td>{res.address}</td>
            <td>{res.county}</td>
            <td>{res.bedroom}</td>
            <td>
              {res.available ? (
                <Link to={`/property/${res.label}`}>available for rent</Link>
              ) : (
                <Link to="/contact">ask us</Link>
              )}
            </td>
          </tr>
        );
      });
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <p className="propertiesIntro">
          Ho Property, LLC owns over 100 residential properties in central and northen New Jersey. Investors please feel free to{' '}
          <Link to="/contact">contact us</Link> to discuss your offer.
        </p>
        <input
          value={this.state.input}
          type="text"
          onChange={this.onChangeHandler.bind(this)}
          placeholder="search city, zip or county"
          size="40"
          className="propertiesSearchInput"
        />

        <table
          className="propertiesTable"
        >
          <thead>
            {this.renderSearchProperties().length > 0 && (
              <tr>
                <th>Address</th>
                <th>County</th>
                <th>Bed</th>
                <th>Availability</th>
              </tr>
            )}
          </thead>
          {this.renderSearchProperties().length > 0 && (
            <tbody>{this.renderSearchProperties()}</tbody>
          )}
        </table>
        {this.renderSearchProperties().length === 0 && <div>No matches.</div>}
      </div>
    );
  }
}

export default PropertySearch;
