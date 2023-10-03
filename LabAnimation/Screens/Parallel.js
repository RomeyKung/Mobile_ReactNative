import { StyleSheet, Text, View, Animated, Button, Easing } from "react-native";
import React, { useRef } from "react";
// import { Easing } from "react-native-reanimated";

const SpringScreen = () => {
  const refScale = useRef(new Animated.Value(0.3)).current;
  const refRotateX = useRef(new Animated.Value(0)).current;
  const rotate = refRotateX.interpolate({
    inputRange: [0, 0.2, 0.5, 0.8, 1],
    outputRange: [0, -70, 0, 70, 0],
  });

  const parallelAnim = () => {
    Animated.parallel([
      Animated.spring(refScale, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(refRotateX, {
        toValue: 1,
        useNativeDriver: true,
        duration:3000,
        // speed: -5,
        easing: Easing.bounce,
      }),
    ]).start(() => {
      refScale.setValue(0.3);
      refRotateX.setValue(0);
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 180, height: 150, transform: [{ scale: refScale }] }}
          source={require("../assets/IT_Logo.png")}
          resizeMode={"contain"}
        />
        <Animated.Text style={{ transform: [{ translateX: rotate }] }}>
          Welcome to Faculty of IT!
        </Animated.Text>
      </View>
      <Button title="RUN PARALLEL" onPress={parallelAnim} />
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
    rowGap:100
  },
});
