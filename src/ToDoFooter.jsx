import React from "react";

class ToDoFooter extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="footer">
                <span className="footer-span">{this.props.todos.filter((todo) => todo.completed === true).length} / {this.props.todos.length} Completed</span>
                <button className="footer-btn" onClick={(evt) => {
                    this.props.filterTodos()
                }}>Clear Completed</button>
            </div>
        )
    }
}

export default ToDoFooter