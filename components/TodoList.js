import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            if (todo.completed == true) {
                return <TodoItem key={todo.id} todo={todo} completed="true" actions={this.props.actions}/>
            } else {
                return <TodoItem key={todo.id} todo={todo} completed="false" actions={this.props.actions}/>
            }

          })
        }
      </ul>
    )
  }
}

export default TodoList
