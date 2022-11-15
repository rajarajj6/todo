import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import AddIcon from '@mui/icons-material/Add';

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

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  //   console.log(props);

  return (
    <div>
        <div className="text-center py-7">
        <input type="text" onChange={(e) => changeHandler(e)} className="pl-3 w-4/12 h-10 border border-red-900 border-2 rounded-md text-red-500 outline-none"/>{" "}
      <button
        onClick={() => {
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          });
        }}
      >
        <AddIcon fontSize="large" style={{color:"#60a5fa"}}/>
      </button>
      </div>
      {/* <br /> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
