import Header from "../components/Header/Header";
import CreateTodoForm from "../components/Home/CreateTodoForm";
import TodoList from "../components/Home/TodoList";
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
