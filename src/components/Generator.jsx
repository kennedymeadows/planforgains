import { useState, useEffect } from "react";

const prompt =
  "Generate a 7-day meal plan for one person. The meal plan should include 3 meals per day (breakfast, lunch, and dinner). Each meal should have a name, a list of ingredients, and a list of equipment needed to prepare it. The meal plan should also include a shopping list that lists all the ingredients needed to prepare the meals.";

export default function Generator() {
  const [mealPlan, setMealPlan] = useState([]);

  const handleGenerateMealPlan = async () => {
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.text();
    setMealPlan(data);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-6 gap-2">
            <button
              type="button"
              onClick={handleGenerateMealPlan}
              className="col-span-2 col-start 3 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Generate New Meal Plan
            </button>
            {mealPlan && (
              <div className="col-span-4 col-start-2">{mealPlan}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
