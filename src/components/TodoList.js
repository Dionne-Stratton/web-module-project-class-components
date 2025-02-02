import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="toDoArray-list">
      {props.toDoArray.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-button" onClick={props.clearDone}>
        Clear completed
      </button>
    </div>
  );
};
export default TodoList;