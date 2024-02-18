import React from "react";

function TodoFooter({ completed, countTodos, filterTodo}) {
	return (
		<div className='footer'>
			<span className='footer-span'>
				{completed} / {countTodos} Completed
			</span>
			<button className='footer-btn' onClick={filterTodo}>
				Clear Completed
			</button>
		</div>
	)
}

export default TodoFooter