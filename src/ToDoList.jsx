import React from "react";
import AddToDo from "./AddToDo";
import ToDoFooter from "./ToDoFooter";
import EditForm from "./EditForm";
import PaintTodo from "./PaintTodo";


class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {completed: false,text: 'learn JS',id: Math.random(),edit: false},
                {completed: false,text: 'learn DOM',id: Math.random(),edit: false},
                {completed: false,text: 'learn React',id: Math.random(),edit: false}
            ]
        }
    }

    addTodos = (todo) => {
        this.setState({
            todos: [todo,...this.state.todos]
        })
    }

    updateTodos = () => {
        this.setState({
            todos: [...this.state.todos]
        })
    }

    filterTodos = () => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.completed != true)
        })
    }

    removeTodo = (id) => {
        this.setState({
			todos: this.state.todos.filter(elem => elem.id != id),
		})
    }

    render() {
        return (
			<div className='container'>
				<AddToDo addTodos={this.addTodos} />
				<div className='items'>
					{this.state.todos.map(todo => {
						if(!todo.edit) {
                            return (
                                <div key={todo.id}>
                                    <PaintTodo todo = {todo} removeTodo = {this.removeTodo} updateTodos = {this.updateTodos}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={todo.id}>
                                    <EditForm todo = {todo} updateTodos = {this.updateTodos}/>
                                </div>
                            )
                        }
					})}
				</div>
				<ToDoFooter todos={this.state.todos} filterTodos={this.filterTodos}/>
			</div>
		)
    }
}

export default ToDoList