import { createSlice } from "@reduxjs/toolkit";
import {MEALS} from "../../data/dummy-data.js"

export const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: MEALS,
        filteredMeals: MEALS,
        favoriteMeals: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            // console.log("payload na: "+action.payload.id);
            console.log("Fav na: " + state.favoriteMeals);
            const isInFav = state.favoriteMeals.findIndex(meal => meal.id === action.payload);

            if (isInFav >= 0) {
                //remove from favorite
                const updateStateFav = state.favoriteMeals.filter(meal => meal.id !== action.payload);
                return { ...state, favoriteMeals: updateStateFav };
                // return state;
            } else {
                //add to favorite
                // console.log("Item"+ MEALS, "ID"+ action.payload);
                const meal = state.meals.find(meal => meal.id === action.payload);
                state.favoriteMeals.push(meal);
                console.log("Fav na: " + JSON.stringify(state.favoriteMeals));
            }
        }
    }
});

export const { toggleFavorite } = mealSlice.actions;
export default mealSlice.reducer;