import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import ProgramScreen from "../screens/Program";
import Detail from "../screens/Detail";
import Plan from "../screens/Plan";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();
const detailstack = createNativeStackNavigator();

function ProgramNav() {
  return (
    <stack.Navigator
      initialRouteName="ProgramScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "lightblue" },
        headerTintColor: "white",
      }}
    >
      <stack.Screen
        name="ProgramScreen"
        component={ProgramScreen}
        options={{ title: "Bachelor Programs" }}
      />
      <stack.Screen name="Detail" component={Detail} />
      <stack.Screen name="Plan" component={Plan} />
    </stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "darkblue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#F5F5F5" },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="apple1" size={size} color={color} />;
            },
            headerShown: false,
            title: "Home",
          }}
        />
        <Tab.Screen
          name="Program"
          component={ProgramNav}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="star" size={size} color={color} />;
            },
            headerShown: false,
            title: "Program",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
