import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';

class PropertySearch extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  componentDidMount() {
    this.props.fetchProperties();
  }

  renderSearchProperties() {
    return this.props.properties.filter(search => this.state.input === '' || search.address.toLowerCase().includes(this.state.input.toLowerCase()) || search.county.toLowerCase().includes(this.state.input.toLowerCase())).map(res => {
      return (
        <tr key={res.label}>
        <td>{res.address}</td>
        <td>{res.county}</td>
        <td>{res.type}</td>
        <td>{res.bedroom}</td>
        {this.state.input !== '' && <td>{res.available ? <Link to={`/property/${res.label}`}>available for rent</Link> : <Link to="/contact">ask us</Link>}</td>}
        </tr>
      )
    })
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div style={{paddingTop: '20px'}}>
        <p style={{width: '600px'}}>
          Ho Property, LLC owns over 100 residential properties in New Jersey.
          You can use the search option below to filter the peoperties list.
          Investors please feel free to <Link to='/contact'>contact us</Link> to discuss your offers.
        </p>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)} placeholder='search city, zip or county' size="40" style={{border: '4px double gray', outline: 'none'}}/>
        <table cellpadding='10px' style={{backgroundColor: '#fff', opacity: '0.85', marginBottom: '20px'}}>
        {this.renderSearchProperties().length !== 0 &&
          <tr>
            <th>Address</th>
            <th>County</th>
            <th>Property Type</th>
            <th>Bedrooms</th>
            {this.state.input !== '' && <th>Availability</th>}
          </tr>}
            {this.renderSearchProperties().length === 0 && <div>No matches.</div>}
            {this.renderSearchProperties()}
            {this.renderSearchProperties()}
        </table>
      </div>
    );
  }
}

function mapStateToProps({ properties }) {
  return { properties };
}
export default connect(mapStateToProps, { fetchProperties })(PropertySearch);
