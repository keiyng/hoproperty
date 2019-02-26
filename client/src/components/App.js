import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Home from './Home';
import Property from './properties/Property';
import AvailableDetails from './properties/AvailableDetails';
import Application from './application/Application';
import QueryForm from './QueryForm';
import SubscribeForm from './SubscribeForm';
import UnsubscribeForm from './UnsubscribeForm';
import UpdatePreferenceForm from './UpdatePreferenceForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


class App extends Component {
  render() {
    let d = new Date();
    return (
      <div>
        <BrowserRouter>
          <div>
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/property" component={Property} />
            <Route exact path="/property/:label" component={AvailableDetails}/>
            <Route exact path="/application" component={Application} />
            <Route exact path="/contact" component={QueryForm}/>
            <Route exact path="/subscribe" component={SubscribeForm}/>
            <Route exact path="/update_preference" component={UpdatePreferenceForm}/>
            <Route exact path="/unsubscribe" component={UnsubscribeForm}/>
          </div>
        </BrowserRouter>
        <footer>Copyright © Ho Property, LLC {d.getFullYear()}</footer>
      </div>
    );
  }
}

export default connect(null, actions)(App);
