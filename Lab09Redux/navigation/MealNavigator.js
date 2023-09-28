import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { useDispatch } from 'react-redux';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {toggleFavorite} from "../store/features/meal";
//custom header
import { HeaderButton } from "react-navigation-header-buttons"; 
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = props => {
    return(
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color="white"
        />
    )
}



const Stack = createNativeStackNavigator();

export default function MealNav() {
    const dispatch  = useDispatch();
    const toggleFavoriteHandler = (id) => {
        dispatch(toggleFavorite(id));}
    return (
        <Stack.Navigator
            initialRouteName="Category"
            screenOptions={{
                headerStyle: {backgroundColor: '#4a148c'},
                headerTintColor: 'white',
            }}>
            <Stack.Screen name="Category" component={CategoriesScreen} />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}  options={({route})=>({
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Favorite"
                            iconName="ios-star"
                            onPress={() => {toggleFavoriteHandler(route.params.mealItem.id)}}
                        />
                    </HeaderButtons>
                )
            })}/>
        </Stack.Navigator>
    );

}
