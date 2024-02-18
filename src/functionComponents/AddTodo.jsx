import React, { useState } from "react"

function AddTodo({addTodo}) {
    const [value,setValue] = useState('')

    return(
        <form className="form" onSubmit={(evt) => {
            evt.preventDefault();
            if (!value) return
            addTodo({ id: Math.random(), text: value, completed: false })
            setValue('')
        }}>
            <input className="input" type="text" value={value} placeholder="enter your todo" onChange={(evt) => {
                setValue(evt.target.value)
                console.log(value);
            }}/>
            <button className="add-btn">Add</button>
        </form>
    )
}

export default AddTodo