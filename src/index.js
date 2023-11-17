import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {

  const TodoData = [
    {label: 'Drink Kofee', important: false},
    {label: 'Awesome React App', important: true},
    {label: 'Please Sleep', important: false},
  ];

  return (
<div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos={ TodoData } />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));