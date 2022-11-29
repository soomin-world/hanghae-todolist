import CustomButton from "./CustomButton";

function Todo(props) {
  return (
    <div className="todo-style">
      <div className="title">{props.todo.title}</div>
      <br></br>
      <div className="content">{props.todo.content}</div>
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.todo.id);
        }}
      >
        삭제하기
      </CustomButton>
      <CustomButton
        color="blue"
        onClick={() => props.handleDone(props.todo.id)}
      >
        {props.todo.isDone ? "취소" : "완료"}
      </CustomButton>
    </div>
  );
}

export default Todo;
