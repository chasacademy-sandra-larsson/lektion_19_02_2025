  // @ts-nocheck
/* eslint-disable */
"use client"


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



    return (
        <div>
            <div className="flex justify-center items-center gap-4">
                <div>
                    <label htmlFor="place" className="sr-only">Var vill du äta?</label>
                    <select 
                        id="place"
                        value={}
                        onChange={}
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
                        value={}
                        onChange={}
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
                        value={}
                        onChange={}
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
            </div>
        </div>
    )
}

export default FoodSelector;