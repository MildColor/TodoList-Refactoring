import Header from "../components/common/Header/Header";
import CreateTodoForm from "../components/Main/CreateTodoForm";
import TodoList from "../components/Main/TodoList";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";

function Home() {
  return (
    <BoardFrame height="720px">
      <BoardHeader>
        <Header title="TODO" />
      </BoardHeader>
      <BoardBody height="640px">
        <CreateTodoForm />
        <TodoList />
      </BoardBody>
    </BoardFrame>
  );
}

export default Home;
