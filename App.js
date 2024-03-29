import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login_screen';
import InactiveElevators from './screens/inactive_Elevators';
import InactiveStatus from './screens/inactive_status';
import ActiveElevators from './screens/active_Elevators';
import ActiveStatus from './screens/active_status';
import HomePage from './screens/home_screen'



const navigator = createStackNavigator(
  {
    ActiveElevators: ActiveElevators,
    ActiveStatus: ActiveStatus,
    Login: Login,
    InactiveElevators: InactiveElevators,
    InactiveStatus: InactiveStatus,
    Home: HomePage
  },
  {
    initialRouteName: 'Login',
  
  }

);


export default createAppContainer(navigator);


