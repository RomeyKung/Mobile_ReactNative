import { configureStore } from '@reduxjs/toolkit'
import mealSlice from './features/meal'
const store = configureStore({
    reducer: {
        meal: mealSlice
    },
})

export default store