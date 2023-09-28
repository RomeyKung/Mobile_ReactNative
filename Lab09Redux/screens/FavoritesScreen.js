import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux'

const FavMeal = useSelector((state) => state.meal.favoriteMeals);

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <MealList listData={FavMeal} navigation={props.navigation} />
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
