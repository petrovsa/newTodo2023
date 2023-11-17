import React from "react";
import './todo-list-item';

const TodoListItem = ({label, important = false}) => {

const spanStyle = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal'
}

    return (
    <span 
    className="todo-list-item"
    >
        <span className="todo-list--item-label" style={spanStyle}>
        {label}
        </span>
        <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </span>
    );
};

export default TodoListItem