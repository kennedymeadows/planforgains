import { useState, useEffect } from "react";
import RecipeCard from "@/components/RecipeCard";
import FunFacts from "@/components/FunFacts";
import { v4 as uuidv4 } from "uuid";
import { auth } from "@/firebase/config";
import getDocument from "@/firebase/firestore/getData";

export default function Generator() {
  const [mealPlan, setMealPlan] = useState({ recipes: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [dietPreference, setDietPreference] = useState("healthy"); // Default value

  useEffect(() => {
    const fetchUserDietPreference = async () => {
      const user = auth.currentUser;
      if (user) {
        const { result, error } = await getDocument("users", user.uid);
        if (error) {
          console.log(error);
          return;
        }
        if (result.exists()) {
          setDietPreference(result.data().dietPreference);
        }
      }
    };
    fetchUserDietPreference();
  }, []);

  const prompt = `
  You are going to write a JSON collection of recipes for a meal plan.
    
  Consider the following recipe specifications:
  The meal plan will be made up of 2 protein recipes, 4 vegetable recipes, and 3 carb recipes. The recipes should be healthy, interesting, and fun. The recipes should fit a ${dietPreference}. They should also be recipes that batch well and can be made in advance.
    
  Now consider the following Typescript Interface for the JSON schema:
    
  interface Recipe {
      name: string;
      category: string; (protein, vegetable, carb)
      nutrition: {
          portion_size: text;
          calories: number;
          fat: number;
          protein: number;
          carbs: number;
      }
  }
    
  Write the recipes section according to the Recipe schema. On the response, include only the JSON.
  `;

  const handleGenerateMealPlan = async () => {
    setIsLoading(true);
    setMealPlan({ recipes: [] });
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    data.recipes = data.recipes.map((recipe) => ({ ...recipe, id: uuidv4() }));

    setMealPlan(data);
    setIsLoading(false);
  };

  const proteinRecipes = mealPlan.recipes.filter(
    (recipe) => recipe.category === "protein"
  );
  const vegetableRecipes = mealPlan.recipes.filter(
    (recipe) => recipe.category === "vegetable"
  );
  const carbRecipes = mealPlan.recipes.filter(
    (recipe) => recipe.category === "carb"
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-6 gap-2">
            <button
              type="button"
              onClick={handleGenerateMealPlan}
              className="col-span-2 col-start-3 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Generate New Meal Plan"}
            </button>
            {isLoading && (
              <>
                <div className="col-span-6 grid grid-cols-4 justify-center grid-rows-3">
                  <div className="col-span-2 col-start-2 row-span-1 row-start-1 text-base justify-center">
                    <p className="text-center">
                      It takes about 30 seconds to generate your meal prep...
                    </p>
                  </div>
                  <div className="col-span-2 col-start-2 row-span-1 row-start-2">
                    <FunFacts />
                  </div>
                </div>
              </>
            )}
            {!isLoading && mealPlan.recipes.length > 0 && (
              <>
                <div className="col-span-6">
                  <h2 className="text-3xl font-bold tracking-tight py-3 text-center mt-5">
                    Protein Recipes
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {proteinRecipes.map((recipe) => (
                      <div key={recipe.id} className="col-span-1">
                        <RecipeCard recipe={recipe} />
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight py-3 text-center mt-5">
                    Vegetable Recipes
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {vegetableRecipes.map((recipe) => (
                      <div key={recipe.id} className="col-span-1">
                        <RecipeCard recipe={recipe} />
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight py-3 text-center mt-5">
                    Carb Recipes
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {carbRecipes.map((recipe) => (
                      <div key={recipe.id} className="col-span-1">
                        <RecipeCard recipe={recipe} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
