import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['Buy milk', 'Wake up early', 'Eat a cat'],
      currentTask: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      currentTask: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { currentTask, tasks } = this.state;
    this.setState({
      tasks: [...tasks, currentTask],
      currentTask: ''
    })
  }

  handleDelete(item) {
    return () => {
      this.setState({
        tasks: this.state.tasks.filter(value => value !== item)
      })
    }
  }

  render() {
    return (
      <div>
        <h1>A ToDoList</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.currentTask} onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
        <ol>
          {this.state.tasks.map((item, index) => {
            const key = item+index;
            return (
              <li key={key}>
                <span>{item}</span>
                <button onClick={this.handleDelete(item)}>x</button>
              </li>)
          })}
        </ol>
      </div>
    );
  }
}

export default App;
