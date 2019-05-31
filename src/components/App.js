import './App.css';
import React from 'react';
import TodoList from './TodoList';
import Attribution from './Attribution';

export default() => {
  return (<div className="app">
    <h1>Tasks</h1>
    <TodoList/>
    <Attribution/>
  </div>);
};
