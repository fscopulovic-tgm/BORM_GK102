/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// Import of the components
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import Profile from './Components/Profile.js';

// Import of the things needed for the navigation
import {
  Router,
  Scene,
} from 'react-native-router-flux';

// Main class of the application
export default class App extends Component<{}> {

  /* 
  * The render method returns the components for the navigation.
  * It does not return a single component but a definition of multiple components.
  * It starts with the Router tag, this is the parent of every other Scene.
  * The Scene component with the key root is the parent of the other Scenes.
  * The other Scenes have a key that generate methods that can be called to render the Scene.
  * The property component says which component needs to be used.
  * And the title just says which title the Scene has. 
  * The title will be written in the navigation bar which is on the top of the component.
  * The Home-Scene has also an inital property which states that this is the first Scene to render.
  */
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key={'home'} 
            title="React-Native Authentication Application"
            component={Home}
            inital 
          />
          <Scene key={'login'}
            title="Login"
            component={Login}
          />
          <Scene key={'register'}
            title="Register"
            component={Register}
          />
          <Scene key={'profile'}
            title="Profile"
            component={Profile}
          />
        </Scene>
      </Router>
    );
  }
}