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
      <BoardHeader>
        <Header title="SignUp" />
      </BoardHeader>
      <BoardBody>
        <SignUpForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignUp;
