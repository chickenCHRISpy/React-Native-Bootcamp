import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

//bring al screens
import Home from './screens/Home'
import Address from './screens/Add'
import Edit from './screens/Edit'
import { Stack } from 'native-base';

const stack = createStackNavigator();


export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerStyle: { backgroundColor: "0f4c75"},
          title: 'LCO netflix App',
          headerTitleStyle:{
            textAlign: "center",
            color: "00b7c2",
          }
        }}
        >

        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
