import React from "react";

class AddToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <form className="form" onSubmit={(evt => {
                evt.preventDefault();
                if(!this.state.value) return

                this.props.addTodos({
                    completed: false, text: this.state.value, id: Math.random(),edit: false
                });
                this.setState({value: ''})
            })}>
                <input className="input" type="text" value={this.state.value} placeholder="enter to do" onChange={(evt) => {
                    this.setState({
                        value: evt.target.value
                    })
                }}/>
                <button className="add-btn">Add</button>
            </form>
        )
    }
}

export default AddToDo