import Header from "../components/common/Header/Header";
import SignUpForm from "../components/SignUp/SignUpForm";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";

function SignUp() {
  return (
    <BoardFrame>
      <BoardHeader width="40rem">
        <Header title="SignUp" />
      </BoardHeader>
      <BoardBody width="40rem" height="500rem">
        <SignUpForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignUp;
