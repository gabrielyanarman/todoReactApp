import './App.css';
import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
      return (
				<div className='App'>
					<ToDoList />
				</div>
			)
  }
}

export default App;
