import { useRef } from "react";

import styles from "./NewTodoForm.module.css";

interface NewTodoFormProps {
  onAddTodo: (text: string) => void;
}

const NewTodoForm = ({ onAddTodo }: NewTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current === null || inputRef.current.value.trim() === "")
      return;
    onAddTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodoForm;
