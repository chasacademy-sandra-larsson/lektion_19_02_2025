import { createSlice } from "@reduxjs/toolkit"


type FootState = {
    place: string;
    cuisine: string;
    meal: string;
}

const initialState: FootState = {
    place: "",
    cuisine: "",
    meal: ""
}

const foodSelectionSlice = createSlice({
    name: 'food',
    initialState: initialState,
    reducers: {
        updatePlace: (state, action) => {state.place = action.payload}, // Du behöver inte göra immutable med ...spread-operatorn - Redux toolkit gör det för dig (Immer-biblioteket)
        updateCuisine: (state, action) => {state.cuisine = action.payload}, // Du behöver inte göra immutable med ...spread-operatorn - Redux toolkit gör det för dig (Immer-biblioteket)
        updateMeal: (state, action) => {state.meal = action.payload} // Du behöver inte göra immutable med ...spread-operatorn - Redux toolkit gör det för dig (Immer-biblioteket)
    }
})

export const { updatePlace, updateCuisine, updateMeal } = foodSelectionSlice.actions;
export default foodSelectionSlice.reducer;