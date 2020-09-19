import React from "react";
import Todo from "./Todo";
function List() {
  const items = [];
  const removeTodo = () => {}
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Todo item={item} removeTodo={(id) => removeTodo(id)} />
      ))}
    </ul>
  );
}
export default List;