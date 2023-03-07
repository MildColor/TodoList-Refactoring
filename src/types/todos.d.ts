export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TodoInput = Pick<Todo, "title" | "content">;

export interface TodosReadSuccess {
  data: Todo[];
}
