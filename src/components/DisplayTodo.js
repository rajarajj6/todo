import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (obj) => dispatch(completeTodos(obj)),
  };
};
const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div>
      <div className="text-center text-black-600">
        <button className="px-5" onClick={() => setSort("active")}>Active</button>
        <button className="px-5" onClick={() => setSort("completed")}>Complete</button>
        <button className="px-5" onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {/* for active items */}
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    completeTodo={props.completeTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    completeTodo={props.completeTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    completeTodo={props.completeTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
