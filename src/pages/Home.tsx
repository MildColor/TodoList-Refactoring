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
  align-items: center;
  flex-direction: column;
  width: 550px;
  height: 800px;
  padding-top: 100px;
`;
