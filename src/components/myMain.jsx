import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./ai.js"

/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

export default function Main() {

    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    function addIngredient(formData) {
        // Get user input:
        const newIngredient = formData.get("ingredient")
        setIngredients(prevArr => [...prevArr, newIngredient])
    }


    // State to store Chef Claude respone
    const [AI_response, setAIResponse] = useState("")

    async function getRecipe() {
        const recipe = await getRecipeFromMistral(ingredients) // wait for AI
        setAIResponse(recipe) // update state with recipe text
    }

    return (
        <main className="flex flex-col sm:items-center">
            <form action={addIngredient} className="user_input flex gap-6 w-full justify-center py-10">
                <input aria-label="Add Ingredient" className="border border-gray-900 bg-white py-2 px-4 rounded" type="text" name="ingredient" placeholder="eg. oregano" />
                <button className="text-white border bg-black py-2 px-4 rounded" type="submit">+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {AI_response && <ClaudeRecipe AI_respone={AI_response} />}
        </main>
    )
}