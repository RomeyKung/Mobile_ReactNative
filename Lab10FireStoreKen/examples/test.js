import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const test = (props) => {
  const [data, setData] = useState({ 
                                        key:"",
                                        id:"",
                                        name:"",
                                        gpa:"",
                                    });
  useEffect(() => {
    //loadfrom firebase

    const subjDoc = firebase.firestore().collection("students").doc(this.props.route.params.key);
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        setData({
          key: res.id,
          id: subj.id,
          name: subj.name,
          gpa: subj.gpa,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });

  });

  updateStudents() {
    const updateSubjDoc = firebase.firestore().collection("students").doc(this.data.key);
    updateSubjDoc
      .set({
        id: this.data.id,
        name: this.data.name,
        gpa: this.data.gpa,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The Student was updated!! Pls check your DB!!"
        );
        props.navigation.navigate("ViewStudentList")
      });
  }
  deleteStudents() {
    const delSubjDoc = firebase.firestore().collection("students").doc(this.data.key);
    delSubjDoc.delete().then((res) => {
      Alert.alert(
        "Deleting Alert",
        "The Student was deleted!! Pls check your DB!!"
      );
      props.navigation.navigate("ViewStudentList")
    });
  }



  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/IT_Logo.png")}
        style={{ width: 120, height: 100 }}
        containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Input
        placeholder={"Students id"}
        value={this.data.id}
        onChangeText={(val) => setData(...data, data.id=val)}
      />
      <Input
        placeholder={"Students Name"}
        value={this.data.name}
        onChangeText={(val) => setData(...data, data.id=val)}
      />
      <Input
        placeholder={"Students gpa"}
        value={this.data.gpa}
        onChangeText={(val) => setData(...data, data.id=val)}
      />
      <Button
        title="Update Students"
        onPress={() => {
          this.updateStudents();
        }}
      />
      <Button
        title="Delete Students"
        containerStyle={{ marginTop: 10 }}
        onPress={() => {
          this.deleteStudents();
        }}
      />
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
