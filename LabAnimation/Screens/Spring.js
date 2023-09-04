import { StyleSheet, Text, View, Animated, Button } from "react-native";
import React, { useRef } from "react";

const SpringScreen = () => {
    const refScale = useRef(new Animated.Value(0.3)).current;
    const SpringAnim = () => {
        Animated.spring(refScale,{
            toValue:0.7,
            friction:1, // bounce times
            useNativeDriver:true,
        }).start(()=>refScale.setValue(0.3))
    };
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 180, height: 150, transform: [{ scale: refScale }] }}
          source={require("../assets/IT_Logo.png")}
          resizeMode={"contain"}
        />
      </View>
      <Button title="Spring" onPress={SpringAnim} />
    </View>
  );
};

export default SpringScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
