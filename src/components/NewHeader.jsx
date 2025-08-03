import { useState } from "react"

export default function NewHeader(props) {
    return (
        <header className="flex p-2 bg-blue-100 gap-3 items-center justify-end">
            <img className="w-10" src="/user.png" alt="user" />
            <p>{props.username}</p>
        </header>
    )
}