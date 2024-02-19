import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from './AddTodo'
import TodoFooter from "./TodoFooter";

function TodoList() {

    const [todos, setTodos] = useState(
        [
			{ id: Math.random(), text: 'learn JS', completed: false },
			{ id: Math.random(), text: 'learn DOM', completed: false },
			{ id: Math.random(), text: 'learn React', completed: false },
		])

    function addTodo(todo) {
        setTodos([todo,...todos])
    }


    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function completedTodo(id) {
        setTodos(todos.map((todo) => {
            if(todo.id == id) {
                todo.completed = !todo.completed;
                return todo
            }
            return todo
        }))
    }

    function editTodo(id,newText) {
        setTodos(todos.map((todo) => {
            if(todo.id == id) {
                todo.text = newText;
                return todo
            } 
            return todo
        }))
    }

    function filterTodo() {
        setTodos(todos.filter(todo => todo.completed == false))
    }

    return(
        <div className="container">
            <AddTodo addTodo = {addTodo}/>
            <div className="items">
                {todos.map((todo) => {
                    return (
                    <div key={todo.id}>
                        <TodoItem text = {todo.text} completed = {todo.completed} removeTodo = {removeTodo} id = {todo.id} completedTodo = {completedTodo} editTodo = {editTodo}/>
                    </div>
                    )
        })}
            </div>
            <TodoFooter completed = {todos.filter(todo => todo.completed == true).length} countTodos = {todos.length} filterTodo = {filterTodo}/>
        </div>
    )
}

export default TodoList