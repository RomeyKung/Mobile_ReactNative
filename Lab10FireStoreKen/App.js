import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewStudent from "./examples/ViewStudent";
import AddStudent from "./examples/AddStudent";
import UpdateStudent from "./examples/UpdateStudent";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
            headerTintColor:'white'
          }}
        />
        <Stack.Screen
          name="ViewStudentList"
          component={ViewStudent}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
            headerTintColor:'white'
          }}
        />
        <Stack.Screen
          name="UpdateStudentInfo"
          component={UpdateStudent}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
            headerTintColor:'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
