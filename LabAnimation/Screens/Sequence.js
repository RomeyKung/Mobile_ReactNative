import { StyleSheet, Text, View, Animated, Button } from "react-native";
import React, { useRef } from "react";

const SequenceScreen = () => {
  const refOpacity = useRef(new Animated.Value(1)).current;
  const refRotate = useRef(new Animated.Value(0)).current;
  const rotate = refRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const animate = () => {
    Animated.sequence([
      Animated.timing(refOpacity, {
        toValue: 0.3,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(refOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(refRotate, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      refOpacity.setValue(1);
      refRotate.setValue(0);
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 180,
            height: 150,
            transform: [{ rotate: rotate }],
            opacity: refOpacity,
          }}
          source={require("../assets/IT_Logo.png")}
          resizeMode={"contain"}
        />
      </View>
      <Button title="RUN SEQUENCE" onPress={animate} />
    </View>
  );
};

export default SequenceScreen;

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
