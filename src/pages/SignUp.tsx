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
      <BoardHeader width="400px">
        <Header title="SignUp" />
      </BoardHeader>
      <BoardBody width="400px" height="500px">
        <SignUpForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignUp;
