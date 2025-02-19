"use client"

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { updatePlace, updateEat, updateMeal } from '../redux/slices/foodSelectionSlice'
import { useGetRestaurantsQuery } from '../redux/services/restaurantsAPI'


const places = [
    "Södermalm",
    "Norrmalm",
    "Östermalm",
    "Gamla Stan",
    "Kungsholmen",
  ];
  const foods = ["Asiatisk", "Italiensk", "Mexikansk", "Indisk", "Fransk"];
  const meals = ["Frukost", "Lunch", "Middag", "Bar", "Annat"];

  type Restaurant = {
    name: string;
    tags: string[];
  }


function FoodSelector() {

    const { data: restaurants, isLoading, error } = useGetRestaurantsQuery(undefined);

     //if (isLoading) return <div>Loading...</div>;

    console.log(restaurants?.data);

  
    const dispatch = useDispatch()
    const foodState = useSelector((state: RootState) => state.foodSelection)

    const filteredRestaurants = restaurants?.data.filter((restaurant: Restaurant) => {
        return restaurant.tags.includes(foodState.place) && restaurant.tags.includes(foodState.eat) && restaurant.tags.includes(foodState.meal);
    });


    return (
        <div>
            <div className="flex justify-center items-center gap-4">
                <div>
                    <label htmlFor="place" className="sr-only">Var vill du äta?</label>
                    <select 
                        id="place"
                        value={foodState.place}
                        onChange={(e) => dispatch(updatePlace(e.target.value))}
                        className="w-full"
                    >
                        <option value="">Var vill du äta?</option>
                        {places.map((place, index) => (
                            <option key={index} value={place}>
                                {place}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="food" className="sr-only">Vad vill du äta?</label>
                    <select
                        id="food"
                        value={foodState.eat}
                        onChange={(e) => dispatch(updateEat(e.target.value))}
                        className="w-full"
                    >
                        <option value="">Vad vill du äta?</option>
                        {foods.map((food, index) => (
                            <option key={index} value={food}>
                                {food}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="meal" className="sr-only">När vill du äta?</label>
                    <select
                        id="meal"
                        value={foodState.meal}
                        onChange={(e) => dispatch(updateMeal(e.target.value))}
                        className="w-full"
                    >
                        <option value="">När vill du äta?</option>
                        {meals.map((meal, index) => (
                            <option key={index} value={meal}>
                                {meal}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                {filteredRestaurants?.map((restaurant: Restaurant) => (
                    <div key={restaurant.name}>{restaurant.name}</div>
                ))}
            </div>
        </div>
    )
}

export default FoodSelector;