export default function Main() {
    return (
        <main>
            <form className="user_input flex gap-6 w-full justify-center py-10" action="">
                <input aria-label="Add Ingredient" className="border border-gray-900 bg-white py-2 px-4 rounded" type="text" name="" id="" placeholder="eg. oregano" />
                <button className="text-white border bg-black py-2 px-4 rounded" type="submit">+ Add Ingredient</button>
            </form>
        </main>
    )
}