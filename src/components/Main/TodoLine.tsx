import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDeleteTodoMutation } from "../../hooks/queries/todo/useDeleteTodoMutation";
import { useUpdateTodoMutation } from "../../hooks/queries/todo/useUpdateTodoMutation";
import { Todo } from "../../types/todos";
import useForm from "../../hooks/common/useForm";
import { emptyStringValidator } from "../../utils/validators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { PAGE_PATH } from "../../constants/path";
import Button from "../common/Button/Button";
import { Input } from "../common/Input/Input";

function TodoLine({ todo }: { todo: Todo }) {
  const { id } = todo;
  const [isEdit, setIsEdit] = useState(false);
  const [{ title, content }, onChange] = useForm({
    title: todo.title,
    content: todo.content,
  });

  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const deleteHandler = () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (confirm) return deleteTodoMutate(todo.id);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emptyStringValidator([title, content]))
      return alert("빈칸을 채워주세요");

    const confirm = window.confirm("정말 수정하시겠습니까?");
    if (confirm) updateTodoMutate({ title, content, id });

    setIsEdit(false);
  };

  return (
    <StTodoLi>
      {!isEdit ? (
        <>
          <Link to={PAGE_PATH.TODO_DETAIL(id)}>
            <StSpan width="100px">{todo.title}</StSpan>
            <StSpan width="350px">{todo.content}</StSpan>
          </Link>

          <Button type="button" onClick={deleteHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            width="30px"
            height="30px"
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </>
      ) : (
        <>
          <Form onSubmit={onSubmitHandler} id="edit-todo">
            <Input
              type="title"
              id="title"
              name="title"
              value={title}
              onChange={onChange}
              width="100px"
              height="30px"
            />
            <Input
              type="content"
              id="content"
              name="content"
              value={content}
              onChange={onChange}
              width="350px"
              height="30px"
            />
          </Form>

          <Button type="submit" form="edit-todo">
            <FontAwesomeIcon icon={faCheck} />
          </Button>

          <Button
            type="button"
            onClick={() => setIsEdit(!isEdit)}
            width="30px"
            height="30px"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </>
      )}
    </StTodoLi>
  );
}

export default TodoLine;

const StTodoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const StSpan = styled.span<{ width?: string }>`
  display: inline-block;
  height: 30px;
  width: ${(props) => props.width};
  text-align: start;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;
