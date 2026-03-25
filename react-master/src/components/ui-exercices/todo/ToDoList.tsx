import type { Todo } from "./TodoApp";
import TodoItem from "./ToDoItem";


type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TodoList({ todos, onDelete, onToggle }: Props) {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos.length === 0 && <p>No tasks yet 😴</p>}

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}