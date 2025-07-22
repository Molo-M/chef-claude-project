export default function Header() {
    return (
        <header className="flex justify-center py-3 shadow-lg">
            <div className="flex gap-3 items-center">
                <img className="w-10" src="/chef-claude-icon.png" alt="chef-claude-icon" />
                <h1 className="text-3xl font-medium">Chef Claude</h1>
            </div>
        </header>
    )
}