export default function IngredientsList(props) {
    const food_list = props.ingredients.map(item => <li key={item}>{item}</li>)
    return (
        <section>
            <h2 className="font-semibold text-2xl py-3">Ingredients on hand:</h2>
            <ul className="list-disc px-10">{food_list}</ul>
            {props.ingredients.length > 3 && <div className="get_recipe_container mt-10 px-2 sm:px-4 py-7 bg-red-100 flex justify-between items-center">
                <div>
                    <h2 ref={props.ref} className="font-semibold text-xl mb-5">Ready for a recipe?</h2>
                    <p className="text-gray-600">Generate a recipe from your list of ingredients</p>
                </div>
                <div>
                    <button onClick={props.getRecipe} className="bg-red-800 py-2 px-4 text-white hover:font-bold" href={null}>Get a recipe</button>
                </div>
            </div>}
        </section>
    )
}