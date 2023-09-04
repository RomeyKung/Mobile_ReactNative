import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";
import Example05 from "./examples/Example05";
import Example06 from "./examples/Example06";
import Example07 from "./examples/Example07";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spring from "./Screens/Spring";
import Sequence from "./Screens/Sequence";
import Parallel from "./Screens/Parallel";


function TabNav(){
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Spring" component={Spring} />
        <Tab.Screen name="Sequence" component={Sequence} />
        <Tab.Screen name="Parallel" component={Parallel} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default function App() {
  // return <Example01 />;
  // return <Example02 />;
  // return <Example03 />;
  // return <Example04 />;
  // return <Example05 />;
  // return <Example06 />;
  // return <Example07 />;
  return <TabNav />;

}


