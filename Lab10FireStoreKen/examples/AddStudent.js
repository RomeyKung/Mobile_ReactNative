import React, { useState } from "react"; // Import useState
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

function AddStudent({navigation}) {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [gpa, setgpa] = useState("");

  const storeStudents = () => {
    firebase
      .firestore()
      .collection("students")
      .add({
        id: id,
        name: name,
        gpa: gpa,
      })
      .then(() => {
        setid("");
        setName("");
        setgpa("");
        Alert.alert("Adding Alert", "New Student was added!! Pls check your DB!!");
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/IT_Logo.png")}
        style={{ width: 120, height: 100 }}
        containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Input
        placeholder={"Students id"}
        value={id}
        onChangeText={(val) => setid(val)}
      />
      <Input
        placeholder={"Students Name"}
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Input
        placeholder={"Students gpa"}
        value={gpa}
        onChangeText={(val) => setgpa(val)}
      />
      <Button title="Add Students" onPress={storeStudents} />
      <Button style={{marginTop:10}} title="View Student" onPress={() => navigation.navigate('ViewStudentList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default AddStudent;
