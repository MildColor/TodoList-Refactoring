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
      <BoardHeader height="120px">
        <Header title="TODO" />
        <TodoForm />
      </BoardHeader>
      <BoardBody height="600px">
        <TodoList />
      </BoardBody>
    </BoardFrame>
  );
}

export default Home;
