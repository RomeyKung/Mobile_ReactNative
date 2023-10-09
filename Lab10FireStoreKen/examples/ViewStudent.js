import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class ViewStudent extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("students");

    this.state = {
      subject_list: [],
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      //   console.log("res: ", res);
      //   console.log("res.data() : ", res.data());

      const { id, name, gpa } = res.data();
      all_data.push({
        key: res.id,
        id,
        name,
        gpa,
      });
    });
    // console.log("all_data : ", all_data);
    this.setState({
      subject_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  navigateToViewStudent = (item) => {
    // Navigate to the "ViewStudent" screen
    this.props.navigation.navigate("UpdateStudentInfo", {key: item});
  };
  render() {
    return (
      <ScrollView>
        {this.state.subject_list.map((item, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{fontWeight:"bold"}}>{item.id}</ListItem.Title>
                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron onPress={() => this.navigateToViewStudent(item.key)} />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

export default ViewStudent;
