import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const labGesture = () => {
    const scale = useRef(new Animated.Value(1)).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => { //set value 
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
            });
            console.log("panx na" , pan.x, pan.y)
            console.log(pan.x._value, pan.y._value)
            pan.setValue({ x: 0, y: 0 });

        },
        onPanResponderMove: (evt, gestureState) => {
            const touches = evt.nativeEvent.touches;
            if (touches.length >= 2) {
              Animated.spring(scale, {
                toValue: 3,
                friction: 3,
                useNativeDriver: false,
              }).start();
            }else{
                pan.setValue({x:gestureState.dx, y:gestureState.dy})
            }   
          },
          onPanResponderRelease: () => {
            Animated.spring(scale, {
              toValue: 1,
              friction: 3,
              useNativeDriver: false,
            }).start();
            pan.flattenOffset();
          },
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require("./IT_Logo.png")}
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box, { transform: [{ scale: scale }] }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box:{
        width:50,
        height:50,
    }

});

export default labGesture;
