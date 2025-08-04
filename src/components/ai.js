import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page.
`

const token = import.meta.env.VITE_HF_ACCESS_TOKEN
if (!token) {
    throw new Error("Hugging Face API token is missing. Check your .env file.")
}

const hf = new HfInference(token)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_new_tokens: 512,
        })
        return response?.choices?.[0]?.message?.content || "No recipe returned."
    } catch (err) {
        console.error("Error fetching recipe:", err)
        return "An error occurred while fetching the recipe."
    }
}
