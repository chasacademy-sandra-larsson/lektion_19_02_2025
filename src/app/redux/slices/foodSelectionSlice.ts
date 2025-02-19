import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FoodState = {
    place: string;
    eat: string;
    meal: string;
};

const initialState: FoodState = {
      place: "",
      eat: "",
      meal: "",
    // ... other state properties
  };

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    updatePlace(state, action: PayloadAction<string>) {
      state.place = action.payload;
    },
    updateEat(state, action: PayloadAction<string>) {
      state.eat = action.payload;
    },
    updateMeal(state, action: PayloadAction<string>) {
      state.meal = action.payload;
    },
  },
});

export const { updatePlace, updateEat, updateMeal } = foodSlice.actions;
export default foodSlice.reducer;