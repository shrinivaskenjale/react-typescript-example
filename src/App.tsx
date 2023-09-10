import { useState } from "react";

import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((todos) => [...todos, newTodo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm onAddTodo={handleAddTodo} />
      <Todos items={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default App;
