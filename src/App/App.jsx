import React, { Component, PropTypes } from 'react';

import TodoItem from '../TodoItem/TodoItem.jsx';

import styles from './style.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoAdd: '111'
    };
  }

  handleChange(event) {
    this.setState({
      todoAdd: event.target.value
    });
  }

  handleKeyDown(event) {
    const { todoList, todoAdd } = this.state;
    if (event.key === 'Enter' && event.target.value !== '') {
      this.setState({
        todoAdd: '',
        todoList: [...todoList, todoAdd]
      });
    }
  }

  handleItemDelete(index) {
    const { todoList } = this.state;
    this.setState({
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1, todoList.length)]
    });
  }

  render() {
    const { todoList, todoAdd } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.header}>
            <input type="text" style={styles.input} value={todoAdd} onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} />
          </div>
          <div style={styles.content}>
            {
              todoList.map((todoItem, index) => <TodoItem key={index} item={todoItem} index={index} onDeleteItem={this.handleItemDelete.bind(this)} />)
            }
          </div>
        </div>
      </div>
    );
  }
}
