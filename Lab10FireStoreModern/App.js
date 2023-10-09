import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AddStudents from "./screens/AddStudents.js";
import ViewStudents from "./screens/ViewStudents.js";
import InfoStudent from "./screens/InfoStudent.js";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="add" component={AddStudents}  options={{headerTitle:"Add Student"}}/>
        <Stack.Screen name="view" component={ViewStudents}  options={{headerTitle:"Student List"}}/>
        <Stack.Screen name="info" component={InfoStudent}  options={{headerTitle:"Student Info"}}/>
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
