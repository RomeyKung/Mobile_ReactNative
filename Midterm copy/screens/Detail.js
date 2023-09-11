import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
export default function Detail(props) {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold"}}>{props.route.params.name}</Text>
      <Text>หน่วยกิต: {props.route.params.time}</Text>
      <Text style={{width:"80%"}}>หลักสูตร:{props.route.params.content} </Text>
      <Button title="VIEW STUDY PLAN" onPress={()=> props.navigation.navigate("Plan",{first:props.first, second:props.second})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgs: {
    width: 120,
    height: 120,
  },
  buttons: {
    // backgroundColor: "red",
    justifyContent: "flex-end",
    rowGap: 20,
    margin: 20,
  },

});