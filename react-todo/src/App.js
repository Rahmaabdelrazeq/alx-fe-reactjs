// src/App.js
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoList.test />
    </div>
  );
}

export default App;