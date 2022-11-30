import styled from "styled-components";
import CustomButton from "./CustomButton";

function Todo(props) {
  return (
    <div className="todo-style">
      <h2 className="title">{props.todo.title}</h2>
      <br></br>
      <div className="content">{props.todo.content}</div>
      <div className="buttons">
        <STDelbtn
          onClick={() => {
            props.handleDelete(props.todo.id);
          }}
        >
          삭제하기
        </STDelbtn>
        <STDonebtn onClick={() => props.handleDone(props.todo.id)}>
          {props.todo.isDone ? "취소" : "완료"}
        </STDonebtn>
      </div>
    </div>
  );
}

const STDelbtn = styled.button`
  background-color: #fff;
  border: 2px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

const STDonebtn = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 100px;
`;
export default Todo;
