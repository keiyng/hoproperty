import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Home from './Home';
import Property from './properties/Property';
import AvailableDetails from './properties/AvailableDetails';
import Application from './application/Application';
import TenantHome from './tenants/TenantHome';
import QueryForm from './QueryForm';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/property" component={Property} />
            <Route exact path="/property/:label" component={AvailableDetails}/>
            <Route exact path="/application" component={Application} />
            <Route exact path="/tenant" component={TenantHome} />
            <Route exact path="/contact" component={QueryForm}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
// actions are assigned to App as props
// ** mapDispatchToProps
export default connect(null, actions)(App);
