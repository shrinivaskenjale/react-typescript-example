import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";

interface TodosProps {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos = ({ items, onRemoveTodo }: TodosProps) => {
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
