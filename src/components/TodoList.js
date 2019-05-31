import './TodoList.css';
import React from 'react';
import {connect} from 'react-redux';
import {fetchTodosAndUsers} from '../actions';
import UserHeader from './UserHeader';
import UserAvatar from './UserAvatar';

class TodosList extends React.Component {
  componentDidMount() {
    this.props.fetchTodosAndUsers();
  }

  renderList() {
    const {todos} = this.props;
    return todos.map(todo => {
      return (<div key={todo.id} className={todo.completed
          ? "item completed"
          : "item"}>
        <div className="status right floated content">
          {
            todo.completed
              ? 'COMPLETED'
              : 'IN PROGRESS'
          }
        </div>
        <UserAvatar userId={todo.userId}/>
        <div className="content">
          <UserHeader userId={todo.userId}/>
          <div>{todo.title}</div>
        </div>
      </div>);
    });
  }

  render() {
    return <div className="todos-list ui celled large list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {todos: state.todos};
};

export default connect(mapStateToProps, {fetchTodosAndUsers})(TodosList);
