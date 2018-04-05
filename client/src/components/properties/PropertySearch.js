import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import { Link } from 'react-router-dom';

class PropertySearch extends Component {
  constructor(){
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
        <div key={res.label}>
        <div>{res.address}</div>
        <div>{res.county}</div>
        <div>{res.township_borough}</div>
        {this.state.input !== '' && <div>{res.available ? "available" : <Link to="/contact">please ask</Link>}</div>}
        </div>
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
      <div>
        <h3>Search</h3>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
        <div>{this.renderSearchProperties()}</div>
      </div>
    );
  }
}

function mapStateToProps({ properties }) {
  return { properties };
}
export default connect(mapStateToProps, { fetchProperties })(PropertySearch);
