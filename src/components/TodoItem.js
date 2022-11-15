import React from "react";
import { useRef } from "react";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = (props) => {
  const { updateTodo, item, removeTodo, completeTodo } = props;
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div className="pt-5 box-content flex justify-center">
    <div className="text-center pt-1 px-3 bg-slate-100 border-2 rounded-lg border-slate-300">
    <li key={item.id}>
      <textarea className="pt-1 h-8 text-center border-2 outline-none rounded-md border-slate-300"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="flex justify-end">
      <button className="px-1" onClick={() => changeFocus()}><EditIcon fontSize="small" style={{color:"#60a5fa"}}/></button>
      <button className="px-1" onClick={() => completeTodo(item.id)}><DoneIcon fontSize="small" style={{color:"#16a34a"}}/></button>
      <button className="px-1" onClick={() => removeTodo(item.id)}><DeleteIcon fontSize="small" style={{color:"#f87171"}} /></button>
      </div>
      {/* {item.completed&&<span>Done</span>} */}
    </li>
    </div>
    </div>
  );
};

export default TodoItem;
