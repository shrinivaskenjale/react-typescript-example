class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.id = crypto.randomUUID();
    this.text = text;
  }
}

export default Todo;
