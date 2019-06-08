import './App.css';
import React from 'react';
import TodoList from './TodoList';
import Attribution from './Attribution';
import Header from './Header';

export default() => {
  return (<div className="app">
    <Header/>
    <h1>Tasks</h1>
    <TodoList/>
    <Attribution/>
  </div>);
};
