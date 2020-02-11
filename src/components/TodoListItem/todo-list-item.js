import React from "react";

import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important ? 'blue' : 'black'
  };

  return (
      <span
        style={style}
        className="todo-list-item">
        <span>
            {label}
        </span>
        <div className="btn-group">
            <button type="button" className="btn btn-delete">
            <i className="fa fa-trash-o"></i>
        </button>
        <button type="button" className="btn btn-excl">
            <i className="fa fa-exclamation"></i>
        </button>
        </div>

      </span>
  );

};

export default TodoListItem;