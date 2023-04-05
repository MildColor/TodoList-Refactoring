import styled from "styled-components";
import Header from "../components/Header/Header";
import CreateTodoForm from "../components/Main/CreateTodoForm";
import TodoList from "../components/Main/TodoList";

function Home() {
  return (
    <Container>
      <Header />
      <CreateTodoForm />
      <TodoList />
    </Container>
  );
}

export default Home;

const Container = styled.section`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-direction: column;
  height: 700px;
  width: 100%;
  /* padding: 10% 0; */
  border-radius: 10px;
`;
