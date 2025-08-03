import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    function addIngredient(formData) {
        // Get user input:
        const newIngredient = formData.get("ingredient")
        setIngredients(prevArr => [...prevArr, newIngredient])
    }

    // whether we've gotten a recipe back from the "chef"
    const [recipeShown, setRecipeShown] = useState(false)

    function getRecipe() {
        setRecipeShown(prevItem => !prevItem)
    }

    return (
        <main className="flex flex-col sm:items-center">
            <form action={addIngredient} className="user_input flex gap-6 w-full justify-center py-10">
                <input aria-label="Add Ingredient" className="border border-gray-900 bg-white py-2 px-4 rounded" type="text" name="ingredient" placeholder="eg. oregano" />
                <button className="text-white border bg-black py-2 px-4 rounded" type="submit">+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}