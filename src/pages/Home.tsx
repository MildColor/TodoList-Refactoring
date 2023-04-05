import Header from "../components/Header/Header";
import CreateTodoForm from "../components/Main/CreateTodoForm";
import TodoList from "../components/Main/TodoList";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";

function Home() {
  return (
    <BoardFrame>
      <BoardHeader>
        <Header title="TODO" />
      </BoardHeader>
      <BoardBody>
        <CreateTodoForm />
        <TodoList />
      </BoardBody>
    </BoardFrame>
  );
}

export default Home;
