import React, { useState } from "react";

function TodoItem({completed,text,removeTodo,id,completedTodo,editTodo}) {
    const [edit,setEdit] = useState(false);
    const [todoValue,setTodoValue] = useState(text)

    function toggleHandMode() {
        setEdit((prev) => {
           return !prev
        })
    }

    if(!edit) {
        return (
            <div className="todos-item">
                <label>
                    <input type="checkbox" checked ={completed} onChange={(evt) => {
                        completedTodo(id)
                    }}/>
                    <span>{text}</span>
                </label>
                <button onClick={toggleHandMode}>Edit</button>
                <button onClick={(evt) => {
                    removeTodo(id)
                }}>Delete</button>
            </div>
        )
    } else {
        return (
            <form className="todos-item-form" onSubmit={(evt) => {
                evt.preventDefault()
                toggleHandMode();
                editTodo(id,todoValue)
            }}>
                <input type="text" value={todoValue} placeholder="enter your changes" onChange={(evt) => {
                    setTodoValue(evt.target.value)
                }}/>
                <button>Ok</button>
            </form>
        )
    }
}

export default TodoItem