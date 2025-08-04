import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./ai.js"

export default function Main() {

    const [ingredients, setIngredients] = useState([])

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