import Todo from "../models/Todo";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  onRemoveTodo: (id: string) => void;
}

const TodoItem = ({ todo, onRemoveTodo }: TodoItemProps) => {
  return (
    <li onClick={() => onRemoveTodo(todo.id)} className={styles.item}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
