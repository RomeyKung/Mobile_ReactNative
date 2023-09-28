import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import MyNavigator from './navigation/MyNavigator';
import store from './store/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>
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
