import DisplayTodo from "./components/DisplayTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <div className="bg-green-200 h-16 text-orange-400 pt-1">
        <h1 className="font-medium text-5xl  text-center">Todo App</h1>
      </div>
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;
