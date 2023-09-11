import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.imgs}
          source={require("../pics/IT_Logo.png")}
        ></Image>

        <Text>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถานบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
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
  