import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // Function to handle input change
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  // Function to add a new task
  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: '',
      }));
    }
  };

  // Function to remove a task
  removeTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="App">
        <center>
        <h2>ToDo List</h2>
        <div>
          <input
            type="text"
            placeholder="Add a new task to list"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </center>
      </div>
    );
  }
}

export default App;
