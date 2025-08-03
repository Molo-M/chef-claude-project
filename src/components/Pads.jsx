import { useState } from "react"

export default function PadButton(props) {

    return (
    <button 
        onClick={() =>props.toggle(props.id)} 
        className={props.status ? "opacity-100" : "opacity-10"} 
        style={{ backgroundColor: props.color }}
    ></button>
    )
}