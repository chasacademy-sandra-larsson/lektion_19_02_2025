"use client"
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updateCuisine, updateMeal} from './../redux/slices/foodSelectionSlice'
import type { RootState } from "./../redux/store";
import { useGetRestaurantsQuery } from "../redux/services/restaurantsAPI";

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

    // Fetch med RTK Query med useGetRestaurantsQuery 

    const { data, error, isLoading} = useGetRestaurantsQuery();

    //if (isLoading) return <div>Loading...</div>;

    // Event => skickar vad som ska ändras i state
    const dispatch = useDispatch()

    // Hämtar nuvarande state
    const foodState = useSelector((state: RootState) => state.foodSelection)

    const filteredData = data.restaurants?.filter((item: Restaurant) => {
        return item.tags.includes(foodState.place) && item.tags.includes(foodState.cuisine) && item.tags.includes(foodState.meal);
    })


    return (
        <div>
            <div className="flex justify-center items-center gap-4">
                <div>
                    <label htmlFor="place" className="sr-only">Var vill du äta?</label>
                    <select 
                        id="place"
                        value={foodState.place}
                        onChange={(e) => dispatch(updatePlace(e.target.value))  }
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
                        value={foodState.cuisine}
                        onChange={(e) => dispatch(updateCuisine(e.target.value)) }
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
                        onChange={(e) => dispatch(updateMeal(e.target.value)) }
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
                    {/* Filtered restaurants */}
                    {filteredData?.map((item: Restaurant) => {
                        <div key={item.name}>{item.name}</div>
                    })}
            </div>
        </div>
    )
}

export default FoodSelector;