import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../FirebaseConfig.js";
import { FlatList } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
const ViewStudents = ({navigation}) => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    // สำหรับ get ข้อมูล 1 อย่าง
    // const data = await getDocs(collection(db, "students"));
    // data.forEach((doc) => {
    //   setStudents([...students, doc.data()]);
    // });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // สำหรับ get ข้อมูลหลายอย่าง
    const collectionStudents = collection(db, "students");
    const unsub = onSnapshot(collectionStudents, (snapshot) => {
      const allStudents = snapshot.docs.map((doc) => ({
        key: doc.id,
        ...doc.data(),
      }));
      setStudents(allStudents);
      console.log("allStudents ", JSON.stringify(allStudents));
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    //   const q = query(collection(db, "students"), where("state", "==", "CA")); example where
    // const queryFromDB = query(collection(db, "students"));
    // const unsubscribe = onSnapshot(queryFromDB, (querySnapshot) => {
    //   const allStudents = [];
    //   querySnapshot.forEach((doc) => {
    //     allStudents.push(doc.data());
    //   });
    //   setStudents(allStudents);
    //   console.log("allStudents ", allStudents.join(", "));
    // });


    // disconnect listener
 
  };

  useEffect(() => {
    getStudents();
  }, []);

  
  return (
    <View>
      <FlatList
        // keyExtractor={(item) => item.id}
        data={students}
        renderItem={({ item, index }) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "bold" }}>
                {item.id}
              </ListItem.Title>
              <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={()=>navigation.navigate("info", {key: item.key})} />
          </ListItem>
        )}
      />
    </View>
  );
};

export default ViewStudents;
