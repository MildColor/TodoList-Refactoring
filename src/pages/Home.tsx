import Header from "../components/common/Header/Header";
import TodoForm from "../components/Main/TodoForm";
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
        <TodoForm />
        <TodoList />
      </BoardBody>
    </BoardFrame>
  );
}

export default Home;
