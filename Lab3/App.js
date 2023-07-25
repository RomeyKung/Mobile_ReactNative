import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Lab21, Lab22, Lab31, Lab32 } from './lab_components/index';

import { AppRegistry } from 'react-native';
import App from './App'; // Ensure that './App' points to your main component
import { name as appName } from './app.json';



const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Lab2_1"
        onPress={() => navigation.navigate('Lab21')}
      />
      <Button
        title="Lab2_2"
        onPress={() => navigation.navigate('Lab22')}
      />

      <Button
        title="Lab3_1"
        onPress={() => navigation.navigate('Lab31')}
      />
      <Button
        title="Lab3_2"
        onPress={() => navigation.navigate('Lab32')}
      />

    </View>
  );
};

export default function Lab3() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lab' }}
        />
        <Stack.Screen
          name="Lab21"
          component={Lab21}
        />
        <Stack.Screen
          name="Lab22"
          component={Lab22}
        />

        <Stack.Screen
          name="Lab31"
          component={Lab31}
        />
        <Stack.Screen
          name="Lab32"
          component={Lab32}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => App);
