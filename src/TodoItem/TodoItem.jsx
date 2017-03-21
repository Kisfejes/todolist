import React, { Component, PropTypes } from 'react';

import styles from './style.js';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  onDelete() {
    const { index, onDeleteItem } = this.props;
    onDeleteItem(index);
  }

  render() {
    const { item, onDeleteItem } = this.props;

    return (
      <div style={styles.container}>
        <span>{item}</span>
        <button onClick={this.onDelete.bind(this)}>Delete</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
