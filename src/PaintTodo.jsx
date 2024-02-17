import React from "react";

class PaintTodo extends React.Component {
    // constructor(props) {
    //     super(props) 
    // }

    render () {
        return (
				<div className='todos-item'>
					<label>
						<input
							type='checkbox'
							onClick={evt => {
								this.props.todo.completed = !this.props.todo.completed
								this.props.updateTodos()
							}}
						/>
						<span>{this.props.todo.text}</span>
					</label>
					<button	onClick={evt => {
							this.props.todo.edit = !this.props.todo.edit
							this.props.updateTodos()
						}}>	Edit </button>
					<button	onClick={evt => {
                        this.props.removeTodo(this.props.todo.id)
                    }}>	Delete </button>
				</div>
				)
    }
}

export default PaintTodo