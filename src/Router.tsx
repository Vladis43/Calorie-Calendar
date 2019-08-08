import React from 'react';
import { Router, Scene } from "react-native-router-flux";

import Home from './containers/Home';
import SignIn from './containers/SignIn';

const Routes: React.SFC = () => (
  <Router>
    <Scene key="root">
      <Scene key="signIn" component={SignIn} hideNavBar initial/>
      <Scene key="home" component={Home} title="Home page"/>
    </Scene>
  </Router>
);

export default Routes;