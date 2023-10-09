import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { db } from "../FirebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";


const AddStudents = ({ navigation }) => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [gpa, setGPA] = useState("");



  const addToStore = async () => {
    try {
      const docRef = await addDoc(collection(db, "students"), {
        id: id,
        name: name,
        gpa: gpa,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Student added successfully");
      setID("");
      setName("");
      setGPA("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  };




  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={"Students id"}
        value={id}
        onChangeText={(val) => setID(val)}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Students Name"}
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Students gpa"}
        value={gpa}
        onChangeText={(val) => setGPA(val)}
      />
      <View style={{ rowGap: 10 }}>
        <Button title="Add Students" onPress={addToStore} />
        <Button
          style={{ marginTop: 10 }}
          title="View Student"
          onPress={() => navigation.navigate("view")}
        />
      </View>
    </View>
  );
};

export default AddStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    // width: "100%",
    // backgroundColor: "#fff",

    // justifyContent: "center",
  },
  img: {
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    // flex: 1,
    // width: "80%",
    marginTop: 20,
  },
});
