import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import {
  collection,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig.js";

const InfoStudent = ({ navigation, route }) => {
  const [id, setID] = useState([]);
  const [name, setName] = useState([]);
  const [gpa, setGPA] = useState([]);

  const getStudentInfo = async () => {
    try {
      //set nameCollection, keyDoc
      const studentRef = doc(db, "students", route.params.key);
      //get doc
      const docSnapshot = await getDoc(studentRef);

      if (docSnapshot.exists()) {
        const student = docSnapshot.data();
        setID(student.id);
        setName(student.name);
        setGPA(student.gpa);
        console.log("Document data:", student);
      } else {
        console.log("ไม่พบข้อมูลนักเรียน");
      }
    } catch (e) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    }
  };
  const updateToStore = async () => {
    try {
      const studentRef = doc(db, "students", route.params.key);
      await updateDoc(studentRef, {
        id: id,
        name: name,
        gpa: gpa,
      });
      navigation.navigate("view");
      console.log("อัปเดตข้อมูลเรียบร้อยแล้ว");
    } catch (e) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล:", error);
    }
  };
  const deleteFromStore = async () => {
    try {
      const studentRef = doc(db, "students", route.params.key);
      await deleteDoc(studentRef);
      navigation.navigate("view");

      console.log("ลบข้อมูลเรียบร้อยแล้ว");
    } catch (e) {
      console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
    }
  };

  useEffect(() => {
    getStudentInfo();
  }, []);

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
        <Button title="Update Students" onPress={updateToStore} />
        <Button
          style={{ marginTop: 10 }}
          title="Delete Student"
          onPress={deleteFromStore}
        />
      </View>
    </View>
  );
};

export default InfoStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
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
    marginTop: 20,
  },
});
