import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {store} from './src/redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen component={LoginScreen} name="LoginScreen" />
          <Stack.Screen component={HomeScreen} name="HomeScreen" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
