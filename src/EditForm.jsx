import React from "react";

class EditForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.todo.text,
		}
	}
	render() {
		return (
			<form
				className='todos-item-form'
				onSubmit={evt => {
					this.props.todo.edit = !this.props.todo.edit
					this.props.updateTodos()
				}}
			>
				<input
					type='text'
					placeholder='enter your changes'
					value={this.state.value}
					onChange={evt => {
						this.setState({
							value: evt.target.value,
						})
						this.props.todo.text = evt.target.value
						this.props.updateTodos()
					}}
				/>
				<button>Ok</button>
			</form>
		)
	}
}

export default EditForm